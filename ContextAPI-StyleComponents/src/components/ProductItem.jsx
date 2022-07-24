import { Box, Heading,Button, Center,Image} from "@chakra-ui/react";
import { useContext ,useState} from "react";
import React from "react";
import { CartContext } from "../context/CartContext";
const ProductItem = (props) => {
  var {Addcart,cart,Cartco,ca}=useContext(CartContext)

  var [count,setcount]=useState(1)
  return(
    <>


    <Box p='5%' w='400px' border={'4px'} borderColor='black'>
    <Heading>{props.item.name}</Heading>
    <Image src={props.item.img}></Image>
<Center>
<Button w='95px'
 onClick={()=>
 {
 Cartco(1)
 setcount(count+1)
 
 }}
>++</Button>
{count}
    <Button 
    w='93px'
    onClick={()=>{
      
      
      if(count>1){
Cartco(-1)
        setcount(count-1)
      }
    
  }}
    >--</Button>
</Center>
<Center>
  {console.log(cart)}
  <Button 
  w='200px'
  onClick={()=>Cartco(1)}>
    Add to cart
  </Button>
</Center>
    </Box>
    
    </>
  );
};

export default ProductItem;
