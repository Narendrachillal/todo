import { Alert, Snackbar, Grow } from "@mui/material";

export default function Notification({ message, type }) {
  if (!message) return null;

  return (
    <Snackbar
      open
      autoHideDuration={3000}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      TransitionComponent={Grow}
    >
      <Alert
        severity={type === "error" ? "error" : "success"}
        variant="standard"
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
