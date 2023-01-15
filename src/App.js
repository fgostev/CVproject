import {Component} from 'react';
import DisplayForm from './components/displayForm.component';
import General from './components/general.component';
import WorkExp from './components/workExp.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      // specific object to store further
     workExperience: {
      companyName: "",
      position: "",
      tasks:"",
      date:"",
     },
      // objects stored
      general: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: ""
      },
      workExperiences: [],
    };
  }

  handleInputChange = (e) =>{
    // const typedInput = e.target;
    // console.log(this.state.general.firstName)

    // this.setState({
    //   general: {
    //     firstName: typedInput.value,
    //   }
    // })

    // console.log(typedInput.name);
    // console.log(this.state)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const formElements = Array.from(e.target.elements);
    let generalValues = [];

    formElements.forEach(element=> {
      if(element.type !== "submit" && element.className.includes("general")){
        generalValues.push(element.value);
      }
      return generalValues;
    })


    this.setState({
      general: {
        firstName: generalValues[0],
        lastName: generalValues[1],
        email: generalValues[2],
        phoneNumber: generalValues[3],
      }
    })
    console.log(this.state.general);
  }

  render() {
  const { firstName, lastName, email, phoneNumber} = this.state.general;

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
          handleSubmit = {this.handleSubmit} 
          />
        </div>
        
        <WorkExp />

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
