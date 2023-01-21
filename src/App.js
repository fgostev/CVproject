import {Component} from 'react';
import General from './components/general.component';
import WorkExpForm from './components/workExpForm.component';
import WorkTask from './components/workTask.component';
import Preview from './components/preview.component';
import Education from './components/education.component';
import EducationTask from './components/educationTask.component';
import uniqid from 'uniqid';


class App extends Component {
  constructor() {
    super();

    this.state = {
      // modals
      workModalOpen:false,
      jobTitle: "",
      company: "",
      from: "",
      end: "",
      general: [],
      educations: [],
      workExperiences: [],
      // objects stored
      // workExperiences: [],
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




  render() {
  const { firstName, lastName, email, phoneNumber,
    educations, workExperiences} = this.state;

    return (
      <div className='App'>
        <div className='container'>
          <h1>CV Generator</h1>
          <General
          handleInputChange = {this.handleInputChange} 
          handleSubmit = {this.handleSubmit} 
          />
        </div>

      <Education 
        handleInputChange = {this.handleInputChange}
        handleSubmit = {this.handleSubmit}
      />

      <EducationTask 
        educations = {educations}
        delete = {this.delete}
      />

      {!this.state.workModalOpen &&(
        <div id="workExperienceContainer">
        <button onClick={this.handleOpen}> Add work experience</button>
        </div>
      )
      }
  
        {
          this.state.workModalOpen && (
            <WorkExpForm 
            handleInputChange = {this.handleInputChange}
            handleSubmit = {this.handleSubmit}
            />
            
          )
        }
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
