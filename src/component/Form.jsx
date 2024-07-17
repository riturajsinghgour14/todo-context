import React, { useContext, useEffect, useState } from 'react'
import TodoContext from '../context/TodoContext';

const Form = () =>{

  const{saveTodo,edit,updatetodo} = useContext(TodoContext)

   const [text, setText] = useState("")
 
  //  console.log(edit)

   const handleSubmit=(e)=>{
  e.preventDefault();

  edit.isEdit ? updatetodo({
    id:edit.todo.id,
    text: text
  }):saveTodo(text);
  setText("")
 };

 useEffect(() => {
  setText(edit.todo.text);
    },[edit]); 
  
  return (
    <form className="my-2" onSubmit={(e)=>handleSubmit(e)}>
    <input type="text" placeholder="Enter text Here..." 
    className="form-control roundes-0"
    required
    value={text}
    onChange={(e)=> setText(e. target.value)}
    />
    <button className="btn btn-secondary my-3 w-100 rounded-0">Save</button>
    </form>
  );
};

export default Form;
