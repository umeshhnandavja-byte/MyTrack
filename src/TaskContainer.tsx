import Task from "./Task";

function TaskContainer(){

    return( <>
                <div className="TaskContainer">
                    <input type="checkbox" className="Checkbox"></input>
                    <hr></hr>
                    <Task/>
                </div>
            </>);
}

export default TaskContainer