import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import CVPreview from './components/CVPreview';
import Education from './components/Education';
import Experience from './components/Experience';
import GeneralInfo from './components/GeneralInfo';
import Language from './components/Language';
import Skills from './components/Skills';
import './styles/App.css';

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    image: '',
    title: 'Developer',
    about: 'Born with a passion for football and a mind wired for innovation, Thierno had always been fascinated by how technology could transform the way people experienced sports. While many saw football as just a game, he saw an opportunity—a way to connect fans, track player performances, and revolutionize sports media in Africa.',
    fName: 'Thierno Madiou',
    lName: 'Diallo',
    email: 'madiou@gmail.com',
    phone: '123-456-7890',
    address: '05200 Jalan Tun Razak, Kedah'
});
  

  const [educations, setEducations] = useState([]);
  const [experiences, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);
  const [languages, setLanguages] = useState([]);
  const cvRef = useRef();

  /*Add education*/
  const addEducation = (education) => {
    setEducations([...educations, education]);
  };

  const updateEducation = (id, updatedEducation) => {
    setEducations(educations.map(edu => edu.id === id ? updatedEducation : edu));
  };

  const deleteEducation = (id) => {
    setEducations(educations.filter(edu => edu.id !== id));
  };

  /* Add Experience*/
  const addExperience = (experience) =>{
    setExperience([...experiences, experience]);
  }
  const updateExperience = (id, updateExperience)=>{
    setExperience(experiences.map(exp => exp.id === id ? updateExperience : exp));
  }
  const deleteExperience = (id)=>{
    setExperience(experiences.filter(exp => exp.id !== id));
  }
  /* Add skills */
  const addSkills = (skill)=>{
    setSkills([...skills, skill]);
  }
  const deleteSkills = (id)=>{
    setSkills(skills.filter(skill => skill.id !== id));
  }
  /* Add Language */
  const addLanguages = (language) =>{
    setLanguages([...languages, language]);
  }
  const deleteLanguages = (id) =>{
    setLanguages(languages.filter(lang => lang.id !== id));
  }

  const handleDownloadPDF = () => {
    const input = cvRef.current;
    const pdf = new jsPDF('p', 'mm', 'a4');
    
    html2canvas(input, {
      scale: 4, // Increase scale for better resolution
      useCORS: true,
      logging: true,
      letterRendering: true,
      allowTaint: true
    }).then(canvas => {
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      // Convert canvas to image with higher quality
      const imgData = canvas.toDataURL('image/png', 1.0);
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('cv.pdf');
    });
  };
  // Print
  const handlePrint = useReactToPrint({
    content: () => cvRef.current,
  });

  return(
    <div className="App">
      <div className="forms-container">
        <GeneralInfo generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
        <Education 
          educations={educations} 
          addEducation={addEducation} 
          updateEducation={updateEducation} 
          deleteEducation={deleteEducation} 
        />
        <Experience
          experiences={experiences} 
          addExperience={addExperience} 
          updateExperience={updateExperience} 
          deleteExperience={deleteExperience} 
        />
        <Skills
          skills={skills} 
          addSkills={addSkills} 
          deleteSkills={deleteSkills} 
        />
        <Language
          languages={languages} 
          addLanguages={addLanguages} 
          deleteLanguages={deleteLanguages} 
        />
        <div className="actions">
          <button onClick={handleDownloadPDF}>Download PDF</button>
          <button onClick={handlePrint}>Print</button>
      </div>
      </div>
      <div className="cv-review">
        <CVPreview
          ref={cvRef}
          generalInfo={generalInfo}
          educations={educations}
          experiences={experiences}
          skills={skills}
          languages={languages}
        />
      </div>
      
    </div>
  );
 
}

export default App
