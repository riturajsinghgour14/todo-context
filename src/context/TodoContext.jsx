import { Children, createContext, useState } from "react";

const TodoContext = createContext()

export const TodoProvider = ({children}) => {

    const [todos, setTodos] = useState([

    ]);
  
    const [edit, setEdit] = useState(
      {todo: {}, 
      isEdit: false}
    );
  
    const saveTodo = (text) => {
      const newTodo = {
        id: crypto.randomUUID(),
        text: text,
      };
      setTodos([newTodo, ...todos])
    };
  
    const deleteTodo = (id) => {
      setTodos(todos.filter(item => {
        if(item.id !==id) 
          return true;
      }))  
    }
  
    // Edit Todo
    const editTodo = (oldTodo)=>{
      setEdit({
        todo : oldTodo,
        isEdit:true
      })
    }

    //  Update Todo
    const updateTodo = (updateTodo) => {
        setTodos(
            todos.map((item) => {item.id === updateTodo.id ? updateTodo : item})
        );
        setEdit(
            {todos : {},
            isEdit : false,
        })
    };
    return (
        <TodoContext.Provider value={{todos,edit,saveTodo,deleteTodo,editTodo,updateTodo}}>
            {children}
        </TodoContext.Provider>
    )
}


export default TodoContext;