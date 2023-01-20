import {Component} from 'react';

class Education extends Component{
  constructor(){
    super();
    this.state={
        education :{
            schoolName:"",
            title:"",
            dateOfStudy:"",
        },
        educations: [],
    }
  }
  render(){
    const {handleSubmit, handleInputChange, schoolName, title, dateOfStudy} = this.props;

    return(
      <div className="educationInfo">

        <div>

        <form id="educationForm" onSubmit={handleSubmit}>
              <input type="text" className="edu" onChange={handleInputChange} value={schoolName} name="schoolName" />
              <input type="text" className="edu" onChange={handleInputChange} value={title} name="title" />
              <input type="text" className="edu" onChange={handleInputChange} value={dateOfStudy} name="dateOfStudy" />
              <button type="submit">
                  Submit education
              </button>
              </form>
              
        </div>
      </div>  
    )
    }
}

export default Education;
