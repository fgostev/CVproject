import {Component} from 'react';
import General from './components/general.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      general: {
        fistName:'',
        lastName:'', 
        email:'tesgfdgt123',
        phoneNumber: ''
      },
      edExperience: {
        school:'',
        dateFrom:'',
        dateTo:'',
        titleOfStudy:'',
      },
      practicalExperience: {
        companyName:'',
        positionTitle:'',
        task:'',
        yearsOfExperience:''
      }
    };
  }

  render() {

  const {general, edExperience, practicalExperience} = this.state;

    return (
      <div className='App'>
        <div className='container'>
          <h1>CV Generator</h1>
          <General general = {general}/>
        </div>
      </div>
    );
  }
}

export default App;