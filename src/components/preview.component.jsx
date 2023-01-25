import {Component} from 'react';


class Preview extends Component{

    render(){
    const {firstName, lastName, email, phoneNumber,
    educations, workExperiences, handlePreviewOff}  = this.props;

    return(

    <div className='displayCv'>
      <div>
        <button id="editBtn" onClick={handlePreviewOff}>Edit</button>
       </div>
       
        <div className="displayPreview">
        <div id='displayGeneral' className='generalInfo general'>
            <p className='generalP'> {firstName}</p>
            <p className='generalP'>{lastName}</p>
            <p className='generalP'>{email}</p>
            <p className='generalP'>{phoneNumber}</p>
        </div>

    <div className='educationInfo'>


<h2>Education</h2>

<div id='displayEducation'>
        { educations.map((edu) => {
            return <div className='educationCon' key={edu.id} id={edu.id}> 
            <p className='titlesBold'>School name:</p> <p className='descriptiveP'>{edu.schoolName}</p>
            <p className='titlesBold'>Title:</p> <p className='descriptiveP'>{edu.title}</p>
            <p className='titlesBold'>Date of study:</p> <p className='descriptiveP'>{edu.dateOfStudy}</p>
            </div>
        })
        }
    </div>

<h2> Work Experience</h2>
    <div id="workExperience" >
            {workExperiences.map((experience) =>{
                return <div className='experience' key={experience.id}>
                <p className='titlesBold'>Job Title:</p> <p className='descriptiveP'>{experience.jobTitle}</p>
                <p className='titlesBold'>Company:</p> <p className='descriptiveP'>{experience.company}</p>
                <p className='titlesBold'>From: {experience.from}</p> <p className='descriptiveP'>{experience.from}</p>
                <p className='titlesBold'>End:</p>  <p className='descriptiveP'>{experience.end}</p>
                </div>               
            })}

        </div>
        </div>

      </div>
        
</div>
        )
    }
}

export default Preview;
