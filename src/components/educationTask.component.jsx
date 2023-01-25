import {Component} from 'react'

class EducationTask extends Component{
    render(){
        const {educations} = this.props;
    return(
        <div id='displayEducation'>
        { educations.map((edu) => {
            return <div className='educationCon' key={edu.id} id={edu.id}>
            <button onClick={this.props.delete} className="deleteEdu" id={edu.id}>X</button>
            <p className='titlesBold'>School name:</p> <p className='descriptiveP'>{edu.schoolName}</p>
            <p className='titlesBold'>Title:</p> <p className='descriptiveP'>{edu.title}</p>
            <p className='titlesBold'>Date of study:</p> <p className='descriptiveP'>{edu.dateOfStudy}</p>
            </div>
        })
        }
    </div>
        )
    }
}

export default EducationTask
