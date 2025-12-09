import { useState, useCallback, useEffect} from 'react'
function App() {
  const [password,setPassword]=useState("")
  const [range,setRange]=useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const password_Generate=useCallback(function(){             //ye function ko banata hai
    let rand="qwertyuiopasdfghjklzxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM"
    let num="1234567890"
    let sym="!@#$%^&*`"
    let word="";
    if(numberAllowed){
      rand=rand+num;
    }if(charAllowed){
      rand=rand+sym;
    }
    for(let i=0;i<range;i++){
        let randomNumber = Math.floor(Math.random() * (rand.length));
        word+=rand.charAt(randomNumber)
    }
    setPassword(word)
  },[range,numberAllowed,charAllowed])

  const copyPasswordToClipboard = useCallback(function() {
    window.navigator.clipboard.writeText(password)
  }, [password])

    useEffect(function(){       //ye function ko chalata hai
      password_Generate()
    },[range,numberAllowed,charAllowed])
  return (
    <div id='container1'>
          <div id='container2'><h1>Password Generator</h1>
          <div id='container3'>
          <input id='pass' type='text' readOnly value={password}></input>
          <button onClick={copyPasswordToClipboard}>Copy</button>
          </div>
          <div id='container4'>
            <input id="range" type='range' max={100} min={6} value={range} 
            onChange={function(e){setRange(e.target.value)}}></input>
            <label>Total Characters {range}</label>
            <input type="checkbox" id="check1" defaultChecked={numberAllowed}
            onChange={function(){
              setNumberAllowed((prev) => !prev);
          }}/>
            <label>Numbers</label>
            <input type='checkbox'id="check2" defaultChecked={charAllowed}
            onChange={function(){
                  setCharAllowed((prev) => !prev )
              }}/>
            <label>Speacial Character</label>
          </div>
          
          </div>
    </div>
  )
}

export default App
