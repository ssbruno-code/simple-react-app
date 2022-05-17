import React , { useState, useRef } from "react"
import TodoList from "./TodoList"

function App() {

  const [ getTodos, setTodos ] = useState( [ {
      id: 1,
      name:'Todo 1',
      complete:true
    }, 
    {
      id: 2,
      name:'Todo 2',
      complete:false
    }
  ] )

  const todoName = useRef()

  function addTodo( e ) {
    const name = todoName.current.value
    if ( name === '' ) return
    setTodos( prevTodos => {
      return [...prevTodos, {id: 1, name: name, complete:false}]
    } )
  }

  return (
    <>
      <TodoList getTodos={ getTodos } />
      <input type="text" ref={ todoName } />    
      <button onClick={ addTodo }>Add Todo</button>
      <button>Clear Complete</button>
      <div>0 left to do</div>
    </>
  )
}

export default App;
