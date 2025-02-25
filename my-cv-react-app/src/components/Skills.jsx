import { RiArrowDropDownLine, RiBook2Fill, RiDeleteBack2Fill } from "@remixicon/react";
import { useState } from "react";
import "../styles/Skills.css";

const Skills = ({ skills, addSkills, deleteSkills }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [skill, setSkill] = useState({
    name: "",
    level: "",
    id: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addSkills({ ...skill, id: Date.now() });
    setIsOpen(false);
    setSkill({ name: "", level: "", id: null });
  };

  return (
    <div className="skills">
      <div className="skills-header" onClick={() => setIsOpen(!isOpen)}>
        <RiBook2Fill className="userPro" />
        <h2>Skills</h2>
        <RiArrowDropDownLine className={`svgPerso ${isOpen ? "open" : ""}`} />
      </div>
      {isOpen && (
        <div className="skills-content">
          <form onSubmit={handleSubmit} className="form-container">
            <input
              type="text"
              placeholder="Name"
              value={skill.name}
              onChange={(e) => setSkill({ ...skill, name: e.target.value })}
              required
            />

            {/* Radio Inputs for Skill Level */}
            <div className="radio-group">
              
              <label className="label">Beginner
                <input
                  type="radio"
                  name="skillLevel"
                  value="Beginner"
                  checked={skill.level === "Beginner"}
                  onChange={(e) => setSkill({ ...skill, level: e.target.value })}
                  required
                />
              </label>

              
              <label className="label">Intermediate
                <input
                  type="radio"
                  name="skillLevel"
                  value="Intermediate"
                  checked={skill.level === "Intermediate"}
                  onChange={(e) => setSkill({ ...skill, level: e.target.value })}
                  required
                />
              </label>

              
              <label className="label">Advanced
                <input
                  type="radio"
                  name="skillLevel"
                  value="Advanced"
                  checked={skill.level === "Advanced"}
                  onChange={(e) => setSkill({ ...skill, level: e.target.value })}
                  required
                />
              </label>
              
              <label className="label">Pro 
                <input
                  type="radio"
                  name="skillLevel"
                  value="Pro"
                  checked={skill.level === "Pro"}
                  onChange={(e) => setSkill({ ...skill, level: e.target.value })}
                  required
                />
              </label>
            </div>

            <div className="button-forms">
              <button type="submit" style={{backgroundColor: "#000B58", color: 'white', marginRight: "1rem"}}>Add</button>
              <button type="button" style={{backgroundColor: "red", color: 'white'}} onClick={() => setIsOpen(false)}>
                Cancel
              </button>
            </div>
          </form>
          <div className="skills-list">
            {Array.isArray(skills) && skills.length > 0 ? (
              skills.map((ski) => (
                <div key={ski.id} className="skill-item-left">
                  <p>{ski.name}</p>
                  <span className="dots">
                    {(() => {
                    const levelMap = {
                        Beginner: "●●○○○",
                        Intermediate: "●●●○○",
                        Advanced: "●●●●○",
                        Pro: "●●●●●"
                    };
                    return levelMap[ski.level] || "○○○○○"; // Default when no level is set
                    })()}
                </span>
                  <div className="item-actions">
                    <button className="delete-btn-m" onClick={() => deleteLanguages(lang.id)}>
                     <RiDeleteBack2Fill/>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No skills added yet.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;
