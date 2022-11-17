import { Component } from "react";


// change everything into placeholders with the state key
// make a button to save the CV and display it. 
// take this as an example : https://ding-09.github.io/cv-project-v2/

// create an additional app to edit - wich brings back the section as it was before

class General extends Component{

    render() {
      const {handleInputChange, handleSubmit, firstName, secondName, email, phoneNumber}  = this.props;
    
          return (
            <div className="generalInfo">
          <h1>General</h1>
          <form id="general">
            <div>
              <input type="text" className="taskInput" onChange={handleInputChange} name="firstName" value={firstName}/>
            </div>
            <div>
              <input type="text" className="taskInput" onChange={handleInputChange} name="secondName"/>
              </div>
              <input type="text" className="taskInput" onChange={handleInputChange} name="email"/>
              <input type="text" className="taskInput" onChange={handleInputChange} name="email"/>
              <button type="submit" onClick={handleSubmit} name="phoneNumber">
                  Submit CV
              </button>
          </form>
            </div>
          );
        }
}

export default General