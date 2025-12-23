import { createContext,useContext } from "react";


export const Todocontext = createContext({
    todos:[
        {
            id:1,
            todo:"todo msg",
            completed: false,
        }
    ],
    addTodo: function(todo){},
    updateTodo: function(id, todo){},
    deleteTodo: function(id){},
    toggleComplete:function(id){}
})


export const UseTodo = function(){
    return useContext(Todocontext)
}


export const Todoprovider= Todocontext.Provider