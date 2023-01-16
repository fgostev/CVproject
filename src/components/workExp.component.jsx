import {Component} from "react";

class WorkExp extends Component {

displayForm = () =>{
    console.log("Booo!")
}

    render() {
        return(
            <div id="workExperienceContainer">
                <button onClick={this.displayForm}> Add work experience</button>
                <div id="workForm">
                <form id ="workExperience">
                    <label htmlFor="JobTitle"> Job Title</label>
                    <input type="text" name="Job Title"></input>
                    <label htmlFor="Company">Company</label>
                    <input type="text" name="Company"></input>
                    <label htmlFor="From">From:</label>
                    <input type="date" placeholder="from" name="from"></input> 
                    <label htmlFor="End">End:</label>
                    <input type="date" placeholder="from" name="End"></input> 
                   <input type="submit" value="Add"></input>
                </form>
                </div>
            </div>
        )
    }  
}

export default WorkExp;
