import {Component} from 'react';
import General from './components/general.component';
import WorkExpForm from './components/workExpForm.component';
import WorkTask from './components/workTask.component';
import Preview from './components/preview.component';
import Education from './components/education.component';
import EducationTask from './components/educationTask.component';
import uniqid from 'uniqid';
import './styles/style.css';


class App extends Component {
  constructor() {
    super();



    this.state = {
      // modals
      workModalOpen:false,
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email",
      phoneNumber: "Phone Number" ,
      schoolName:"",
      title:"",
      dateOfStudy:"",
      jobTitle: "",
      company: "",
      from: "",
      end: "",
      general: [],
      educations: [],
      workExperiences: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.delete = this.delete.bind(this);


  }

  handleInputChange = (e) =>{
const target = e.target;
const value = target.value;
const name = target.name

console.log(uniqid())

    this.setState({
        [name] : value,
    })

    console.log(this.state.educations);
    console.log(this.state.workExperiences);
  }


  handleSubmit = (e) => {
    e.preventDefault();
    const targetName = e.target.id;
    let newObject = {};

    const {schoolName, title, dateOfStudy} = this.state
    const {jobTitle, company, from, end} = this.state


    if(targetName === 'educationForm'){
      newObject = {
        schoolName: schoolName,
        title: title,
        dateOfStudy: dateOfStudy,
        id: uniqid(),
      }
      this.setState({
        educations: this.state.educations.concat(newObject),
        schoolName: "",
        title:"",
        dateOfStudy: "",
      })
    } else if(targetName === 'workExperiencesForm'){
      newObject = {
        jobTitle: jobTitle,
        company: company,
        from: from,
        end: end,
        id: uniqid(),
      }      
      this.setState({
        workExperiences: this.state.workExperiences.concat(newObject),
      })

    }

    e.target.reset();
  }

  handleOpen = () => {
    this.setState({
      workModalOpen: true,
    })
  }

  delete = (e) =>{

    const targetId = e.target.id;
    const targetClass = e.target.className;
    let workExp = this.state.workExperiences;
    let edu = this.state.workExperiences;
    let newArray = [];
    
    if(targetClass === 'deleteExp'){
      workExp.forEach((task => {
        if(task.id !== targetId) {
          newArray.push(task);
        }
        return newArray;
      }))
      this.setState({
        workExperiences: newArray,
      })
    }
    else if(targetClass === 'deleteEdu'){
      edu.forEach((task => {
        if(task.id !== targetId) {
          newArray.push(task);
        }
        return newArray;
      }))
      this.setState({
        educations: newArray,
      })
    }
  }


  // schoolName:"",
  // title:"",
  // dateOfStudy:"",
  // jobTitle: "",
  // company: "",
  // from: "",
  // end: "",

  render() {
  const { firstName, lastName, email, phoneNumber, schoolName, title,
    dateOfStudy,
    educations, workExperiences} = this.state;

    return (
      <div className='App'>
        <div className='container'>
  
          <button id="previewBtn">Preview</button>

          <General
          handleInputChange = {this.handleInputChange} 
          handleSubmit = {this.handleSubmit} 
          firstName = {firstName}
          lastName = {lastName}
          email = {email}
          phoneNumber = {phoneNumber}
          />
        </div>

      <Education 
        handleInputChange = {this.handleInputChange}
        handleSubmit = {this.handleSubmit}
        schoolName = {schoolName}
        title = {title}
        dateOfStudy = {dateOfStudy}
      />

      <EducationTask 
        educations = {educations}
        delete = {this.delete}
      />


            <WorkExpForm 
            handleInputChange = {this.handleInputChange}
            handleSubmit = {this.handleSubmit}
            />
            

        <WorkTask 
          workExperiences = {workExperiences}
          delete = {this.delete}
        />

        {/* <Preview 
          firstName ={firstName}
          lastName = {lastName}
          phoneNumber = {phoneNumber}
          email = {email}
          educations = {educations}
          workExperiences = {workExperiences}
        /> */}
      </div>

    );
  }
}

export default App;
