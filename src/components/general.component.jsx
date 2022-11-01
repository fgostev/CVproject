import { Component } from "react";

class General extends Component{
    render() {

        console.log(this.props)
      
          return (
            <form>
                <label htmlFor="taskInput">Enter task</label>
                    <input
                    // onChange={this.handleChange}
                    // value={task.text}
                    type="text"
                    id="taskInput"
                    />
                <button type="submit">Add Task</button>
          </form>
          );
        }

}

export default General