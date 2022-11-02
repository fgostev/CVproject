import { Component } from "react";

class General extends Component{
    render() {

      const {firstName, lastName, email, phoneNumber}  = this.props.general;
      console.log(email);
      
          return (
            <form>
                <label htmlFor="taskInput">email</label>
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