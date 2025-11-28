import React, { useState, useEffect } from "react";
import texts from "./i18n/texts";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";
import SignIn from "./components/auth/SignIn";
import HomePage from "./pages/HomePage";
import TodoPage from "./pages/TodoPage";
import NotesPage from "./pages/NotesPage";
import CalendarPage from "./pages/CalendarPage";
import AboutPage from "./pages/AboutPage";

function App() {
  const [language, setLanguage] = useState("ar");
  const [theme, setTheme] = useState("light"); // light | dark

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const [view, setView] = useState("home"); // home | todo | notes | calendar | about

  // To-Do state
  const [todos, setTodos] = useState([]);
  const [now, setNow] = useState(Date.now());

  // Notes state
  const [notes, setNotes] = useState([]);

  // Calendar events
  const [events, setEvents] = useState([]);

  const t = texts[language];

  // تحديث الوقت (للعد التنازلي)
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 60 * 1000);
    return () => clearInterval(id);
  }, []);

  // تحميل من localStorage عند أول مرة
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("app_language");
      if (savedLang === "ar" || savedLang === "en") setLanguage(savedLang);

      const savedView = localStorage.getItem("app_view");
      if (["home", "todo", "notes", "calendar", "about"].includes(savedView)) {
        setView(savedView);
      }

      const savedTheme = localStorage.getItem("app_theme");
      if (savedTheme === "dark" || savedTheme === "light") {
        setTheme(savedTheme);
      }

      const savedTodos = localStorage.getItem("app_todos");
      if (savedTodos) {
        const parsed = JSON.parse(savedTodos);
        if (Array.isArray(parsed)) setTodos(parsed);
      }

      const savedEvents = localStorage.getItem("app_events");
      if (savedEvents) {
        const parsed = JSON.parse(savedEvents);
        if (Array.isArray(parsed)) setEvents(parsed);
      }

      const savedNotes = localStorage.getItem("app_notes");
      if (savedNotes) {
        const parsed = JSON.parse(savedNotes);
        if (Array.isArray(parsed)) setNotes(parsed);
      }
    } catch (e) {
      console.error("Error loading from localStorage", e);
    }
  }, []);

  // حفظ الخيارات في localStorage
  useEffect(() => {
    localStorage.setItem("app_language", language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem("app_view", view);
  }, [view]);

  useEffect(() => {
    localStorage.setItem("app_theme", theme);
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("app_todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("app_events", JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    localStorage.setItem("app_notes", JSON.stringify(notes));
  }, [notes]);

  // دوال المهام To-Do
  const addTodo = (text, timeString, priority) => {
    if (!text.trim()) return;

    let deadline = null;
    if (timeString) {
      const [h, m] = timeString.split(":").map(Number);
      const nowDate = new Date();
      const deadlineDate = new Date(nowDate);
      deadlineDate.setHours(h, m, 0, 0);
      if (deadlineDate.getTime() < nowDate.getTime()) {
        // لو الوقت اللي حددته صار من الماضي نضيفه لليوم التالي
        deadlineDate.setDate(deadlineDate.getDate() + 1);
      }
      deadline = deadlineDate.getTime();
    }

    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      deadline,
      priority: priority || "medium",
    };

    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // دوال الملاحظات
  const addNote = (text) => {
    if (!text.trim()) return;
    const newNote = {
      id: Date.now(),
      text,
      createdAt: new Date().toISOString(),
    };
    setNotes((prev) => [newNote, ...prev]);
  };

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
  };

  // دوال الأحداث (Calendar)
  const addEvent = (dateKey, time, text) => {
    if (!text.trim()) return;
    const newEvent = { id: Date.now(), dateKey, time, text };
    setEvents((prev) => [newEvent, ...prev]);
  };

  const deleteEvent = (id) => {
    setEvents((prev) => prev.filter((ev) => ev.id !== id));
  };

  // اللغة + الثيم
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ar" ? "en" : "ar"));
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // تسجيل الدخول / الخروج
  const handleLogin = (email) => {
    setUserEmail(email);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail("");
    setTodos([]);
    setEvents([]);
    setNotes([]);
    setView("home");
  };

  // قبل تسجيل الدخول
  if (!isLoggedIn) {
    return (
      <div
        className="app-container"
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        <div className="lang-switch-wrapper">
          <button className="theme-btn" onClick={toggleTheme}>
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
          <button className="lang-btn" onClick={toggleLanguage}>
            {language === "ar" ? "English" : "العربية"}
          </button>
        </div>
        <SignIn t={t} onLogin={handleLogin} />
      </div>
    );
  }

  // بعد تسجيل الدخول
  return (
    <div
      className="app-container"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div
        className={
          language === "ar"
            ? "app-shell app-shell-rtl"
            : "app-shell app-shell-ltr"
        }
      >
        <Sidebar
          t={t}
          language={language}
          view={view}
          onChangeView={setView}
        />

        <div className="app-main">
          <Navbar
            t={t}
            language={language}
            userEmail={userEmail}
            onToggleLanguage={toggleLanguage}
            onLogout={handleLogout}
            theme={theme}
            onToggleTheme={toggleTheme}
          />

          {view === "home" && <HomePage t={t} language={language} />}

          {view === "todo" && (
            <TodoPage
              t={t}
              language={language}
              todos={todos}
              onAddTodo={addTodo}
              onToggleTodo={toggleTodo}
              onDeleteTodo={deleteTodo}
              now={now}
            />
          )}

          {view === "notes" && (
            <NotesPage
              t={t}
              language={language}
              notes={notes}
              onAddNote={addNote}
              onDeleteNote={deleteNote}
            />
          )}

          {view === "calendar" && (
            <CalendarPage
              t={t}
              language={language}
              events={events}
              onAddEvent={addEvent}
              onDeleteEvent={deleteEvent}
            />
          )}

          {view === "about" && <AboutPage t={t} language={language} />}

          <Footer t={t} language={language} />
        </div>
      </div>
    </div>
  );
}

export default App;
