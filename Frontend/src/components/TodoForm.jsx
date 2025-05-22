import React, { useState, useEffect } from "react";

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
    // <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
    //   <input
    //     type="text"
    //     placeholder="Enter todo"
    //     value={title}
    //     onChange={e => setTitle(e.target.value)}
    //     style={{ padding: '8px', width: '300px' }}
    //   />
    //   <button type="submit" style={{ marginLeft: '10px' }}>
    //     {todoToEdit ? 'Update' : 'Add'}
    //   </button>
    //   {todoToEdit && (
    //     <button
    //       type="button"
    //       onClick={onCancel}
    //       style={{ marginLeft: '10px', backgroundColor: '#ccc' }}
    //     >
    //       Cancel
    //     </button>
    //   )}
    // </form>
    <form
      onSubmit={handleSubmit}
      style={{ marginBottom: "20px" }}
      className="todo-form"
    >
      <input
        type="text"
        placeholder="Enter todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">{todoToEdit ? "Update" : "Add"}</button>
      {todoToEdit && (
        <button type="button" onClick={onCancel} className="cancel">
          Cancel
        </button>
      )}
    </form>
  );
}
