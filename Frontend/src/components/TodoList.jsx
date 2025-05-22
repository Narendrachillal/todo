import React from "react";

export default function TodoList({ todos, onEdit, onDelete }) {
  if (todos.length === 0) return <p>No todos found.</p>;

  return (
    <ul style={{ listStyle: "none", paddingLeft: 0 }}>
      {todos.map((todo) => (
        // <li key={todo.id} style={{ marginBottom: "8px" }}>
        //   <span>{todo.title}</span>
        //   <button onClick={() => onEdit(todo)} style={{ marginLeft: "10px" }}>
        //     Edit
        //   </button>
        //   <button
        //     onClick={() => onDelete(todo.id)}
        //     style={{ marginLeft: "5px", color: "red" }}
        //   >
        //     Delete
        //   </button>
        // </li>
        <li key={todo.id}>
          <span>{todo.title}</span>
          <button onClick={() => onEdit(todo)} className="edit">
            Edit
          </button>
          <button onClick={() => onDelete(todo.id)} className="delete">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
