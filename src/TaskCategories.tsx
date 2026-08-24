import AddCategory from "./AddCategory";

function TaskCategories(){

    return( <>
                <select>
                    <option>Health</option>
                    <option>Studies</option>
                </select>
                <AddCategory/>
            </>);
}

export default TaskCategories