import { useState } from 'react'
import './App.css'

function App() {
   const [count,setCount]=useState(0)
   const addcount = () => {
    setCount(prev => prev + 1)
    setCount(function(prev){
      return prev + 1;
    })
   }

  return (
    <>
       {count}
       <br></br>
       <button onClick={addcount}>Click</button>
    </>
  )
}

export default App
