import { useState } from 'react'

function App() {
  let [counter,setCounter]=useState(15);
  function add(){
    counter=counter+1
    setCounter(counter)
    if(counter>20){
      setCounter(counter=20)
    }
  }
  function remove(){
    
    setCounter(counter=counter-1)
    if(counter<0){
      setCounter(counter=0)
    }
  }

  return (
  <>
    <h1 >Counter value {counter}</h1>
    <button onClick={add}>Add value</button>
    <button onClick={remove}>Remove value</button>
  </>
  )
}
export default App
