import React from "react";

function formatRemaining(todo, now, t) {
  if (!todo.deadline) {
    return t.noDeadline;
  }

  const diffMs = todo.deadline - now;

  if (diffMs <= 0) {
    return t.timeExpired;
  }

  const totalMinutes = Math.round(diffMs / 60000);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (hours > 0) {
    return `${t.timeLeftPrefix} ${hours}h ${minutes}m`;
  } else {
    return `${t.timeLeftPrefix} ${minutes}m`;
  }
}

function getPriorityLabel(priority, t) {
  const p = priority || "medium";
  if (p === "high") return t.priorityHigh;
  if (p === "low") return t.priorityLow;
  return t.priorityMedium;
}

function TodoItem({ todo, onToggleTodo, onDeleteTodo, deleteLabel, t, now }) {
  const remainingText = formatRemaining(todo, now, t);
  const priority = todo.priority || "medium";

  return (
    <li className="todo-item">
      <div className="todo-left">
        <label className="todo-main">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggleTodo(todo.id)}
          />
          <span className={todo.completed ? "todo-text completed" : "todo-text"}>
            {todo.text}
          </span>
        </label>

        <div className="todo-meta">
          <span className="todo-time">{remainingText}</span>
          <span className={`todo-priority todo-priority-${priority}`}>
            {getPriorityLabel(priority, t)}
          </span>
        </div>
      </div>

      <button className="delete-button" onClick={() => onDeleteTodo(todo.id)}>
        {deleteLabel}
      </button>
    </li>
  );
}

export default TodoItem;
