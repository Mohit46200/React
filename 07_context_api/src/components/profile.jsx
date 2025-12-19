//part 5 ab ismai hum jo data part 4 se pass hua hai state mai usse use karenge

import React,{useContext} from "react";
import userContext from "../context/UserContext";

function profile(){
    const {user} = useContext(userContext)
    if(!user) return <div>Please login</div>

    return <div>Welcome {user.username}</div>
    
}

export default profile


