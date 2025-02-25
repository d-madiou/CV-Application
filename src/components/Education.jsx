import { RiArrowDropDownLine, RiBuilding2Fill, RiDeleteBack2Fill, RiEdit2Fill } from "@remixicon/react";
import { useState } from 'react';
import '../styles/Education.css';

const Education = ({ educations, addEducation, updateEducation, deleteEducation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentEducation, setCurrentEducation] = useState({
    id: null,
    school: '',
    degree: '',
    description: '',
    startDate: '',
    endDate: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentEducation.id) {
      updateEducation(currentEducation.id, currentEducation);
    } else {
      addEducation({ ...currentEducation, id: Date.now() });
    }
    setIsOpen(false); // Close after saving
    setCurrentEducation({ school: '', degree: '', description: '', startDate: '', endDate: '', id: null });
  };

  return (
    <div className="education">
      {/* Clickable Header to Toggle Section */}
      <div className="education-header" onClick={() => setIsOpen(!isOpen)}>
        <RiBuilding2Fill className="userPro" />
        <h2>Education</h2>
        <RiArrowDropDownLine className={`svgPerso ${isOpen ? 'open' : ''}`} />
      </div>

      {isOpen && (
        <div className="education-content">
          {/* Form for Adding / Editing */}
          <form onSubmit={handleSubmit} className="form-container">
            <input
              type="text"
              placeholder="School"
              value={currentEducation.school}
              onChange={(e) => setCurrentEducation({ ...currentEducation, school: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Degree"
              value={currentEducation.degree}
              onChange={(e) => setCurrentEducation({ ...currentEducation, degree: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Description"
              value={currentEducation.description}
              onChange={(e) => setCurrentEducation({ ...currentEducation, description: e.target.value })}
              required
            />
            <div className="date-inputs">
              <input
                type="date"
                value={currentEducation.startDate}
                onChange={(e) => setCurrentEducation({ ...currentEducation, startDate: e.target.value })}
                required
              />
              <input
                type="date"
                value={currentEducation.endDate}
                onChange={(e) => setCurrentEducation({ ...currentEducation, endDate: e.target.value })}
                required
              />
            </div>
            <div className="form-buttons">
              <button type="submit" style={{backgroundColor: "#000B58", color: 'white'}}>save</button>
              <button type="button" style={{backgroundColor: "red", color: 'white'}} onClick={() => setIsOpen(false)}>Cancel</button>
            </div>
          </form>

          {/* Education List */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', marginTop: '15px' }}>
            {Array.isArray(educations) && educations.length > 0 ? (
              educations.map(edu => (
                <div key={edu.id} style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: '10px',
                  justifyContent: 'space-between',
                  padding: '7px',
                  borderLeft: '6px solid #000B58',
                  borderRadius: '5px',
                  background: '#f1f1f1',
                  width: '260px',
                  textAlign: 'center'
                }}>
                  <h3 style={{ margin: '5px 0', fontSize: '16px' }}>{edu.school}</h3>
                  
                  <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                  <button style={{padding : "0", backgroundColor: "transparent"}}
                            className="edit-btn"
                            onClick={() => setExperience(exp)}
                        >
                            <RiEdit2Fill />
                        </button>
                    <button style={{padding : "0", marginLeft : "1rem", color: "red", backgroundColor: "transparent"}}
                            className="delete-btn"
                            onClick={() => deleteExperience(exp.id)}
                        >
                            <RiDeleteBack2Fill />
                        </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No education data found.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Education;
