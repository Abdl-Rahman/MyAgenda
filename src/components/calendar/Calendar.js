import React, { useState } from "react";
import "./calendar.css";

function getMonthInfo(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1);
  const firstWeekday = firstDay.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  return { year, month, firstWeekday, daysInMonth };
}

function formatDateKey(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function formatDateLabel(date, language) {
  if (language === "ar") {
    return date.toLocaleDateString("ar-EG");
  }
  return date.toLocaleDateString("en-GB");
}

function Calendar({ t, language, events, onAddEvent, onDeleteEvent }) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [eventText, setEventText] = useState("");
  const [eventTime, setEventTime] = useState("");

  const { year, month, firstWeekday, daysInMonth } = getMonthInfo(currentMonth);

  const dateKey = formatDateKey(selectedDate);
  const eventsForDay = events
    .filter((ev) => ev.dateKey === dateKey)
    .sort((a, b) => (a.time || "").localeCompare(b.time || ""));

  const weekDaysEn = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const weekDaysAr = ["أحد", "إثن", "ثلث", "أرب", "خمس", "جمع", "سبت"];
  const weekDays = language === "ar" ? weekDaysAr : weekDaysEn;

  const monthName = currentMonth.toLocaleString(
    language === "ar" ? "ar-EG" : "en-GB",
    { month: "long", year: "numeric" }
  );

  const handlePrevMonth = () => {
    const d = new Date(currentMonth);
    d.setMonth(d.getMonth() - 1);
    setCurrentMonth(d);
  };

  const handleNextMonth = () => {
    const d = new Date(currentMonth);
    d.setMonth(d.getMonth() + 1);
    setCurrentMonth(d);
  };

  const handleDayClick = (day) => {
    const d = new Date(year, month, day);
    setSelectedDate(d);
  };

  const handleSubmitEvent = (e) => {
    e.preventDefault();
    onAddEvent(dateKey, eventTime, eventText);
    setEventText("");
    setEventTime("");
  };

  const cells = [];
  for (let i = 0; i < firstWeekday; i++) {
    cells.push(null);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    cells.push(day);
  }

  return (
    <div className="calendar-wrapper">
      <h1 className="app-title">{t.calendarTitle}</h1>

      <div className="calendar-top">
        <button className="calendar-nav-btn" onClick={handlePrevMonth}>
          {t.calendarMonthPrev}
        </button>
        <span className="calendar-month-label">{monthName}</span>
        <button className="calendar-nav-btn" onClick={handleNextMonth}>
          {t.calendarMonthNext}
        </button>
      </div>

      <div className="calendar-grid">
        {weekDays.map((wd) => (
          <div key={wd} className="calendar-weekday">
            {wd}
          </div>
        ))}

        {cells.map((day, idx) => {
          if (day === null) {
            return <div key={idx} className="calendar-cell empty" />;
          }

          const thisDate = new Date(year, month, day);
          const thisKey = formatDateKey(thisDate);
          const hasEvents = events.some((ev) => ev.dateKey === thisKey);
          const isSelected =
            thisKey === formatDateKey(selectedDate);

          return (
            <button
              key={thisKey}
              className={
                "calendar-cell day-btn" +
                (isSelected ? " day-selected" : "") +
                (hasEvents ? " day-has-events" : "")
              }
              onClick={() => handleDayClick(day)}
            >
              <span>{day}</span>
            </button>
          );
        })}
      </div>

      <div className="calendar-side">
        <h2 className="calendar-day-title">
          {formatDateLabel(selectedDate, language)}
        </h2>

        <h3 className="calendar-section-title">{t.calendarAddTitle}</h3>
        <form className="calendar-form" onSubmit={handleSubmitEvent}>
          <input
            type="text"
            className="calendar-input"
            placeholder={t.calendarEventPlaceholder}
            value={eventText}
            onChange={(e) => setEventText(e.target.value)}
          />
          <div className="calendar-time-row">
            <label className="calendar-time-label">
              {t.calendarTimeLabel}
              <input
                type="time"
                className="calendar-time-input"
                value={eventTime}
                onChange={(e) => setEventTime(e.target.value)}
              />
            </label>
          </div>
          <button type="submit" className="calendar-add-btn">
            {t.calendarAddButton}
          </button>
        </form>

        <h3 className="calendar-section-title">
          {t.calendarEventsTitle}
        </h3>

        {eventsForDay.length === 0 ? (
          <p className="calendar-no-events">{t.calendarNoEvents}</p>
        ) : (
          <ul className="calendar-events-list">
            {eventsForDay.map((ev) => (
              <li key={ev.id} className="calendar-event-item">
                <div className="calendar-event-main">
                  <span className="calendar-event-time">
                    {ev.time || "--:--"}
                  </span>
                  <span className="calendar-event-text">{ev.text}</span>
                </div>
                <button
                  className="calendar-event-delete"
                  onClick={() => onDeleteEvent(ev.id)}
                >
                  {t.calendarDelete}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Calendar;
