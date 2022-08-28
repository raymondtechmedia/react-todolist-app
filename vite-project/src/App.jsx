import { useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import {v4 as uuidv4} from 'uuid'
import './App.css'
function App() {
  const [grab, setGrab] = useState('')
  const [List, setList] = useState([])

  const addList = () => {
    const newList = {
      id: `${uuidv4()}`,
      name: grab,
      done:false
    }
    setList([...List, newList])
    setGrab('')
  }

  const handleChange = (id) => {
    setList(List.map((list)=>list.id ===id ? {...list, done:true}:list))
  }



  const delTask = (id) => {
    setList(List.filter((task)=>task.id !==id))
  }
  return (
    <div className="App">
      <h1>TodoList App</h1> 
      <input
        onChange={(e) => setGrab(e.target.value)}
        style={{ fontSize: 23, borderRadius: 5 }}
        type="text"
        value={grab}
      /> <button onClick={() => addList()} style={{ backgroundColor: 'green' }}>Add</button>
       {List.length > 0? List.length :<h3>You do not have any tasks</h3>}
      {List.map((item) => {
        return (
          
          <div key={item.id} style={{display:'flex', alignItems:'center',justifyContent:'space-between'}}>
            <ol>{item.name}</ol>
            <input onClick={()=>handleChange(item.id)}  type="checkbox" style={{cursor:'pointer'}}/><h3>done😋</h3>
            <FaTrash onClick={() => delTask(item.id)} style={{ color: 'red', cursor: 'pointer' }} />
          </div>
        )
      })}
      
    </div>
  )
}

export default App
