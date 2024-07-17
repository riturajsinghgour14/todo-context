import React, { useContext } from 'react'
import ListItem from './ListItem'
import TodoContext from '../context/TodoContext';

const ListGroup = () => {

const {todos,deleteTodo,editTodo} = useContext(TodoContext);

  if(todos.length === 0){
    return(
      <h1 className='dispaly-4 text-secondary text-center'>
        No Todos Yet
      </h1>
    )
  }
  return (
    <ul className='my-3 list-group'>
      {
        todos.map((todo) => {
          return<ListItem key={todo.id} todo={todo} deleteTodo={deleteTodo} editTodo={editTodo}/>
        })
      }
    </ul>
  )
}

export default ListGroup
