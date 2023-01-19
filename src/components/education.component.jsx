import {Component} from 'react';

class Education extends Component{
  constructor(){
    super();
    this.state={
        schoolName:"",
        title:"",
        dateOfStudy:"",
    }
  }
  render(){
    const {handleSubmit, handleInputChange, schoolName, title, dateOfStudy} = this.props;

    return(
      <div className="educationInfo">

        Education!

        <form id="education" onSubmit={handleSubmit}>
              <input type="text" className="edu" onChange={handleInputChange} value={schoolName} name="schoolName" />
              <input type="text" className="edu" onChange={handleInputChange} value={title} name="title" />
              <input type="text" className="edu" onChange={handleInputChange} value={dateOfStudy} name="dateOfStudy" />
              <button type="submit">
                  Submit education
              </button>
              </form>

      </div>  
    )
    }
}

export default Education;
