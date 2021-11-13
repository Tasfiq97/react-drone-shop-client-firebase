import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import useFirebase from '../../Hooks/useFirebase';
import useAuth from '../../Hooks/useAuth';


const AppNavbar = () => {
  const {user,logout}=useAuth()
    return (
        <Box sx={{ flexGrow: 1,textAlign:"center" }}>
        <AppBar sx={{backgroundColor:"#efefef",color:"black", boxShadow: 0 }} position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            <Link to="/" style={{textDecoration:"none",color:"black"}}>
            <Typography style={{fontWeight:"800"}} variant="h5" component="div">
             DronesHere

             </Typography>
            </Link>
            </IconButton>
            <Typography variant="h6"  sx={{ flexGrow: 1 }}>
            <Link to="/moreDrones" style={{textDecoration:"none",color:"black"}}> More Drones</Link>
          </Typography>
        {user?.email? <Box>
        
        <Link to="/dashboard">
        <Button variant="text" style={{marginRight:"30px"}}>
               Dashboard
          </Button>
        </Link>
         <Button onClick={logout} variant="contained" style={{backgroundColor:"black"}}>
               Logout
          </Button>
          </Box>
         :
         <Link to="/login" style={{textDecoration:"none"}}>
         <Button variant="contained" style={{backgroundColor:"black"}}>
               Login
          </Button>
         </Link>
         
         }
          
       
           
          </Toolbar>
        </AppBar>
      </Box>
    );
};

export default AppNavbar;