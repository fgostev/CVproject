import {Component} from "react";


class WorkExpForm extends Component {
    constructor(){
        super();
        this.state = {
            workExperiences: [],
        };
    }



displayForm = () =>{
}

    render() {

        const { handleSubmit, handleInputChange,
        jobTitle} = this.props;

        return(

        <div id="formContainer">
                    <h2>Work Experience</h2>
                <form id ="workExperiencesForm" onSubmit={handleSubmit}>
                    <label htmlFor="JobTitle"> Job Title</label>
                    <input required type="text" name="jobTitle"  className="workExp" onChange={handleInputChange} value={jobTitle}></input>
                    <label htmlFor="company">Company</label>
                    <input required type="text" name="company" className="workExp" onChange={handleInputChange}></input>
                    <label htmlFor="from">From:</label>
                    <input required type="date" placeholder="from" name="from" className="workExp" onChange={handleInputChange}></input> 
                    <label htmlFor="end">End:</label>
                    <input required type="date" placeholder="from" name="end" className="workExp" onChange={handleInputChange}></input> 
                   <button type="submit" value="Add" className="workExp" onChange={handleInputChange}>Add</button>
                </form>
        
        </div>
        )
    }  
}

export default WorkExpForm;
