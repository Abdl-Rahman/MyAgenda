import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, onToggleTodo, onDeleteTodo, deleteLabel, t, now }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleTodo={onToggleTodo}
          onDeleteTodo={onDeleteTodo}
          deleteLabel={deleteLabel}
          t={t}
          now={now}
        />
      ))}
    </ul>
  );
}

export default TodoList;
