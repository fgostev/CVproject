import {Component} from 'react'

class WorkTask extends Component {

    render(){
    const {workExperiences} = this.props;
        return(
            <div id="workExperience" >
            {workExperiences.map((experience) =>{
                return <div className='experience' key={experience.id}>
                <button onClick={this.props.delete} className="deleteExp" id={experience.id}>X</button>
                <p className='titlesBold'>Job Title:</p> <p  className='descriptiveP'>{experience.jobTitle}</p>
                <p className='titlesBold'>Company:</p> <p className='descriptiveP'>{experience.company}</p>
                <p className='titlesBold'>From: </p> <p className='descriptiveP'>{experience.from}</p>
                <p className='titlesBold'>End:</p>  <p className='descriptiveP'>{experience.end}</p>
                </div>               
            })} 

        </div>
        )
    }
}

export default WorkTask;
