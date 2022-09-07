import { createContext, useState } from 'react';
import AddTask from './components/AddForm/index';
import TaskList from './components/TaskList/index';
import DarkMode from './components/DarkMode/index';
import './App.css';


export const ModeContext = createContext()

function App() {
  const [mode, setMode] = useState('light')
  return (
    <div className="App">
        <ModeContext.Provider value={mode}>
          <DarkMode setMode={setMode}/>
            <AddTask />
            <TaskList />
        </ModeContext.Provider>
    </div>
  );
}

export default App;
