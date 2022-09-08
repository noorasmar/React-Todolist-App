import { useContext } from 'react';
import {themeContext} from '../../context/ThemeContext'
import './style.css'

function Task({name, status}) {
    const {mode} = useContext(themeContext);

    return ( 
        <div className={`task ${mode}`}>
            <div className='name-task'>
                {name}
            </div>
            <div className='btn'>
                <div className="done">
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