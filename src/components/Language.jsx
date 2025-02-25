import { RiArrowDropDownLine, RiDeleteBack2Fill, RiGlobalFill } from "@remixicon/react";
import { useState } from "react";
import "../styles/Language.css";

const Language = ({ languages, addLanguages, deleteLanguages }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState({
    name: "",
    level: "",
    id: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addLanguages({ ...language, id: Date.now() });
    setIsOpen(false);
    setLanguage({ name: "", level: "", id: null });
  };

  return (
    <div className="Language">
      <div className="languages-header" onClick={() => setIsOpen(!isOpen)}>
        <RiGlobalFill className="userPro" />
        <h2>Language</h2>
        <RiArrowDropDownLine className={`svgPerso ${isOpen ? "open" : ""}`} />
      </div>
      {isOpen && (
        <div className="Languages-content">
          <form onSubmit={handleSubmit} className="form-container">
            <input
              type="text"
              placeholder="Name"
              value={language.name}
              onChange={(e) => setLanguage({ ...language, name: e.target.value })}
              required
            />

            {/* Radio Inputs for Skill Level */}
            <div className="radio-group">
              
              <label><input
                type="radio"
                name="languageLevel"
                value="Beginner"
                checked={language.level === "Beginner"}
                onChange={(e) => setLanguage({ ...language, level: e.target.value })}
                required
              />Beginner</label> 
              <label><input
                type="radio"
                name="languageLevel"
                value="Intermediate"
                checked={language.level === "Intermediate"}
                onChange={(e) => setLanguage({ ...language, level: e.target.value })}
                required
              />Intermediate</label>

              <input
                type="radio"
                name="languageLevel"
                value="Advanced"
                checked={language.level === "Advanced"}
                onChange={(e) => setLanguage({ ...language, level: e.target.value })}
                required
              />
              <label>Advanced</label>
              <input
                type="radio"
                name="languageLevel"
                value="Pro"
                checked={language.level === "Pro"}
                onChange={(e) => setLanguage({ ...language, level: e.target.value })}
                required
              />
              <label>Pro</label>
            </div>

            <div className="button-forms">
            <button type="submit" style={{backgroundColor: "#000B58", color: 'white', marginRight: "1rem"}}>Add</button>
              <button type="button" style={{backgroundColor: "red", color: 'white'}} onClick={() => setIsOpen(false)}>
                Cancel
              </button>
            </div>
          </form>
          <div className="language-list">
          {Array.isArray(languages) && languages.length > 0 ? (
            languages.map(lang => (
                <div key={lang.id || Math.random()} className="skill-item-left">
                <span>{lang.name || "Language"}</span>
                <span className="dots">
                    {(() => {
                    const levelMap = {
                        Beginner: "●●○○○",
                        Intermediate: "●●●○○",
                        Advanced: "●●●●○",
                        Pro: "●●●●●"
                    };
                    return levelMap[lang.level] || "○○○○○"; // Default when no level is set
                    })()}
                </span>
                <div className="item-actions-lang">
                    <button className="delete-btn-m" onClick={() => deleteLanguages(lang.id)}>
                     <RiDeleteBack2Fill/>
                    </button>
                  </div>
                </div>
            ))
            ) : (
            <p>No languages added yet.</p>
            )}

          </div>
        </div>
      )}
    </div>
  );
};

export default Language;
