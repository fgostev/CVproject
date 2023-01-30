import {useState} from 'react';
import Preview from './components/preview.component';
import uniqid from 'uniqid';
import './styles/style.css';
import EditCv from './components/editCv.component';
import { Component } from 'react';

// const App = () => {
//   return(
//     <div> test!</div>
//   )
// }


class App extends Component {
  constructor() {
    super();

    this.state = {
      // modals
      previewOn: false,
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "" ,
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
    this.handlePreviewOn = this.handlePreviewOn.bind(this);
    this.handlePreviewOff = this.handlePreviewOff.bind(this);
    this.deleteTask = this.deleteTask.bind(this);


  }

  handleInputChange = (e) =>{
const target = e.target;
const value = target.value;
const name = target.name

console.log(uniqid())

    this.setState({
        [name] : value,
    })
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

  handlePreviewOn = () => {
    this.setState({
      previewOn: true,
    })
  }

  handlePreviewOff = () => {
    this.setState({
      previewOn: false,
    })
  }

  deleteTask = (e) =>{
    
    console.log("BOOO!")

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
  const { firstName, lastName, email, phoneNumber, educations, workExperiences, previewOn} = this.state;

    return (
      <div className='App'>
      
      {!previewOn &&
        <EditCv
          deleteTask = {this.deleteTask}
          firstName = {firstName}
          lastName = {lastName}
          email = {email}
          phoneNumber = {phoneNumber}
          educations = {educations}
          workExperiences = {workExperiences}
          handleInputChange = {this.handleInputChange}
          handleSubmit = {this.handleSubmit}
          handlePreviewOn = {this.handlePreviewOn}
        />
      }


      {previewOn && 
    <Preview 
          firstName ={firstName}
          lastName = {lastName}
          email = {email}
          phoneNumber = {phoneNumber}
          educations = {educations}
          workExperiences = {workExperiences}
          handlePreviewOff = {this.handlePreviewOff}
          />
      }
      </div>
    );
  }
}

export default App;
