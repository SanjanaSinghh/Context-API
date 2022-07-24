

import {  Routes, Route } from "react-router-dom";
import {AuthContext} from '../context/AuthContext'
import { useContext } from "react";
import {ChakraProvider} from '@chakra-ui/react'
import Navbar from './Navbar'
import Products from './Products'
import Login from './logiin'

 export default  function Main(){
   const{login}=useContext(AuthContext)

    return(
        
        <ChakraProvider>
  <Routes>
        
            
              <Route path="/" element={<Navbar/>}>
                <Route index element={login?<Products/>:<Login/>} />
               
              </Route>
            
          
          
          
      
      
            </Routes>
        D and S Shah
      
        </ChakraProvider>
        
    )
 }