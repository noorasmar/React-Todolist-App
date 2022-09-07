import { useContext } from 'react';
import {ModeContext} from '../../App'
import './style.css'

function DarkMode({setMode}) {
    const mode = useContext(ModeContext);
    
    const hundler = ()=>{
        if(mode === 'light'){
            setMode('dark')
            const bodyElt = document.querySelector("body");
            bodyElt.style.backgroundImage = 'linear-gradient(to right, #487eb0 , var(--main-dark-color))';
        }
        else{
            setMode('light')
            const bodyElt = document.querySelector("body");
            bodyElt.style.backgroundImage = 'linear-gradient(to right, #487eb0 , var(--main-light-color))';
        }
    }

    return ( 
        <div className='container-btn'>
            <input id="chk" type="checkbox" />
            <label className={`switch ${mode}`} onClick={hundler} htmlFor="chk">
                {mode}
            </label>
        </div>
    );
}

export default DarkMode;