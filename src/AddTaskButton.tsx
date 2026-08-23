import { useState } from "react";

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
                    <div className="add-task">
                        <div className="overlay">
                            <div className="container">
                                <h2>Add Task</h2>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, corrupti neque quod eligendi tempore qui laborum omnis optio temporibus, aliquam odio placeat quo dolorum quas. Obcaecati dicta quis sint minus ipsum exercitationem nesciunt totam sed reiciendis corrupti in, dignissimos, sunt labore mollitia nam! Voluptatem, veniam quaerat accusamus voluptatum adipisci a possimus qui veritatis fuga hic, corrupti neque natus magni dolore illum ipsum, suscipit aliquam! Autem dolorum minima molestias voluptates officia consequatur nisi hic magni, ad laborum voluptatem necessitatibus fugit harum tempora perspiciatis enim ipsam eveniet ducimus dolor dolores ex perferendis. Earum error itaque at similique laborum iusto, quos temporibus molestiae.</p>
                                <button onClick={toggleModal}>Add</button>
                                <button onClick={toggleModal}>Cancel</button>
                            </div>
                        </div>
                    </div>
                )}
            </>);
}

export default AddTaskButton