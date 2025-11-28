import React from "react";
import "./Footer.css";

function Footer({ t, language }) {
  const developerName = "Abdulrahman Sabha";

  return (
    <footer className="footer">
      <span>
        {t.footerTextPrefix}{" "}
        <strong className="footer-name">{developerName}</strong>{" "}
        {t.footerTextSuffix}
      </span>
    </footer>
  );
}

export default Footer;
