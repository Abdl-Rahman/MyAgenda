import React from "react";

function Navbar({
  t,
  language,
  onToggleLanguage,
  onLogout,
  userEmail,
  theme,
  onToggleTheme,
}) {
  return (
    <div className="navbar">
      <div className="nav-left">
        <span className="nav-title">{t.navTitle}</span>
      </div>

      <div className="nav-right">
        {userEmail && <span className="nav-email">{userEmail}</span>}

        <button className="theme-btn" onClick={onToggleTheme}>
          {theme === "dark" ? "☀️" : "🌙"}
        </button>

        <button className="lang-btn" onClick={onToggleLanguage}>
          {language === "ar" ? "English" : "العربية"}
        </button>

        <button className="logout-btn" onClick={onLogout}>
          {t.logout}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
