import {useState} from 'react';
import {themeContext} from './contexts/ThemeContext'
import {taskContext} from './contexts/TaskContext'
import AddTask from './components/AddForm/index';
import TaskList from './components/TaskList/index';
import DarkMode from './components/DarkMode/index';
import './App.css';
import { useEffect } from 'react';


function App() {
  const [mode, setMode] = useState('light')
  const [task, setTask] = useState([])

  useEffect(()=>{
    if(!localStorage.getItem('theme'))
      localStorage.setItem('theme','light')

      setMode(localStorage.getItem('theme'))
      const bodyElt = document.querySelector("body");
      bodyElt.style.backgroundImage = 'linear-gradient(to right, #487eb0 , var(--main-'+ mode +'-color))';
    
  },[mode])

  useEffect(()=>{
    if(!localStorage.getItem('task'))
      localStorage.setItem('task',JSON.stringify([]))
    else{
      if(JSON.parse(localStorage.getItem('task')).length > task.length)
        setTask(JSON.parse(localStorage.getItem('task')))
    }
      console.log(task)
  },[task])
  
  return (
    <div className="App">
        <themeContext.Provider value={{mode, setMode}}>
          <taskContext.Provider value={{task, setTask}}>
            <DarkMode/>
            <AddTask />
            <TaskList />
          </taskContext.Provider>
        </themeContext.Provider>
    </div>
  );
}

export default App;
