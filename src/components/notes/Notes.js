import React, { useState } from "react";
import "./Notes.css";

function Notes({ t, language, notes, onAddNote, onDeleteNote }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddNote(text);
    setText("");
  };

  return (
    <div className="notes-wrapper">
      <h1 className="app-title">{t.notesTitle}</h1>

      <form className="notes-form" onSubmit={handleSubmit}>
        <textarea
          className="notes-textarea"
          rows={3}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={t.notesPlaceholder}
        />
        <button type="submit" className="notes-add-btn">
          {t.notesAddButton}
        </button>
      </form>

      {notes.length === 0 ? (
        <p className="notes-empty">{t.notesEmpty}</p>
      ) : (
        <ul className="notes-list">
          {notes.map((note) => (
            <li key={note.id} className="notes-item">
              <div className="notes-main">
                <p className="notes-text">{note.text}</p>
              </div>
              <button
                className="notes-delete-btn"
                onClick={() => onDeleteNote(note.id)}
              >
                {t.notesDelete}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Notes;
