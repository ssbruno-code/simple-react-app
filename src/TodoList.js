import React from "react"
import Todo from './Todo'

export default function TodoList( { getTodos } ) {
    return(
        getTodos.map( todo => {
            return <Todo key={todo.id } todo={ todo } />
        } )
    )
}