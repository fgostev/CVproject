import {Component} from 'react';

class DisplayForm extends Component{

    render(){
    const {firstName, lastName, email, phoneNumber}  = this.props;

    return(
        <div className="displayForm">
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Phone Number: {phoneNumber}</p>
      </div>
        )
    }
}

export default DisplayForm;
