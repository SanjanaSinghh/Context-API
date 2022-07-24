import "./App.css";
import {ChakraProvider} from '@chakra-ui/react'
import Navbar from "./components/Navbar";
import Login from "./components/logiin";
import Products from "./components/Products";
import Main from "./components/main ";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useContext } from "react";
// import Login from "./components/logiin";

function App() {
  //  const{login}=useContext(AuthContext)
  return(
<AuthProvider>
  <ChakraProvider>
<CartProvider>
  <BrowserRouter>
      <Routes>
        
          <Route index element={<Main />} />
          
         
        
      </Routes>
   
    </BrowserRouter>

    



  
      </CartProvider>
  </ChakraProvider>
  </AuthProvider>
  )
}

export default App;
