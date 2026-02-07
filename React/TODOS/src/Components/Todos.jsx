import React, { useState } from 'react';

export const Todos = ({ todo, onDelete, onToggle, onEdit, onSave }) => {
  return (
    <div className="todo-list">
      {todo.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          onDelete={onDelete}
          onToggle={onToggle}
          onEdit={onEdit}
          onSave={onSave}
        />
      ))}
    </div>
  );
};

const TodoItem = ({ item, onDelete, onToggle, onEdit, onSave }) => {
  const [editText, setEditText] = useState(item.text);

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={item.isCompleted}
        onChange={() => onToggle(item.id)}
      />

      {item.isEdit ? (
        <input
          className="edit-input"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <span className={item.isCompleted ? 'done' : ''}>
          {item.text}
        </span>
      )}

      {item.isEdit ? (
        <button className="save" onClick={() => onSave(item.id, editText)}>
          Save
        </button>
      ) : (
        <button className="edit" onClick={() => onEdit(item.id)}>
          Edit
        </button>
      )}

      <button className="delete" onClick={() => onDelete(item.id)}>
        Delete
      </button>
    </div>
  );
};
