import { Component } from "react";
import General from "./general.component";
import Education from "./education.component";
import EducationTask from "./educationTask.component";
import WorkExpForm from "./workExpForm.component";
import WorkTask from "./workTask.component";

class EditCv extends Component{
   render(){

    const { firstName, lastName, email, phoneNumber, schoolName, title,
        dateOfStudy, educations, workExperiences, handlePreviewOn,
        handleInputChange, handleSubmit, deleteTask} = this.props;

    return(
        <div className='editCv'>
        <div className='container'>
  
        <button id="previewBtn" onClick={handlePreviewOn}>Preview</button>

        <General
          handleInputChange = {handleInputChange} 
          handleSubmit = {handleSubmit} 
          firstName = {firstName}
          lastName = {lastName}
          email = {email}
          phoneNumber = {phoneNumber}
          />
        </div>

      <Education 
        handleInputChange = {handleInputChange}
        handleSubmit = {handleSubmit}
        schoolName = {schoolName}
        title = {title}
        dateOfStudy = {dateOfStudy}
      />

      <EducationTask 
        educations = {educations}
        deleteTask = {deleteTask}
      />


            <WorkExpForm 
            handleInputChange = {handleInputChange}
            handleSubmit = {handleSubmit}
            />
            

        <WorkTask 
          workExperiences = {workExperiences}
          deleteTask = {deleteTask}
        />
      </div>
    )
   } 
}

export default EditCv;
