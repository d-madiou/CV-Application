import { RiArrowDropDownLine, RiDeleteBack2Fill, RiEdit2Fill, RiSettings2Fill } from "@remixicon/react";
import { useState } from "react";
import '../styles/Experience.css';

const Experience = ({experiences, addExperience, updateExperience, deleteExperience})=>{
    const [isOpen, setIsOpen] = useState(false)
    const [experience, setExperience] = useState({
        title: '',
        company: '',
        description: '',
        location: '',
        startDate: '',
        endDate: '',
        id: null
    });

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(experience.id){
            updateExperience(experience.id, experience);
        }
        else {
            addExperience({...experience, id : Date.now()});
        }
        setIsOpen(false);
        setExperience({ title: '', company: '', location: '', startDate: '', endDate: '', description: '', id: null });
    };


    return(
        <div className="experience">
            <div className="education-header" onClick={() => setIsOpen(!isOpen)}>
                <RiSettings2Fill className="userPro" />
                <h2>Experience</h2>
                <RiArrowDropDownLine className={`svgPerso ${isOpen ? 'open' : ''}`} />
            </div>
        
        {isOpen &&(
            <div className="experience-content">
                <form onSubmit={handleSubmit} className="form-container">
                    <input 
                        type="text"
                        placeholder="Position Title"
                        value={experience.title}
                        onChange={(e) => setExperience({...experience, title:e.target.value})}
                        required
                    />
                    <input 
                        type="text"
                        placeholder="Company Name"
                        value={experience.company}
                        onChange={(e) => setExperience({...experience, company:e.target.value})}
                        required
                    />
                    <textarea 
                        type="text"
                        placeholder="Location"
                        value={experience.location}
                        onChange={(e) => setExperience({...experience, location:e.target.value})}
                        required
                    />
                     <div className="date-inputs">
                        <input
                            type="date"
                            value={experience.startDate}
                            onChange={(e) => setExperience({ ...experience, startDate: e.target.value })}
                            required
                        />
                        <input
                            type="date"
                            value={experience.endDate}
                            onChange={(e) => setExperience({ ...experience, endDate: e.target.value })}
                            required
                        />
                        <textarea
                            type="text"
                            placeholder="Job description"
                            value={experience.description}
                            onChange={(e) => setExperience({ ...experience, description: e.target.value })}
                            required
                        />
                    </div>
                    <div className="button-forms">
                        <button type="submit" style={{backgroundColor: "#000B58", color: 'white', marginRight: "1rem"}}>Add</button>
                        <button type="button" style={{backgroundColor: "red", color: 'white'}} onClick={() => setIsOpen(false)}>Cancel</button>
                    </div>
                </form>
                <div className="experience-list">
                {Array.isArray(experiences) && experiences.length > 0 ? (
                    experiences.map((exp) => ( 
                    <div key={exp.id} className="experience-item group">
                        <h3>{exp.title} at {exp.company}</h3>
                      
                        <div className="item-actions">
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
                    <p>No experience data found.</p> 
                )}
                </div>

            </div>
        )}
        </div>
    )
}

export default Experience;