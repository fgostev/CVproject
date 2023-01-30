
const Education = ({handleSubmit, handleInputChange, schoolName, title, dateOfStudy,
setDateOfStudy, setSchoolName, setTitle} ) => {

  const handleSchoolName = (e) => {
    setSchoolName(e.target.value);
}

const handleTitle = (e) => {
  setTitle(e.target.value);
}

const handleDateOfStudy = (e) => {
  setDateOfStudy(e.target.value)
}


    return(
      <div className="educationInfo">

        <div>

        <h2>Education</h2>

        <form id="educationForm" onSubmit={handleSubmit}>
            <label htmlFor="School Name:">School Name:</label>
              <input required type="text" className="edu" onChange={handleSchoolName} value={schoolName} name="schoolName" />
            <label htmlFor="title:"> Title:</label>
              <input required type="text" className="edu" onChange={handleTitle} value={title} name="title" />
            <label htmlFor="dateOfStudy:"> Date Of Study:</label>
              <input required type="text" className="edu" onChange={handleDateOfStudy} value={dateOfStudy} name="dateOfStudy" />
              <button type="submit">
                  Add
              </button>
              </form>
              
        </div>
      </div>  
    )
    }


export default Education;
