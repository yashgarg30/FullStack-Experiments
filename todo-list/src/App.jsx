import { useState } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])

  const addTask = () => {
    if (task.trim() === "") return
    setTasks([...tasks, task])
    setTask("")
  }

  return (
    <div className="outer">
      <div className="box">
        <h1>To Do List</h1>

        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
        />

        <button onClick={addTask}>Add</button>

        <ul>
          {tasks.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

      </div>
    </div>
  )
}

export default App
