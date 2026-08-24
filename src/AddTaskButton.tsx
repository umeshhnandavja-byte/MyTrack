import { useState } from "react";
import TaskCategories from "./TaskCategories";

function AddTaskButton(){

    const [addTask, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!addTask)
    };

    if(addTask){
        document.body.classList.add('active-modal')
    } else{
        document.body.classList.remove('active-modal')
    }

    return( <>
                <button onClick={toggleModal} className="AddTask-btn"><b>+</b> Add Task</button>

                {addTask && (
                    <div className="active-modal">
                        <div className="overlay">
                            <div className="container">
                                <h2>Add Task</h2>
                                <form method="post">
                                    <label>Task Title:</label><br></br>
                                    <input type="text"></input>
                                    <br></br><br></br>
                                    <label>Task Description:</label><br></br>
                                    <input type="text"></input>
                                    <br></br><br></br>
                                    <label>Task Category:</label><br></br>
                                    <TaskCategories/> 
                                    <br></br><br></br>
                                </form>
                                <button onClick={toggleModal}>Add</button>
                                <button onClick={toggleModal}>Cancel</button>
                            </div>
                        </div>
                    </div>
                )}
            </>);
}

export default AddTaskButton