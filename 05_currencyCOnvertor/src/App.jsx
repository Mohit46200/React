import {useState,useEffect} from 'react'
function App() {  
    const[data,setdata]=useState({})
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
 
  return (
    <div id="container1">
      <div id="container2">
        <div id="from" class="converter">
          <h3>From</h3>
          <h4>Currency Type</h4>
          <input id='value' type="text"/>
          <select id="currency">
            {keys.map(key => createOption(key))}
          </select>
          </div>
          <div id='swap'><button onClick={function(){}} id='swap2'>Swap</button></div>
        <div id="to" class="converter">
          <h3>To</h3>
          <h4>Currency Type</h4>
           <input id='value' type="text" readOnly value={0}/>
           <select id='currency'>
            {keys.map(key => createOption(key))}
          </select>
           </div>
        <button id="convert">Convert</button>
      </div>
    </div>
  )
}

export default App
