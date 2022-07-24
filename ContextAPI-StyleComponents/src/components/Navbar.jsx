import React from "react";
import { useContext } from "react";
import { Center, Flex, Heading, Spacer ,Text} from "@chakra-ui/react"
import CartContext  from '../context/CartContext'
import {AuthContext} from '../context/AuthContext'
import { Outlet } from "react-router-dom";
const Navbar = () => {
  const {login,loginhandler}=useContext(AuthContext)
  
  return(
    <>
    <Flex background={'GrayText'}>


<Text ml='35%'>
<Heading> Home</Heading> 
</Text>
<Spacer></Spacer>

<Text mr='35%'>
  
<Heading onClick={loginhandler}> {login?"log Out":"Log in"}</Heading> 
</Text>

    </Flex>
<Outlet></Outlet>
    </>
  )
};

export default Navbar;
