import React from "react";
import "./HomePages.css";

function HomePage({ t, language }) {
  return (
    <div className="welcome-box">
      <h1 className="welcome-title">{t.welcomeTitle}</h1>
      <p className="welcome-subtitle">{t.welcomeSubtitle}</p>
      <ul className="welcome-list">
        <li>{t.welcomeTodo}</li>
        <li>{t.welcomeNotes}</li>
        <li>{t.welcomeCalendar}</li>
      </ul>
      <p className="welcome-hint">
        {language === "ar"
          ? "اختر من القائمة الجانبية ما إذا كنت تريد البدء بالمهام أو الملاحظات أو التقويم."
          : "Use the sidebar to choose whether you start with To-Do, Notes, or Calendar."}
      </p>
    </div>
  );
}

export default HomePage;
