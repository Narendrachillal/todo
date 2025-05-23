import {
  List,
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  Stack,
  Typography,
  Box,
  Pagination,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

export default function TodoList({
  todos,
  onEdit,
  onDelete,
  handleToggleComplete,
}) {
  const [page, setPage] = useState(1);
  const todosPerPage = 5;

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const indexOfLastTodo = page * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);
  const totalPages = Math.ceil(todos.length / todosPerPage);

  if (!todos || todos.length === 0) {
    return <Typography>No todos found.</Typography>;
  }

  return (
    <Box sx={{ mt: 2 }}>
      <List>
        {currentTodos.map((todo) => (
          <ListItem
            key={todo.id}
            sx={{
              borderBottom: "1px solid #eee",
              px: 2,
              py: 1,
            }}
            secondaryAction={
              <Stack direction="row" spacing={1}>
                <IconButton onClick={() => onEdit(todo)} color="primary">
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => onDelete(todo.id)} color="error">
                  <DeleteIcon />
                </IconButton>
              </Stack>
            }
          >
            <Checkbox
              checked={todo.completed}
              onChange={() => handleToggleComplete(todo.id, todo.completed)}
            />
            <ListItemText
              primary={
                <Typography
                  sx={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                >
                  {todo.title}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>

      <Stack direction="row" justifyContent="center" mt={2}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handleChangePage}
          color="primary"
          shape="rounded"
        />
      </Stack>
    </Box>
  );
}
