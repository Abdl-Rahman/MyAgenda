import React, { useState } from "react";
import TodoForm from "../components/todo/TodoForm";
import TodoList from "../components/todo/TodoList";

function TodoPage({
  t,
  language,
  todos,
  onAddTodo,
  onToggleTodo,
  onDeleteTodo,
  now,
}) {
  const [todoSearch, setTodoSearch] = useState("");
  const [todoPriorityFilter, setTodoPriorityFilter] = useState("all");

  const total = todos.length;
  const completedCount = todos.filter((t) => t.completed).length;
  const activeCount = total - completedCount;

  const normalizedSearch = todoSearch.trim().toLowerCase();
  const visibleTodos = todos.filter((todo) => {
    const txt = (todo.text || "").toLowerCase();
    const matchesText =
      !normalizedSearch || txt.includes(normalizedSearch);

    const p = todo.priority || "medium";
    const matchesPriority =
      todoPriorityFilter === "all" || p === todoPriorityFilter;

    return matchesText && matchesPriority;
  });

  return (
    <>
      <h1 className="app-title">{t.title}</h1>
      <p className="app-subtitle">{t.subtitle}</p>

      <div className="todo-layout">
        <div className="todo-panel todo-panel-form">
          <TodoForm
            onAddTodo={onAddTodo}
            placeholder={t.placeholder}
            addLabel={t.add}
            timeLabel={t.timeLabel}
            timeHelp={t.timeHelp}
            priorityLabel={t.priorityLabel}
            t={t}
          />
        </div>

        <div className="todo-panel todo-panel-list">
          <div className="todo-filters">
            <input
              className="todo-search"
              type="text"
              value={todoSearch}
              onChange={(e) => setTodoSearch(e.target.value)}
              placeholder={t.todoSearchPlaceholder}
            />
            <div className="todo-filter-priority">
              <span className="todo-filter-label">
                {t.filterPriorityLabel}
              </span>
              <select
                className="todo-filter-select"
                value={todoPriorityFilter}
                onChange={(e) => setTodoPriorityFilter(e.target.value)}
              >
                <option value="all">{t.filterAll}</option>
                <option value="high">{t.priorityHigh}</option>
                <option value="medium">{t.priorityMedium}</option>
                <option value="low">{t.priorityLow}</option>
              </select>
            </div>
          </div>

          <div className="counters">
            <span>
              {t.total} {total}
            </span>
            <span>
              {t.active} {activeCount}
            </span>
            <span>
              {t.completed} {completedCount}
            </span>
          </div>

          {todos.length === 0 ? (
            <p className="empty-text">{t.empty}</p>
          ) : visibleTodos.length === 0 ? (
            <p className="empty-text">{t.noMatchTodos}</p>
          ) : (
            <TodoList
              todos={visibleTodos}
              onToggleTodo={onToggleTodo}
              onDeleteTodo={onDeleteTodo}
              deleteLabel={t.delete}
              t={t}
              now={now}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default TodoPage;
