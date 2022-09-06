import './style.css'

function Task() {
    return ( 
        <div className='task'>
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