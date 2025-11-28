import React from "react";

function AboutPage({ t, language }) {
  return (
    <div className="about-wrapper">
      <h1 className="app-title">{t.aboutTitle}</h1>
      <p className="about-intro">{t.aboutIntro}</p>

      <h2 className="about-section-title">{t.aboutFeaturesTitle}</h2>
      <ul className="about-list">
        <li>{t.aboutFeatureTodo}</li>
        <li>{t.aboutFeatureNotes}</li>
        <li>{t.aboutFeatureCalendar}</li>
        <li>{t.aboutFeatureLangTheme}</li>
      </ul>

      <h2 className="about-section-title">{t.aboutTechTitle}</h2>
      <ul className="about-list">
        <li>{t.aboutTechReact}</li>
        <li>{t.aboutTechState}</li>
        <li>{t.aboutTechStorage}</li>
      </ul>

      <p className="about-last-note">{t.aboutLastNote}</p>
    </div>
  );
}

export default AboutPage;
