import {Component} from 'react'

class EducationTask extends Component{
    render(){
        const {educations} = this.props;
    return(
        <div id='displayEducation'>
        { educations.map((edu) => {
            return <div className='educationCon' key={edu.id} id={edu.id}>
            <button onClick={this.props.delete} className="deleteEdu" id={edu.id}>x</button>
            <p className='titlesBold'>School name:</p> <p>{edu.schoolName}</p>
            <p className='titlesBold'>Title:</p> <p>{edu.title}</p>
            <p className='titlesBold'>Date of study:</p> <p>{edu.dateOfStudy}</p>
            </div>
        })
        }
    </div>
        )
    }
}

export default EducationTask
