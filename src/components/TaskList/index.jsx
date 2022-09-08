import { useContext } from 'react';
import { taskContext } from '../../contexts/TaskContext';
import Task from './../Task/index';
import './style.css'

function TaskList() {
    const {task} = useContext(taskContext);
    
    return ( 
        <main>
            {task.map((el)=>{
                return <Task name={el.name} key={el.name} status={el.status}/>
            })}
        </main>
    );
}

export default TaskList;