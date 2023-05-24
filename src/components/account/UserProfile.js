import { Avatar, Box, Divider, styled } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const MainBox = styled(Box)(()=>({
    display:"flex",
    flexDirection:"column",
    width:"90vw"
}))
const UserData = styled(Box)(()=>({
    display:"flex",
    justifyContent:"flex-start",
    gap:60
}))
function UserProfile() {
  return (
   <MainBox >
    <UserData>
    <Box sx={{borderRadius:100, 
    backgroundColor:"red", 
    padding:10,
    marginBottom:5,
    backgroundImage: `url('/assets/bthairu.png')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
}}/>
        <Box>
           Info:
           Name: Boniface Waithaka
           Gender:Male
           Nationaliy:Kenyan
        </Box>
    </UserData>
    <Divider />
    </MainBox>
  )
}

export default UserProfile