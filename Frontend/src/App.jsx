import React, { useEffect, useState } from "react";
import { api } from "./api.js";
import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";
import Notification from "./components/Notification.jsx";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todoToEdit, setTodoToEdit] = useState(null);
  const [notification, setNotification] = useState({ message: "", type: "" });

  // Fetch todos
  const fetchTodos = async () => {
    try {
      const res = await api.get("/todos");
      setTodos(res.data);
    } catch (error) {
      showNotification("Failed to load todos", "error");
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // Notification helper
  const showNotification = (message, type = "success") => {
    setNotification({ message, type });
    setTimeout(() => setNotification({ message: "", type: "" }), 3000);
  };

  // Add or update todo
  const handleSubmit = async ({ title, id }) => {
    try {
      if (id) {
        // update
        await api.patch(`/todos/${id}`, { title });
        showNotification("Todo updated");
      } else {
        // add
        await api.post("/todos", { title });
        showNotification("Todo added");
      }
      setTodoToEdit(null);
      fetchTodos();
    } catch (error) {
      showNotification("Operation failed", "error");
    }
  };

  // Delete todo
  const handleDelete = async (id) => {
    try {
      await api.delete(`/todos/${id}`);
      showNotification("Todo deleted");
      if (todoToEdit && todoToEdit.id === id) setTodoToEdit(null);
      fetchTodos();
    } catch (error) {
      showNotification("Failed to delete todo", "error");
    }
  };

  // Summarize & send Slack
  const handleSummarize = async () => {
    try {
      const res = await api.post("/summarize");
      showNotification("Summary sent to Slack!");
    } catch (error) {
      showNotification("Failed to send summary", "error");
    }
  };

  return (
    <div style={{ padding: "30px", maxWidth: "600px", margin: "auto" }}>
      <h1>Todo Summary Assistant</h1>
      <Notification message={notification.message} type={notification.type} />
      <TodoForm
        onSubmit={handleSubmit}
        todoToEdit={todoToEdit}
        onCancel={() => setTodoToEdit(null)}
      />
      <TodoList todos={todos} onEdit={setTodoToEdit} onDelete={handleDelete} />
      <button onClick={handleSummarize} className="summarize">
        Generate & Send Summary to Slack
      </button>
    </div>
  );
}
