import {Component} from 'react';

class DisplayForm extends Component{

    render(){
    const {firstName, lastName, email, phoneNumber,
        jobTitle, company,from, end
    }  = this.props;

    return(
        <div className="displayForm">
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Phone Number: {phoneNumber}</p>

        <p>Job Title:  {jobTitle}</p>
        <p>Company: {company}</p>
        <p>From: {from}</p>
        <p>End: {end}</p>


      </div>
        

        )
    }
}

export default DisplayForm;
