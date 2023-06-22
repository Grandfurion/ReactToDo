import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TaskList } from './components/TaskList.jsx'
import { getMockProps } from './utilities/MockProps.js'
import { TaskForm } from './components/TaskForm'



function App() {
  const [taskList, setTaskList] = useState(getMockProps());
  const [editState, setEditState] = useState({idToEdit: 0, isEditing: false});

  return (
    <>
      <div>
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Vite + React TODO List :)</h1>

      <TaskForm setTaskList={setTaskList}  editState={editState} setEditState={setEditState} taskList={taskList}/>

      <TaskList taskList={taskList} setTaskList={setTaskList} setEditState={setEditState}/>
    </>
  )
}

export default App
