import {Component} from 'react';
import General from './components/general.component';
import WorkExpForm from './components/workExpForm.component';
import WorkTask from './components/workTask.component';
import Preview from './components/preview.component';
import Education from './components/education.component';
import EducationTask from './components/educationTask.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      // modals
      workModalOpen:false,
      general: [],
      educations: [],
      workExperiences: [],
      // objects stored
      // workExperiences: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOpen = this.handleOpen.bind(this);

  }

  handleInputChange = (e) =>{
const target = e.target;
const value = target.value;
const name = target.name

    this.setState({
        [name] : value,
    })

    console.log(this.state.educations);
    console.log(this.state.workExperiences);
  }

  // jobTitle: "",
  // company: "",
  // from: "",
  // end: "",

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
      }
      this.setState({
        educations: this.state.educations.concat(newObject),
      })
    } else if(targetName === 'workExperiencesForm'){
      newObject = {
        jobTitle: jobTitle,
        company: company,
        from: from,
        end: end,
      }      
      this.setState({
        workExperiences: this.state.workExperiences.concat(newObject),
      })
    }
    // console.log(Array.from(e.target.elements));
    // console.log(targetName);
    // console.log(newArray);



  }

  handleOpen = () => {
    this.setState({
      workModalOpen: true,
    })
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
