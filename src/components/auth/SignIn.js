import React, { useState } from "react";
import "./SignIn.css";

function SignIn({ t, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError(t.loginError);
      return;
    }
    setError("");
    onLogin(email);
  };

  return (
    <div className="signin-container">
      <h2 className="signin-title">{t.loginTitle}</h2>
      <form className="signin-form" onSubmit={handleSubmit}>
        <div className="signin-field">
          <label className="signin-label">{t.emailLabel}</label>
          <input
            type="email"
            className="signin-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.emailPlaceholder}
          />
        </div>

        <div className="signin-field">
          <label className="signin-label">{t.passwordLabel}</label>
          <input
            type="password"
            className="signin-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={t.passwordPlaceholder}
          />
        </div>

        {error && <p className="signin-error">{error}</p>}

        <button type="submit" className="signin-button">
          {t.loginButton}
        </button>
      </form>
    </div>
  );
}

export default SignIn;
