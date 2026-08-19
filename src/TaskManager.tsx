import Task from "./Task";
import TaskActions from "./TaskActions";

function TaskManager(){

    return( <div className="TaskManager">
                <TaskActions/>
                <br></br>
                <hr></hr>
                <div className="TaskContainer">
                    <input type="checkbox" className="Checkbox"></input>
                    <hr></hr>
                    <Task/>
                </div>
            </div>);
}

export default TaskManager