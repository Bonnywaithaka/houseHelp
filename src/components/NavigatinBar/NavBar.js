import { Box, Button, Typography } from '@mui/material'
import React from 'react'

function NavBar() {
  return (
    <Box>
      <Box>
        <Typography>My House Help</Typography>
      </Box>
      <Box>
        <Button>Login</Button>
        <Button>Register</Button>
      </Box>
    </Box>
  );
}

export default NavBar