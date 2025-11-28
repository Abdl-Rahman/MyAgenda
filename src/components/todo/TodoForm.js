import React, { useState } from "react";

function TodoForm({
  onAddTodo,
  placeholder,
  addLabel,
  timeLabel,
  timeHelp,
  priorityLabel,
  t,
}) {
  const [text, setText] = useState("");
  const [time, setTime] = useState("");
  const [priority, setPriority] = useState("medium");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo(text, time, priority);
    setText("");
    setTime("");
    setPriority("medium");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="todo-form-main">
        <input
          className="todo-input"
          type="text"
          placeholder={placeholder}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button className="add-button" type="submit">
          {addLabel}
        </button>
      </div>

      <div className="todo-form-time">
        <label className="time-label">
          {timeLabel}
          <input
            type="time"
            className="time-input"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </label>
        <span className="time-help">{timeHelp}</span>
      </div>

      <div className="todo-form-priority">
        <span className="priority-label">{priorityLabel}</span>
        <select
          className="priority-select"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="high">{t.priorityHigh}</option>
          <option value="medium">{t.priorityMedium}</option>
          <option value="low">{t.priorityLow}</option>
        </select>
      </div>
    </form>
  );
}

export default TodoForm;
