import { Component } from "react";

class General extends Component{



    render() {
      const {handleInputChange, handleSubmit, firstName, lastName, email, phoneNumber}  = this.props;
          return (
            <div className="generalInfo">
            <div className="generalForm">
            <form id="general" onSubmit={handleSubmit}>
              <input type="text" className="general" onChange={handleInputChange} value = {firstName} name="firstName" placeholder={firstName}/>
              <input type="text" className="general" onChange={handleInputChange} value = {lastName} name="lastName" placeholder={lastName}/>
              <input type="text" className="general" onChange={handleInputChange} value = {email} name="email" placeholder={email}/>
              <input type="text" className="general" onChange={handleInputChange} value = {phoneNumber} name="phoneNumber" placeholder={phoneNumber}/>
              </form>
            </div>
          </div>
          );
        }
}

export default General
