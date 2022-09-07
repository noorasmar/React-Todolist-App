import { useContext } from 'react';
import {ModeContext} from '../../App'
import './style.css'

function Task() {
    const mode = useContext(ModeContext);
    return ( 
        <div className={`task ${mode}`}>
            <div className='name-task'>
                coding
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