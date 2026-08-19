import TaskContainer from "./TaskContainer";
import TaskActions from "./TaskActions";

function TaskManager(){

    return( <div className="TaskManager">
                <TaskActions/>
                <br></br>
                <hr></hr>
                <TaskContainer/>
                <TaskContainer/>
                <TaskContainer/>
                <TaskContainer/>
            </div>);
}

export default TaskManager