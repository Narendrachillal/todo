import express from "express";
import {
  getTodos,
  addTodo,
  deleteTodo,
  summarizeTodos,
  updateTodo,
} from "../controllers/todoController.js";

const router = express.Router();

router.get("/todos", getTodos);
router.post("/todos", addTodo);
router.delete("/todos/:id", deleteTodo);
router.patch("/todos/:id", updateTodo);
router.post("/summarize", summarizeTodos);

export default router;
