import { useState } from "react";

export const Todos = ({ todo, setTodo }) => {
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleDelete = (id) => {
    setTodo(todo.filter((el) => el.id !== id));
  };

  const handleEdit = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const handleConfirm = (id) => {
    if (editText.trim() === "") return;

    const updated = todo.map((el) =>
      el.id === id ? { ...el, text: editText } : el
    );

    setTodo(updated);
    setEditId(null);
    setEditText("");
  };

  const handleCancel = () => {
    setEditId(null);
    setEditText("");
  };

  const toggleCheck = (id) => {
    const updated = todo.map((el) =>
      el.id === id ? { ...el, isChecked: !el.isChecked } : el
    );
    setTodo(updated);
  };

  const togglePin = (id) => {
    const updated = todo.map((el) =>
      el.id === id ? { ...el, isPinned: !el.isPinned } : el
    );
    setTodo(updated);
  };

  const selectAll = () => {
    setTodo(todo.map((el) => ({ ...el, isChecked: true })));
  };

  const deselectAll = () => {
    setTodo(todo.map((el) => ({ ...el, isChecked: false })));
  };

  const deleteSelected = () => {
    setTodo(todo.filter((el) => !el.isChecked));
  };

  const allChecked = todo.length > 0 && todo.every((el) => el.isChecked);
  const anyChecked = todo.some((el) => el.isChecked);

  const pinnedTodos = todo.filter((el) => el.isPinned);
  const unpinnedTodos = todo.filter((el) => !el.isPinned);

  if (todo.length === 0) {
    return <h1>No Data Found</h1>;
  }

  return (
    <>
      <div className="MainDiv">
        <h1>List of Todos</h1>

        <button onClick={allChecked ? deselectAll : selectAll}>
          {allChecked ? "Deselect All" : "Select All"}
        </button>

        {anyChecked && (
          <button onClick={deleteSelected}>Delete Selected</button>
        )}
      </div>

      {/* 🔵 PINNED BOX */}
      {pinnedTodos.length > 0 && (
        <div className="pinned-box">
          <h2>Pinned Todos</h2>
          {pinnedTodos.map((el) => renderTodo(el))}
        </div>
      )}

      {/* 🟢 NORMAL BOX */}
      <div className="unpinned-box">
        <h2>Other Todos</h2>
        {unpinnedTodos.map((el) => renderTodo(el))}
      </div>
    </>
  );

  function renderTodo(el) {
    return (
      <div key={el.id} className="todo-item">
        <input
          type="checkbox"
          checked={el.isChecked}
          onChange={() => toggleCheck(el.id)}
        />

        {editId === el.id ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
        ) : (
          <h4
            style={{
              textDecoration: el.isChecked ? "line-through" : "none",
              opacity: el.isChecked ? 0.5 : 1,
            }}
          >
            {el.text}
          </h4>
        )}

        {editId === el.id ? (
          <>
            <button onClick={() => handleConfirm(el.id)}>Confirm</button>
            <button onClick={handleCancel}>Cancel</button>
          </>
        ) : (
          <>
            <button onClick={() => handleEdit(el.id, el.text)}>
              Edit
            </button>
            <button onClick={() => handleDelete(el.id)}>
              Delete
            </button>
            <button onClick={() => togglePin(el.id)}>
              {el.isPinned ? "Unpin" : "Pin"}
            </button>
          </>
        )}
      </div>
    );
  }
};
