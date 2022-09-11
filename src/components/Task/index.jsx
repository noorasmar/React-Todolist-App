import { useContext, useState } from 'react';
import {themeContext} from '../../contexts/ThemeContext'
import { taskContext } from '../../contexts/TaskContext';
import './style.css'

function Task({name, prstatus}) {
    const {mode} = useContext(themeContext);
    const [status, setStatus] = useState(prstatus)
    const {setTask} = useContext(taskContext);

    const hundleDone = ()=>{
        let tmp = JSON.parse(localStorage.getItem('task'))
        if(status === 'success'){
            setStatus('')
            for(let i=0;i<tmp.length;i++)
                if(tmp[i].name === name)
                    tmp[i].status = ''

            localStorage.setItem('task',JSON.stringify(tmp))
        }
        else{
            setStatus('success')
            for(let i=0;i<tmp.length;i++)
                if(tmp[i].name === name)
                    tmp[i].status = 'success'
            
            localStorage.setItem('task',JSON.stringify(tmp))
    
        }
        setTask(tmp)
    }

    
    const hundleDelete = ()=>{
        let tmp = JSON.parse(localStorage.getItem('task'))
        let tmp2 = []
        for(let i=0;i<tmp.length;i++)
            if(tmp[i].name !== name)
                tmp2.push(tmp[i])

        
        localStorage.setItem('task',JSON.stringify(tmp2))        
        setTask(tmp2)
    }

    return ( 
        <div className={`task ${mode}`}>
            <div className={`name-task ${status}`}>
                {name}
            </div>
            <div className='btn'>
                <div className="done" onClick={hundleDone}>
                    Done
                </div>
                <div className="delete" onClick={hundleDelete}>
                    Delete
                </div>
            </div>
        </div>
    );
}

export default Task;