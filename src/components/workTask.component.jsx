import {Component} from 'react'

class WorkTask extends Component {

    render(){
    const {workExperiences} = this.props;
        return(
            <div id="workExperience">
            {workExperiences.map((experience) =>{
                return <div className='experience'>
                <p>Job Title: {experience.jobTitle}</p>
                <p>Title: {experience.company}</p>
                <p>Date of study: {experience.from}</p>
                <p>End: {experience.end}</p>
                </div>
            })}

        </div>
        )
    }
}

export default WorkTask;
