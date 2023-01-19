import {Component} from 'react';

class DisplayForm extends Component{

    render(){
    const {firstName, lastName, email, phoneNumber,
        schoolName, title, dateOfStudy,
        jobTitle, company,from, end
    }  = this.props;

    return(
        <div className="displayForm">
        <div id='displayGeneral'>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Phone Number: {phoneNumber}</p>
        </div>
        <div id='displayWork'>
            <p>Job Title:  {jobTitle}</p>
            <p>Company: {company}</p>
            <p>From: {from}</p>
            <p>End: {end}</p>
        </div>
        <div id='displayStudy'>
            <p>School:  {schoolName}</p>
            <p>Title: {title}</p>
            <p>Date of Study: {dateOfStudy}</p>
        </div>


      </div>
        

        )
    }
}

export default DisplayForm;
