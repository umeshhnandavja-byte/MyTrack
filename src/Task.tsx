import ConfirmDeleteTask from "./ConfirmDeleteTask";
import TaskContent from "./TaskContent";
import { useDeleteVar } from "./DeleteVar";

function Task(){

    const [deleteTask, , ] = useDeleteVar();

    return( <> 
                <div className="Task">
                    <h3>Task 1</h3>
                    {deleteTask && (<ConfirmDeleteTask/>)}
                    <TaskContent/>
                </div>
            </>);
}

export default Task