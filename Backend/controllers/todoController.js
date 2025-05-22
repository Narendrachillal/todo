import { supabase } from "../models/supabaseClient.js";
import { generateSummary } from "../services/openaiService.js";
import { sendToSlack } from "../services/slackService.js";

// Get all todos
export const getTodos = async (req, res) => {
  const { data, error } = await supabase.from("todos").select("*");
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

// Add new todo
export const addTodo = async (req, res) => {
  const { title } = req.body;

  const { data, error } = await supabase
    .from("todos")
    .insert([{ title }])
    .select("*");

  if (error) return res.status(500).json({ error: error.message });
  if (!data || !data.length)
    return res.status(500).json({ error: "Insert failed" });

  res.status(201).json(data[0]);
};

// Delete a todo
export const deleteTodo = async (req, res) => {
  const { id } = req.params;
  const { error } = await supabase.from("todos").delete().eq("id", id);
  if (error) return res.status(500).json({ error: error.message });
  res.json({ message: "Todo deleted" });
};

// Update a todo by id
export const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  const updateFields = {};
  if (title !== undefined) updateFields.title = title;
  if (completed !== undefined) updateFields.completed = completed;

  const { data, error } = await supabase
    .from("todos")
    .update(updateFields)
    .eq("id", id)
    .select();

  if (error) return res.status(500).json({ error: error.message });
  if (data.length === 0)
    return res.status(404).json({ error: "Todo not found" });

  res.json(data[0]);
};

// Summarize todos & send to Slack
export const summarizeTodos = async (req, res) => {
  try {
    const { data, error } = await supabase.from("todos").select("*");
    if (error) {
      console.error("Error fetching todos:", error.message);
      return res.status(500).json({ error: error.message });
    }

    if (!data || data.length === 0) {
      return res.status(404).json({ message: "No todos found to summarize." });
    }

    // Generate summary from todos
    const summary = await generateSummary(data);

    // Send summary to Slack
    await sendToSlack(summary);

    res.json({ message: "Summary sent to Slack successfully.", summary });
  } catch (err) {
    console.error(
      "Error summarizing todos:",
      err.response?.data || err.message
    );
    res.status(500).json({ error: "Failed to summarize todos." });
  }
};
