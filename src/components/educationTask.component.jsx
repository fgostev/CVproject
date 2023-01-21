import {Component} from 'react'

class EducationTask extends Component{
    render(){
        const {educations} = this.props;
    return(
        <div id='displayEducation'>
        { educations.map((edu) => {
            return <div className='edu' key={edu.id} id={edu.id}>
            <button onClick={this.props.delete} className="deleteEdu" id={edu.id}>delete</button>
            <p>School name: {edu.schoolName}</p>
            <p>Title: {edu.title}</p>
            <p>Date of study: {edu.dateOfStudy}</p>
            </div>
        })
        }
    </div>
        )
    }
}

export default EducationTask
