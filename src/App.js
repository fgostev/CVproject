import {Component} from 'react';
import General from './components/general.component';
import WorkExp from './components/workExp.component';
import DisplayForm from './components/displayForm.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      // modals
      workModalOpen:false,
      // objects stored
      general: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: ""
      },
      workExp: {
        jobTitle: "",
        company: "",
        from: "",
        end: "",
      },
      workExperiences: [],
    };

    this.handleOpen = this.handleOpen.bind(this);

  }

  handleInputChange = (e) =>{

    this.setState({
      [e.target.className] : {
        [e.target.name] : e.target.value,
      }
    })

  }


  // handleSubmitGeneral = (e) => {
  //   e.preventDefault();
  //   const formElements = Array.from(e.target.elements);
  //   let generalValues = [];

  //   formElements.forEach(element=> {
  //     if(element.type !== "submit" && element.className.includes("general")){
  //       generalValues.push(element.value);
  //     }
  //   })

  //   this.setState({
  //     general: {
  //       firstName: generalValues[0],
  //       lastName: generalValues[1],
  //       email: generalValues[2],
  //       phoneNumber: generalValues[3],
  //     }
  //   })

  //   // console.log(this.state.workExperience);
  // }

  handleOpen = () => {
    this.setState({
      workModalOpen: true,
    })
    console.log(this.state.workModalOpen);
  }



  render() {
  const { firstName, lastName, email, phoneNumber, workModalOpen} = this.state.general;

    return (
      <div className='App'>
        <div className='container'>
          <h1>CV Generator</h1>
          <General
          firstName ={firstName}
          lastName = {lastName}
          phoneNumber = {phoneNumber}
          email = {email}
          handleInputChange = {this.handleInputChange} 
          handleSubmit = {this.handleSubmitGeneral} 
          />
        </div>

      {!this.state.workModalOpen &&(
        <div id="workExperienceContainer">
        <button onClick={this.handleOpen}> Add work experience</button>
        </div>
      )
      }

        {
          this.state.workModalOpen && (
            <WorkExp 
            workModalOpen = {workModalOpen}
            handleSubmit = {this.handleAddWorkExp}
            handleInputChange = {this.handleInputChange}
            />
          )
        }

        <DisplayForm 
          firstName ={firstName}
          lastName = {lastName}
          phoneNumber = {phoneNumber}
          email = {email}
        />
      </div>

    );
  }
}

export default App;
