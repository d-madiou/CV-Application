import { RiArrowDropDownLine, RiFolderUserFill } from "@remixicon/react";
import { useEffect, useState } from "react";
import "../styles/GeneralInfo.css";

const GeneralInfo = ({ generalInfo, setGeneralInfo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...generalInfo });

  useEffect(() => {
    setFormData({ ...generalInfo });
  }, [generalInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setGeneralInfo(formData);
    setIsEditing(false);
  };

  return (
    <div className="general-info">
      {/* Clickable Header */}
      <div className="display" onClick={() => setIsOpen(!isOpen)}>
        <RiFolderUserFill className="userPro" />
        <h2>My Personal Info</h2>
        <RiArrowDropDownLine className={`svgPerso ${isOpen ? "open" : ""}`} />
      </div>

      {/* Content Section (Form + Display) */}
      {isOpen && (
        <div className="content-section">
          {isEditing ? (
            <form onSubmit={handleSubmit} className="form-container">
              <div className="image-upload">
              <label htmlFor="imageInput">
                <img 
                  src={formData.image || "https://via.placeholder.com/150"} 
                  alt="Profile Picture" 
                  className="profile-img"
                />
              </label>
              <input
                type="file"
                id="imageInput"
                accept="image/*"
                onChange={(e) => setFormData({ 
                  ...formData, 
                  image: URL.createObjectURL(e.target.files[0]) // Preview image
                })}
              />
            </div>

              <input 
                type="text"
                placeholder="Profesional Title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
              <input 
                type="text"
                placeholder="Describ yourself"
                value={formData.about}
                onChange={(e) => setFormData({ ...formData, about: e.target.value })}
                required
              />
              <input
                type="text"
                name="fName"
                value={formData.fName}
                onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                placeholder="First Name"
                required
              />
              <input
                type="text"
                name="lName"
                value={formData.lName}
                onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                placeholder="Last Name"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                placeholder="thierno@gmail.com"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                placeholder="+60-000-0000"
                required
              />
              <textarea
                name="address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                placeholder="Write your address"
                required
              />
              <div className="form-buttons">
                <button type="submit">Save</button>
                <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
              </div>
            </form>
          ) : (
            <div className="info-display">
              <p><strong>Name:</strong> {generalInfo.fName} {generalInfo.lName}</p>
              <p><strong>Email:</strong> {generalInfo.email}</p>
              <p><strong>Phone:</strong> {generalInfo.phone}</p>
              <p><strong>Address:</strong> {generalInfo.address}</p>
            </div>
          )}

          {/* Keep the Edit button visible */}
          {!isEditing && <button onClick={() => setIsEditing(true)}>✍🏻 Edit</button>}
        </div>
      )}
    </div>
  );
};

export default GeneralInfo;
