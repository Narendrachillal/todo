import { useState, useEffect } from "react";
import { TextField, Button, Stack } from "@mui/material";

export default function TodoForm({ onSubmit, todoToEdit, onCancel }) {
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (todoToEdit) setTitle(todoToEdit.title);
    else setTitle("");
  }, [todoToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onSubmit({ title: title.trim(), id: todoToEdit?.id });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
        <TextField
          fullWidth
          size="small"
          label="Enter task"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          {todoToEdit ? "Update" : "Add"}
        </Button>
        {todoToEdit && (
          <Button variant="outlined" color="secondary" onClick={onCancel}>
            Cancel
          </Button>
        )}
      </Stack>
    </form>
  );
}
