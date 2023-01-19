import {Component} from 'react';
import General from './components/general.component';
import WorkExp from './components/workExp.component';
import DisplayForm from './components/displayForm.component';
import Education from './components/education.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      // modals
      workModalOpen:false,
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

    if(targetName === 'education'){
      newObject = {
        schoolName: this.state.schoolName,
        title: this.state.title,
        date: this.state.dateOfStudy,
      }
      this.setState({
        educations: this.state.educations.concat(newObject),
      })
    } else if(targetName === 'workExperiences'){
      newObject = {
        jobTitle: this.state.jobTitle,
        company: this.state.company,
        from: this.state.from,
        end: this.state.end,
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
    schoolName, title, dateOfStudy,
    jobTitle, company, from, end} = this.state;

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

      {!this.state.workModalOpen &&(
        <div id="workExperienceContainer">
        <button onClick={this.handleOpen}> Add work experience</button>
        </div>
      )
      }

        {
          this.state.workModalOpen && (
            <WorkExp 
            handleInputChange = {this.handleInputChange}
            handleSubmit = {this.handleSubmit}
            />
          )
        }

        <DisplayForm 
          firstName ={firstName}
          lastName = {lastName}
          phoneNumber = {phoneNumber}
          email = {email}
          schoolName = {schoolName}
          title = {title}
          dateOfStudy = {dateOfStudy}
          jobTitle = {jobTitle}
          company = {company}
          from = {from}
          end = {end}
        />
      </div>

    );
  }
}

export default App;
