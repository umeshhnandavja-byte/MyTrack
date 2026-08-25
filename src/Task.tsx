import ConfirmDeleteTask from "./ConfirmDeleteTask";
import TaskContent from "./TaskContent";

function Task(){

    return( <> 
                <div className="Task">
                    <h3>Task 1</h3>
                    {deleteTask && (<ConfirmDeleteTask/>)}
                    <TaskContent/>
                </div>
            </>);
}

export default Task