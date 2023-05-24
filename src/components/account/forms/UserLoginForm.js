import { Box, Button, TextField, Typography, styled } from '@mui/material'
import NextLink from 'next/link'
import React from 'react'

const StyledTitle = styled(Box)(()=>({
    display:"flex",
    justifyContent:"center",
    alignContent:"center",

}))
function UserLoginForm() {
  return (
    <StyledTitle>
        <Box sx={{display:"flex",
    flexDirection:"column"}}>
 <Box>
            <Typography variant="h4" color="primary">My House Help</Typography>
        </Box>
        <Box sx={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            margin:"20px 40px",
            padding:"64px 100px",
            borderRadius:8,
            // border:"solid 1px #2b34ac",
           boxShadow: "4px -4px 8px rgba(0, 0, 0, 0.12), 4px 4px 8px rgba(0, 0, 0, 0.12)",
           backgroundColor:"#fff",
        }}>
            <Box
            sx={{
                display:"flex",
            flexDirection:"column", 
                justifyContent:"center",
                alignItems:"center",
                paddingBottom:2,
            }}
            ><Typography variant="h4" color="#2b34ac">Login</Typography>
            <Typography variant="body1" color="#2b34ac">Welcome Back!</Typography>
            </Box>
            <Box sx={{display:"flex",
            flexDirection:"column",  justifyContent:"space-between",gap:"20px"}}>
                <TextField label="email" type="email"/>
                <TextField label="password" type="password"/>
                
                    <Button variant="contained">
                        <NextLink href="/my-account">Login</NextLink></Button>
                
            </Box>
             <Box>
            <NextLink href="/">forgot password?</NextLink>
        </Box>
        </Box>
        
        </Box>
         </StyledTitle>
  )
}

export default UserLoginForm