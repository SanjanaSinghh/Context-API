import { Heading ,Box} from "@chakra-ui/react";
import React, { useContext } from "react";
 import product from './db.json'
 import ProductItem from './ProductItem'
 import { CartContext } from "../context/CartContext";
// import { AuthContext } from "../context/AuthContext";
const Products = () => {

   var {ca,Addcart}=useContext(CartContext)
  return (


    <>
<Box ml='25%'>    <Heading>Cart items :{ca}</Heading>
    
    {
      console.log(ca,Addcart)
     
    }
    {
      product.product.map((e,i)=><ProductItem key={i} item={e} index={i}/>)
    }
    </Box>


    </>
  )
};

export default Products;
