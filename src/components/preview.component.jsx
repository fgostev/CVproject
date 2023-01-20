import {Component} from 'react';

class Preview extends Component{

    render(){
    const {firstName, lastName, email, phoneNumber
    }  = this.props;

    return(
        <div className="displayForm">
        <div id='displayGeneral'>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Phone Number: {phoneNumber}</p>
        </div>
      </div>
        

        )
    }
}

export default Preview;
