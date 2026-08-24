import { useDeleteVar } from "./DeleteVar";

function DeleteTaskButton(){

    const [, , toggleDelete] = useDeleteVar();

    return( <>
                <button onClick={toggleDelete} className="DeleteTask-btn"><b>-</b> Delete</button>
            </>);
}

export default DeleteTaskButton