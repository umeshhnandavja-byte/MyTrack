import AddTaskButton from "./AddTaskButton";
import DeleteTaskButton from "./DeleteTaskButton";

function TaskActions(){

    return( <>
                <div className="TaskActions">
                    <AddTaskButton/>
                    <DeleteTaskButton/>
                </div>
            </>);
}

export default TaskActions