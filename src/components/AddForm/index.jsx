import './style.css'

function AddTask() {
    return ( 
        <form>
            <h1>
                Todo List App
            </h1>
            <label htmlFor="task">Task Name :</label>
            <input type="text" id="task" placeholder="Coding..etc" autoFocus/>
            <input type="submit" value="Add"/>
        </form>
    );
}

export default AddTask;