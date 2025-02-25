import {
  faBriefcase,
  faEnvelope,
  faGlobe,
  faGlobeAfrica,
  faGraduationCap,
  faMapMarkerAlt,
  faPhoneAlt,
  faScissors,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import thiernoImage from '../assets/images/thierno.jpg';
import '../styles/CVPreview.css';

const CVPreview = React.forwardRef(({ generalInfo, educations, experiences, skills, languages }, ref) => {
  return (
    <div className="cv-preview" ref={ref}>
      {/* Left Section */}
      <header>
        <div className="profile-header">
          <img 
            src={generalInfo?.image || thiernoImage} 
            alt="Profile" 
            className="profile-img"
          />
          <h1>{generalInfo?.fName || "Your First Name"} {generalInfo?.lName || "Your Last Name"}</h1>
          <hr/>
          <p className="position">{generalInfo?.title || "Professional Title"}</p>
        </div>

        <div className="contact-info">
          <p><FontAwesomeIcon className='icon' icon={faPhoneAlt} /> {generalInfo?.phone || "+00 000-000-000"}</p>
          <p><FontAwesomeIcon className='icon' icon={faEnvelope} /> {generalInfo?.email || "email@example.com"}</p>
          <p><FontAwesomeIcon className='icon' icon={faGlobe} /> {generalInfo?.website || "thierno.my"}</p>
          <p><FontAwesomeIcon className='icon' icon={faMapMarkerAlt} /> {generalInfo?.address || "City, Country"}</p>
        </div>

        <div className="languages">
          <hr />
          <h3 className="section-title-left"><FontAwesomeIcon className='icon' icon={faGlobeAfrica} />LANGUAGES</h3>
          <div className="language-list">
          {Array.isArray(languages) && languages.length > 0 ? (
            languages.map(lang => (
              <div key={lang.id || Math.random()} className="skill-item">
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
              </div>
            ))
          ) : (
            <p>No languages added yet.</p>
          )}


          </div>
        </div>

        <div className="skills">
          <hr />
          <h3 className="section-title-left"><FontAwesomeIcon className='icon' icon={faScissors} />SKILLS</h3>
          <div className="language-list">
          {Array.isArray(skills) && skills.length > 0 ? (
            skills.map(ski => (
              <div key={ski.id || Math.random()} className="skill-item">
                <span>{ski.name || "Skills"}</span>
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
              </div>
            ))
          ) : (
            <p>No skills added yet.</p>
          )}
          </div>
        </div>
      </header>

      {/* Right Section */}
      <section className="main-content">
        <div className="about-me">
          <h2 className="section-title">
            <FontAwesomeIcon className='icon' icon={faUser} />
            ABOUT ME
          </h2>
          <p>{generalInfo?.about || "Write a brief description about yourself..."}</p>
        </div>

        <div className="education-section">
          <h2 className="section-title">
            <FontAwesomeIcon className='icon' icon={faGraduationCap} />
            EDUCATION
          </h2>
          {Array.isArray(educations) && educations.length > 0 ? (
             educations?.map(edu => (
            <div key={edu.id} className="education-item">
              <h3>
                {edu.school || "School Name"}
                <span>
                  {edu.startDate || "Start"} / {edu.endDate || "Present"}
                </span>
              </h3>
              <p style={{ fontStyle: "italic", fontWeight: "bold" }}>{edu.degree || "Degree/Certificate"}</p>
              <p>{edu.description || "Educational achievements and details..."}</p>
            </div>
          ))):(
            <p>No education added yet.</p>
          )}
        </div>

        <div className="experience-section">
          <h2 className="section-title">
            <FontAwesomeIcon className='icon' icon={faBriefcase} />
            EXPERIENCE
          </h2>
          {experiences?.map(exp => (
            <div key={exp.id} className="experience-item">
              <h3>
                {exp.title || "Position Title"}
                <span>
                  {exp.startDate || "Start"} / {exp.endDate || "Present"}
                </span>
              </h3>
              <p style={{ fontWeight: "bold" }}>{} at {exp.company || "Company Name"}</p>
              <p style={{ fontStyle: "italic", fontWeight: "bold" }}>{exp.location || "Location"}</p>
              <p>{exp.description || "Job responsibilities and achievements..."}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
});

export default CVPreview;
