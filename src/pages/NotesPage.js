import React from "react";
import Notes from "../components/notes/Notes";

function NotesPage({ t, language, notes, onAddNote, onDeleteNote }) {
  return (
    <Notes
      t={t}
      language={language}
      notes={notes}
      onAddNote={onAddNote}
      onDeleteNote={onDeleteNote}
    />
  );
}

export default NotesPage;
