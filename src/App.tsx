import { useState } from 'react'

import './App.css'
import { Grid } from '@mui/material'
import Sidebar from './component/Sidebar'

function App() {


  return (
      <Grid container spacing={4} sx={{backgroundColor:"#212121",minHeight:"100vh",minWidth:"100vw"}}>
          <Sidebar/>
          <Grid size={10}>hi</Grid>
        </Grid>
  )
}

export default App
