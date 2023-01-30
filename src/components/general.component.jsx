import { Component } from "react";
import {useState} from 'react';


// const General = () => {
//   const {handleInputChange, handleSubmit, firstName, lastName, email, phoneNumber}  = this.props;

//   return(
//     <div className="generalInfo">
//             <div className="generalForm">
//             <form id="general" onSubmit={handleSubmit}>
//               <input type="text" className="general" onChange={handleInputChange} value = {firstName} name="firstName" placeholder="First Name"/>
//               <input type="text" className="general" onChange={handleInputChange} value = {lastName} name="lastName" placeholder="Last Name"/>
//               <input type="text" className="general" onChange={handleInputChange} value = {email} name="email" placeholder="Email"/>
//               <input type="text" className="general" onChange={handleInputChange} value = {phoneNumber} name="phoneNumber" placeholder="Phone Number"/>
//               </form>
//             </div>
//           </div>
//   )
// }
 
class General extends Component{

    render() {
      const {handleInputChange, handleSubmit, firstName, lastName, email, phoneNumber}  = this.props;
          return (
            <div className="generalInfo">
            <div className="generalForm">
            <form id="general" onSubmit={handleSubmit}>
              <input type="text" className="general" onChange={handleInputChange} value = {firstName} name="firstName" placeholder="First Name"/>
              <input type="text" className="general" onChange={handleInputChange} value = {lastName} name="lastName" placeholder="Last Name"/>
              <input type="text" className="general" onChange={handleInputChange} value = {email} name="email" placeholder="Email"/>
              <input type="text" className="general" onChange={handleInputChange} value = {phoneNumber} name="phoneNumber" placeholder="Phone Number"/>
              </form>
            </div>
          </div>
          );
        }
}

export default General
