import {useState} from 'react';
import Preview from './components/preview.component';
import uniqid from 'uniqid';
import './styles/style.css';
import EditCv from './components/editCv.component';


const App = () => {

  const [previewOn, setPreviewOn] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [title, setTitle] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [dateOfStudy, setDateOfStudy] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [from, setFrom] = useState('');
  const [end, setEnd] = useState('');
  const [educations, setEducations] = useState([]);
  const [workExperiences, setWorkExperiences] = useState([])
    
    const handleSubmit = (e) => {
        e.preventDefault();


        const targetName = e.target.id;
        let newObject = {};
  
    
        if(targetName === 'educationForm'){
          newObject = {
            schoolName: schoolName,
            title: title,
            dateOfStudy: dateOfStudy,
            id: uniqid(),
          }
          setEducations(educations.concat(newObject))
        } else if(targetName === 'workExperiencesForm'){
          newObject = {
            jobTitle: jobTitle,
            company: company,
            from: from,
            end: end,
            id: uniqid(),
          }      
          setWorkExperiences(workExperiences.concat(newObject))
        }
        e.target.reset();
      }
    
    const handlePreviewOn = () => {
       setPreviewOn(true);
      }
    
    const handlePreviewOff = () => {
       setPreviewOn(false);
      }
    
    const deleteTask = (e) =>{
        
        console.log("BOOO!")
    
        const targetId = e.target.id;
        const targetClass = e.target.className;
        let workExp = workExperiences;
        let edu = educations;
        let newArray = [];
        
        if(targetClass === 'deleteExp'){
          workExp.forEach((task => {
            if(task.id !== targetId) {
              newArray.push(task);
            }
            return newArray;
          }))
          setWorkExperiences(newArray)
        }
        else if(targetClass === 'deleteEdu'){
          edu.forEach((task => {
            if(task.id !== targetId) {
              newArray.push(task);
            }
            return newArray;
          }))
          setEducations(newArray);
        }
      }
        
  return (
    <div className='App'>
    
    {!previewOn &&
      <EditCv
        deleteTask = {deleteTask}
        firstName = {firstName}
        setFirstName = {setFirstName}
        lastName = {lastName}
        setLastName = {setLastName}
        email = {email}
        setEmail = {setEmail}
        phoneNumber = {phoneNumber}
        setPhoneNumber = {setPhoneNumber}
        schoolName = {schoolName}
        setSchoolName = {setSchoolName}
        title = {title}
        setTitle = {setTitle}
        dateOfStudy = {dateOfStudy}
        setDateOfStudy = {setDateOfStudy}
        educations = {educations}
        setEducations = {setEducations}
        jobTitle = {jobTitle}
        setJobTitle = {setJobTitle}
        company = {company}
        setCompany = {setCompany}
        from ={from}
        setFrom = {setFrom}
        end = {end}
        setEnd = {setEnd}
        workExperiences = {workExperiences}
        setWorkExperiences = {setWorkExperiences}
        handleSubmit = {handleSubmit}
        handlePreviewOn = {handlePreviewOn}
      />
    }
    
    
          {previewOn && 
        <Preview 
              firstName ={firstName}
              lastName = {lastName}
              email = {email}
              setEmail = {setEmail}
              phoneNumber = {phoneNumber}
              setPhoneNumber = {setPhoneNumber}
              educations = {educations}
              workExperiences = {workExperiences}
              handlePreviewOff = {handlePreviewOff}
              />
          }
          </div>
        );
  
}


export default App;
