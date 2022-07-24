import { Box, Input,Button} from "@chakra-ui/react"
// import { Button } from "bootstrap"
import { useContext } from "react"

import {AuthContext} from '../context/AuthContext'


export default function Login(){

const {login,loginhandler}=useContext(AuthContext)
    return(
        <>
       <Box mt='100px' ml='25%' w='20%'>
        <Box>
<Input   placeholder="username">
</Input>


        </Box>
        
        <Box>
<Input   placeholder='password'>
</Input>

 <Button ml='25%'
  onClick={loginhandler}> log in</Button>
        </Box>
        </Box>  
        
        </>
    )

    return
}