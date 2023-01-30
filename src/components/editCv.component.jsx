import General from "./general.component";
import Education from "./education.component";
import EducationTask from "./educationTask.component";
import WorkExpForm from "./workExpForm.component";
import WorkTask from "./workTask.component";

const EditCv = ( { firstName, lastName, email, phoneNumber, schoolName, title,
  dateOfStudy, educations, workExperiences, handlePreviewOn,
 handleSubmit, deleteTask, setFirstName, setLastName, setEmail, setPhoneNumber,
setSchoolName, setTitle, setDateOfStudy, jobTitle, setJobTitle, company,
setCompany, from, setFrom, end, setEnd} ) => {


    return(
      <div className='editCv'>
      <div className='container'>

      <button id="previewBtn" onClick={handlePreviewOn}>Preview</button>

      <General
        // handleInputChange = {handleInputChange} 
        handleSubmit = {handleSubmit} 
        firstName = {firstName}
        setFirstName = {setFirstName}
        lastName = {lastName}
        setLastName = {setLastName}
        email = {email}
        setEmail = {setEmail}
        phoneNumber = {phoneNumber}
        setPhoneNumber = {setPhoneNumber}
        />
      </div>

    <Education 
      // handleInputChange = {handleInputChange}
      handleSubmit = {handleSubmit}
      schoolName = {schoolName}
      setSchoolName = {setSchoolName}
      title = {title}
      setTitle = {setTitle}
      dateOfStudy = {dateOfStudy}
      setDateOfStudy = {setDateOfStudy}
    />

    <EducationTask 
      educations = {educations}
      deleteTask = {deleteTask}
    />


          <WorkExpForm 
          // handleInputChange = {handleInputChange}
          handleSubmit = {handleSubmit}
          jobTitle = {jobTitle}
          setJobTitle = {setJobTitle}
          company = {company}
          setCompany = {setCompany}
          from ={from}
          setFrom = {setFrom}
          end = {end}
          setEnd = {setEnd}
          />
          

      <WorkTask 
        workExperiences = {workExperiences}
        deleteTask = {deleteTask}
      />
    </div>
  )

}




export default EditCv;
