function DeleteTaskButton(){

    return( <>
                <button onClick={toggleDelete} className="DeleteTask-btn"><b>-</b> Delete</button>
            </>);
}

export default DeleteTaskButton