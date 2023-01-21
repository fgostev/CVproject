import {Component} from 'react'

class WorkTask extends Component {

    render(){
    const {workExperiences} = this.props;
        return(
            <div id="workExperience" >
            {workExperiences.map((experience) =>{
                return <div className='experience' key={experience.id}>
                <button onClick={this.props.delete} className="deleteExp" id={experience.id}>delete</button>
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
