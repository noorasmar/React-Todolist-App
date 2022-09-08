import { useContext, useState } from 'react';
import {themeContext} from '../../contexts/ThemeContext'
import { taskContext } from './../../contexts/TaskContext'
import './style.css'

function AddTask() {
    const {mode} = useContext(themeContext);
    const {task, setTask} = useContext(taskContext);
    const [name, setName] = useState('')

    const hundleAdd = ()=>{
        if(name){
            setTask([...task,{name: name, status: ''}])
            setName('')
        }
    }

    return ( 
        <form className={mode} onSubmit={(e)=>{e.preventDefault();hundleAdd()}}>
            <h1 className={mode}>
                Todo List App
            </h1>
            <label htmlFor="task" className={mode}>Task Name :</label>
            <input type="text" id="task" onChange={(e)=>{setName(e.target.value)}} placeholder="Coding..etc" value={name} autoFocus/>
            <input type="submit" value="Add"/>
        </form>
    );
}

export default AddTask;