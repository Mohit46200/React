import { useState ,useEffect } from 'react'
import { Todoprovider } from './context'
import TodoForm from './components/todoform'
import { TodoItem } from './components'


function App() {

  const [todos,setTodos] = useState([])

  const addTodo= function(todo){
    setTodos((prev) => [{id : Date.now(),...todo},...prev])
  }

  const updateTodo= function(id ,todo){
    setTodos((prev) => prev.map((prevTodo)=>(prevTodo.id===id ? todo:prevTodo)))
  }

  const deleteTodo= function(id){
    setTodos((prev) => prev.filter((todo) => todo.id != id))
  }

  const toggleComplete= function(id){
    setTodos((prev) => prev.map((prevTodo) => 
      (prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed }: prevTodo )))
  }

    useEffect(function(){
        const todos = JSON.parse(localStorage.getItem("todos"))

        if(todos && todos.length > 0){
          setTodos(todos)
        }
    },[])

    useEffect(function(){
        localStorage.setItem("todos" , JSON.stringify(todos))
    },[todos])

  return (
    <Todoprovider value={{todos,addTodo,updateTodo,toggleComplete,deleteTodo}}>
        <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id} className='w-full'>
                              <TodoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
        </div>
    </Todoprovider>
  )
}

export default App
