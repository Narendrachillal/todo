import {
  List,
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  Stack,
  Typography,
  Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function TodoList({
  todos,
  onEdit,
  onDelete,
  handleToggleComplete,
}) {
  if (!todos || todos.length === 0) {
    return <Typography>No todos found.</Typography>;
  }

  return (
    <Box
      sx={{
        maxHeight: "300px", 
        overflowY: "auto",
        border: "1px solid #ccc",
        borderRadius: 1,
        mt: 2,
      }}
    >
      <List>
        {todos.map((todo) => (
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
    </Box>
  );
}
