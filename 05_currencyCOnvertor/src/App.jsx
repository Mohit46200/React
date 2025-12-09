import {useState,useEffect} from 'react'
function App() {  
    const[data,setdata]=useState({})
    const[from,setFrom]=useState("usd")
    const[to,setTo]=useState("inr")
    const [fromvalue,setFromvalue]=useState(0)
    const [tovalue,setTovalue]=useState(0)
    useEffect(function(){
      fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2025-12-01/v1/currencies/usd.json')
    .then(function(response){
      return response.json()
    })
    .then(function(datas){
      setdata(datas)
    })
    },[])
    const keys=Object.keys(data.usd ??{})
    function createOption(value) {
      return <option key={value}>{value}</option>;
    }
    function swap(){
      let a=from
      setFrom(to)
      setTo(a)
    }
    function convert(){
      setTovalue(((fromvalue)/(data.usd[from]))*data.usd[to])
    }
  return (
    <div id="container1">
      <div id="container2">
        <div id="from" class="converter">
          <h3>From</h3>
          <h4>Currency Type</h4>
          <input id='value' type="text" value={fromvalue} onChange={(e)=>setFromvalue(e.target.value)}/>
          <select id="currency" value={from} onChange={(e) => {
            setFrom(e.target.value)
            }} >
            {keys.map(key => createOption(key))}
          </select>
          </div>
          <div id='swap'><button onClick={()=> swap()} id='swap2'>Swap</button></div>
        <div id="to" class="converter">
          <h3>To</h3>
          <h4>Currency Type</h4>
           <input id='value' type="text" readOnly value={tovalue}/>
           <select id='currency' value={to} onChange={(e) => {
            setTo(e.target.value)
            }}>
            {keys.map(key => createOption(key))}
          </select>
           </div>
        <button id="convert" onClick={()=>{convert()}}>Convert</button>
      </div>
    </div>
  )
}

export default App
