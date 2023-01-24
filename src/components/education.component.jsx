import {Component} from 'react';

class Education extends Component{

  render(){
    const {handleSubmit, handleInputChange, schoolName, title, dateOfStudy} = this.props;

    return(
      <div className="educationInfo">

        <div>

        <h2>Education</h2>

        <form id="educationForm" onSubmit={handleSubmit}>
            <label htmlFor="School Name:">School Name:</label>
              <input type="text" className="edu" onChange={handleInputChange} value={schoolName} name="schoolName" />
            <label htmlFor="title:"> Title:</label>
              <input type="text" className="edu" onChange={handleInputChange} value={title} name="title" />
            <label htmlFor="dateOfStudy:"> Date Of Study:</label>
              <input type="text" className="edu" onChange={handleInputChange} value={dateOfStudy} name="dateOfStudy" />
              <button type="submit">
                  Add
              </button>
              </form>
              
        </div>
      </div>  
    )
    }
}

export default Education;
