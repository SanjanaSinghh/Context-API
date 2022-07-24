import React, { createContext, useState } from "react";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

 const [login,setlog]=useState(false)
 const loginhandler=()=>{
  var sai=login?false:true
  setlog(sai)

 }

  // code here
  return (
    <>
    <AuthContext.Provider value={{login,loginhandler}}>

{children}

</AuthContext.Provider>;
    
    </>
  )
};
