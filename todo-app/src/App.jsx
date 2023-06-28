import { useState } from 'react'

function App() {
  const [todo, setTodo] = useState("")
  const [allTodos, setAllTodos] = useState([])

  const handleInput = (e) => {
    setTodo(e.target.value)
    console.log("input changed...");
  }
  const handleDelete = (id) => {    
    setAllTodos(currentTodos => allTodos.filter((todo) => todo.id != id))
    console.log("todo deleted...");
  }
  const handleChecked = (id, completed) => {
    currentTodos => {
      allTodos.map((todo) => {
        if(todo.id == id){
          return {...todo, completed}
        } else {
          return todo
        }
      }
      )
    }
  }
  
  const addTodo = (e) => {
    e.preventDefault();
    if(todo == ""){
      setMessage("Enter a Todo in the list...")
    }else{
      setAllTodos([{id: new Date().getTime(), name:todo, done:false}, ...allTodos])
      console.log("add todo");
      setTodo("")
    }
  }
  return (
    <div className="App mx-auto my-auto w-7/12 bg-slate-300 p-4 pt-8">
      <form action="" className='flex flex-col '>
        <label htmlFor="todo">Enter Todo</label>
        <div className='flex items-center justify-between gap-4'>
        <input className='flex-grow p-2 px-4 rounded-lg' id='todo' type="text" placeholder='Enter Todo' value={todo} required onChange={handleInput}/>
        <button onClick={addTodo} className='p-2 px-8 rounded-lg bg-slate-400'>Add Todo</button>
        </div>
      </form>
      <p>My Message</p>
      <br/>
      <h2>All Todos</h2>
      <ul className="todolist flex flex-col gap-2">
        {
          allTodos.map(todo => (
            <li key={todo.id} className='flex w-4/6 justify-between items-center'>
              <div>
                <input type="checkbox" checked={todo.done} className='w-4 mr-2' onChange={(e) => {handleChecked(todo.id, e.target.checked)}}/>{todo.name}
              </div>
              <button onClick={() => handleDelete(todo.id)} className='p-1 px-4 rounded-lg bg-slate-400'>Delete</button>
            </li>
          ))          
        }
      </ul>
    </div>
  )
  }

export default App
