import './App.css'
import { Grid, Link, Typography } from '@mui/material'
import { DemoPage } from './pages/Demo'

function App() {

  return (
    <Grid container justifyContent={'center'} alignItems={'center'}>
      <Typography variant='h4' py={3}>React Hook Form Demo</Typography>

      <Grid item xs={6}>
        <DemoPage />
      </Grid>

      <Grid item xs={12} my={2}>
        <Link href='https://github.com/swaraj89/rhf-demo' sx={{textDecoration: 'none',}}>
          <Typography variant='caption'  >View source code here</Typography>
        </Link>
      </Grid>

    </Grid>
     
  )
}

export default App
