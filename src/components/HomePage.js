import { Box, TextField, Typography } from '@mui/material'
import React from 'react'

function HomePage() {
  return (
    <Box>
        <Box>
            <Typography variant="h4">
                My House Help Web 
            </Typography> 
            <Box>
                <TextField label="search" placeholder='serach for a house help'/>
            </Box>
        </Box>
        <Box>

        </Box>
    </Box>
  )
}

export default HomePage