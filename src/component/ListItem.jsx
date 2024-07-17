import React, { useContext, useEffect, useState } from 'react'
import TodoContext from '../context/TodoContext'

const ListItem = ({todo}) => {
  
const {deleteTodo,editTodo} = useContext(TodoContext);

  return (
     <li className='list-group-item rounded-0'>
        <h1 className='d-6'>{todo.text}</h1>
     <span className='float-end'>
        <button className='btn btn-warning btn-sm mx-1' onClick={(e) => editTodo(todo)}>Edit</button>
        <button className='btn btn-danger btn-sm mx-1' onClick={(e) => deleteTodo(todo.id)}>Delete</button>
     </span>

    </li>
  
  )
}

export default ListItem
