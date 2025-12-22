import { createContext,useContext } from "react";


export const Todocontext = createContext({
    todos:[
        {
            id:1,
            todo:"todo msg",
            completed: flase,
        }
    ],
    addTodo: function(todo){},
    updateTodo: function(id, todo){},
    delete: function(id){},
    toggleComplete:function(id){}
})


export const Usetodo =function(){
    return useContext(Todocontext)
}


export const Todoprovider= Todocontext.Provider