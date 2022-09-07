import { useContext } from 'react';
import {ModeContext} from '../../App'
import './style.css'

function AddTask() {
    const mode = useContext(ModeContext);
    
    return ( 
        <form className={mode}>
            <h1 className={mode}>
                Todo List App
            </h1>
            <label htmlFor="task" className={mode}>Task Name :</label>
            <input type="text" id="task" placeholder="Coding..etc" autoFocus/>
            <input type="submit" value="Add"/>
        </form>
    );
}

export default AddTask;