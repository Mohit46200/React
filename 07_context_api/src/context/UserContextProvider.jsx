//part 2

import React, { useState } from "react";
import userContext from "./UserContext";

const UserContextProvider = function({children}){
    const [user,setUser]= React.useState(null)       //jo bhi api wagera bhi call yani kr sakte hai
        return(
            <userContext.Provider value={{user,setUser}}>      //phir yaha is value object mai pass kr do
                {children}
            </userContext.Provider>
        ) 
}
export default UserContextProvider


