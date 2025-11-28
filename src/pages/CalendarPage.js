import React from "react";
import Calendar from "../components/calendar/Calendar";

function CalendarPage({ t, language, events, onAddEvent, onDeleteEvent }) {
  return (
    <Calendar
      t={t}
      language={language}
      events={events}
      onAddEvent={onAddEvent}
      onDeleteEvent={onDeleteEvent}
    />
  );
}

export default CalendarPage;
