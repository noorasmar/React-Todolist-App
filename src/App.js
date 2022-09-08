import {useState} from 'react';
import {themeContext} from './contexts/ThemeContext'
import {taskContext} from './contexts/TaskContext'
import AddTask from './components/AddForm/index';
import TaskList from './components/TaskList/index';
import DarkMode from './components/DarkMode/index';
import './App.css';


function App() {
  const [mode, setMode] = useState('light')
  const [task, setTask] = useState([])
  
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
