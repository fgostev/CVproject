
const WorkTask = ({workExperiences, deleteTask}) => {

    return(
        <div id="workExperience" >
        {workExperiences.map((experience) =>{
            return <div className='experience' key={experience.id}>
            <button onClick={deleteTask} className="deleteExp" id={experience.id}>X</button>
            <p className='titlesBold'>Job Title:</p> <p  className='descriptiveP'>{experience.jobTitle}</p>
            <p className='titlesBold'>Company:</p> <p className='descriptiveP'>{experience.company}</p>
            <p className='titlesBold'>From: {experience.from}</p> <p className='descriptiveP'>{experience.from}</p>
            <p className='titlesBold'>End:</p>  <p className='descriptiveP'>{experience.end}</p>
            </div>               
        })} 
    </div>
    )
}


export default WorkTask;
