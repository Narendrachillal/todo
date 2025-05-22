import React, { useEffect, useState } from "react";
import { api } from "./api.js";
import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";
import Notification from "./components/Notification.jsx";

import { Container, Typography, Button, Box } from "@mui/material";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todoToEdit, setTodoToEdit] = useState(null);
  const [notification, setNotification] = useState({ message: "", type: "" });

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

  const showNotification = (message, type = "success") => {
    setNotification({ message, type });
    setTimeout(() => setNotification({ message: "", type: "" }), 3000);
  };

  const handleSubmit = async ({ title, id }) => {
    try {
      if (id) {
        await api.patch(`/todos/${id}`, { title });
        showNotification("Todo updated");
      } else {
        await api.post("/todos", { title });
        showNotification("Todo added");
      }
      setTodoToEdit(null);
      fetchTodos();
    } catch (error) {
      showNotification("Operation failed", "error");
    }
  };

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

  const handleToggleComplete = async (id, currentValue) => {
    try {
      await api.patch(`/todos/${id}`, { completed: !currentValue });
      fetchTodos();
    } catch (error) {
      showNotification("Failed to update completion status", "error");
    }
  };

  const handleSummarize = async () => {
    try {
      await api.post("/summarize");
      showNotification("Summary sent to Slack!");
    } catch (error) {
      showNotification("Failed to send summary", "error");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ textAlign: "center", my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Todo Summary Assistant
        </Typography>

        <Notification message={notification.message} type={notification.type} />

        <TodoForm
          onSubmit={handleSubmit}
          todoToEdit={todoToEdit}
          onCancel={() => setTodoToEdit(null)}
        />

        <TodoList
          todos={todos}
          onEdit={setTodoToEdit}
          onDelete={handleDelete}
          handleToggleComplete={handleToggleComplete}
        />

        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
          onClick={handleSummarize}
        >
          Generate & Send Summary to Slack
        </Button>
      </Box>
    </Container>
  );
}
