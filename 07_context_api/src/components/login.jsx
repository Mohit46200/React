import React,{useState,useContext} from "react";
import userContext from "../context/UserContext";
function login(){
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    
    const {setUser} = useContext(userContext)

    
    const handleSubmit =function(e){
        e.preventDefault()
        setUser({username,password})
    }
    return (
        <div>

            <h2>Login</h2>
            <input type="text" 
            value={username} 
            onChange={function(e){
                setUsername(e.target.value)
            }}
            placeholder="username"></input>
            <input type="text" 
            value={password} 
            onChange={function(e){
                setPassword(e.target.value)
            }}
            placeholder="password"></input>
            <button onClick={handleSubmit}>Submit</button>

        </div>
    )
}

export default login