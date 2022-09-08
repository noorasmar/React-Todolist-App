import { useContext } from 'react';
import {themeContext} from '../../contexts/ThemeContext'
import './style.css'

function Task({name, status}) {
    const {mode} = useContext(themeContext);
    const hundleDone = ()=>{
        let prp = document.querySelector('.name-task');
        prp.style.textDecoration = 'line-through'
    }
    return ( 
        <div className={`task ${mode}`}>
            <div className='name-task'>
                {name}
            </div>
            <div className='btn'>
                <div className="done" onClick={hundleDone}>
                    Done
                </div>
                <div className="delete">
                    Delete
                </div>
            </div>
        </div>
    );
}

export default Task;