import { Component } from "react";


// change everything into placeholders with the state key
// make a button to save the CV and display it. 
// take this as an example : https://ding-09.github.io/cv-project-v2/

// create an additional app to edit - wich brings back the section as it was before

class General extends Component{

    render() {
      const {handleInputChange, handleSubmit, firstName, lastName, email, phoneNumber}  = this.props;
          return (
            <div className="generalInfo">
          <h1>General</h1>
            <div className="generalForm">
            <form id="general" onSubmit={handleSubmit}>
              <input type="text" className="taskInput general" onChange={handleInputChange} name="firstName" placeholder={firstName}/>
              <input type="text" className="taskInput general" onChange={handleInputChange} name="lastName" placeholder={lastName}/>
              <input type="text" className="taskInput general" onChange={handleInputChange} name="email" placeholder={email}/>
              <input type="text" className="taskInput general" onChange={handleInputChange} name="phoneNumber" placeholder={phoneNumber}/>
              <button type="submit">
                  Save
              </button>
              </form>
            </div>
          </div>
          );
        }
}

export default General
