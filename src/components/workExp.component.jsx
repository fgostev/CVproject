import {Component} from "react";


class WorkExp extends Component {
    constructor(){
        super();
        this.state = {
            jobTitle: "",
            company: "",
            from: "",
            end: "",
            workExperiences: [],
        };
    }



displayForm = () =>{
}

    render() {

        const { handleSubmit, handleInputChange,
        jobTitle} = this.props;

        return(

                <div id="workForm">
                <form id ="workExperiences" onSubmit={handleSubmit}>
                    <label htmlFor="JobTitle"> Job Title</label>
                    <input type="text" name="jobTitle"  className="workExp" onChange={handleInputChange} value={jobTitle}></input>
                    <label htmlFor="company">Company</label>
                    <input type="text" name="company" className="workExp" onChange={handleInputChange}></input>
                    <label htmlFor="from">From:</label>
                    <input type="date" placeholder="from" name="from" className="workExp" onChange={handleInputChange}></input> 
                    <label htmlFor="end">End:</label>
                    <input type="date" placeholder="from" name="end" className="workExp" onChange={handleInputChange}></input> 
                   <input type="submit" value="Add" className="workExp" onChange={handleInputChange}></input>
                </form>
        
        
            </div>
        )
    }  
}

export default WorkExp;
