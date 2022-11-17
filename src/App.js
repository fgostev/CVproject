import {Component} from 'react';
import General from './components/general.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
        active: false,
        input: '',
        btn: 0,
        firstName:'first name:',
        lastName:'Last name:', 
        email:'email:',
        phoneNumber: 'phone number:',
        school:'',
        dateFrom:'',
        dateTo:'',
        titleOfStudy:'',
        companyName:'',
        positionTitle:'',
        task:'',
        yearsOfExperience:''
    };
  }

  handleInputChange = (e) =>{
    const typedValue = e.target.value;
    // const name = target.name;
    this.setState({input: typedValue})
    console.log(this.state);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name;
    this.setState({[name]: this.state.input});
  }

  render() {
  const { firstName, lastName, email, phoneNumber} = this.state;

    return (
      <div className='App'>
        <div className='container'>
          <h1>CV Generator</h1>
          <General
          firstName ={firstName}
          secondName = {lastName}
          phoneNumber = {phoneNumber}
          email = {email}
          handleInputChange = {this.handleInputChange} 
          handleSubmit = {this.handleSubmit} 
          />
        </div>
      </div>
    );
  }
}

export default App;