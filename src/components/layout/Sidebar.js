import React from "react";

function Sidebar({ t, language, view, onChangeView }) {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <div className="sidebar-logo">
          <span>🧩</span>
        </div>

        <button
          className={
            view === "home" ? "sidebar-item sidebar-item-active" : "sidebar-item"
          }
          onClick={() => onChangeView("home")}
          title={t.navHome}
        >
          <span className="sidebar-icon">🏠</span>
          <span className="sidebar-label">{t.navHome}</span>
        </button>

        <button
          className={
            view === "todo" ? "sidebar-item sidebar-item-active" : "sidebar-item"
          }
          onClick={() => onChangeView("todo")}
          title={t.navTodo}
        >
          <span className="sidebar-icon">✅</span>
          <span className="sidebar-label">{t.navTodo}</span>
        </button>

        <button
          className={
            view === "notes" ? "sidebar-item sidebar-item-active" : "sidebar-item"
          }
          onClick={() => onChangeView("notes")}
          title={t.navNotes}
        >
          <span className="sidebar-icon">🗒️</span>
          <span className="sidebar-label">{t.navNotes}</span>
        </button>

        <button
          className={
            view === "calendar"
              ? "sidebar-item sidebar-item-active"
              : "sidebar-item"
          }
          onClick={() => onChangeView("calendar")}
          title={t.navCalendar}
        >
          <span className="sidebar-icon">📅</span>
          <span className="sidebar-label">{t.navCalendar}</span>
        </button>

        <button
          className={
            view === "about" ? "sidebar-item sidebar-item-active" : "sidebar-item"
          }
          onClick={() => onChangeView("about")}
          title={t.navAbout}
        >
          <span className="sidebar-icon">ℹ️</span>
          <span className="sidebar-label">{t.navAbout}</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
