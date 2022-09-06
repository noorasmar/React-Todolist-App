import './App.css';
import AddTask from './components/AddForm/index';
import TaskList from './components/TaskList/index';


function App() {
  return (
    <div className="App">
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
