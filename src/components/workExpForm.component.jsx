

const WorkExpForm = ({handleSubmit,  jobTitle, setJobTitle, company, setCompany, from, setFrom, end, setEnd}) =>{

    const handleJobTitle = (e) => {
        setJobTitle(e.target.value);
    }
    
    const handleCompany = (e) => {
      setCompany(e.target.value);
    }
    
    const handleFrom = (e) => {
      setFrom(e.target.value)
    }

    const handleEnd = (e) => {
        setEnd(e.target.value)
      }
        
        return(

        <div id="formContainer">
                    <h2>Work Experience</h2>
                <form id ="workExperiencesForm" onSubmit={handleSubmit}>
                    <label htmlFor="JobTitle"> Job Title</label>
                    <input required type="text" name="jobTitle"  className="workExp" onChange={handleJobTitle} value={jobTitle}></input>
                    <label htmlFor="company">Company</label>
                    <input required type="text" name="company" className="workExp" onChange={handleCompany} value={company}></input>
                    <label htmlFor="from">From:</label>
                    <input required type="date" placeholder="from" name="from" className="workExp" onChange={handleFrom} value={from}></input> 
                    <label htmlFor="end">End:</label>
                    <input required type="date" placeholder="from" name="end" className="workExp" onChange={handleEnd} value={end}></input> 
                   <button type="submit" value="Add" className="workExp">Add</button>
                </form>
        
        </div>
        )
    }  

export default WorkExpForm;
