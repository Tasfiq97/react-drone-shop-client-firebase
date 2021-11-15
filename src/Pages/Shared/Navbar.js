import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import useAuth from '../../Hooks/useAuth';

const Navbar = () => {
const theme=useTheme()
const {user,logout}=useAuth()
    const style=makeStyles({
        navIcon:{
            [theme.breakpoints.up('md')]: {
                display:"none"
              }
        },
        navContainer:{
            [theme.breakpoints.down('sm')]: {
                display:"none"
              }
        },
        navLogo:{
            [theme.breakpoints.down('sm')]: {
                textAlign:"center"
              }
        }
    })
    const {navIcon,navContainer,navLogo}=style()

    const [state, setState] = React.useState(false);
   
    
      const list =  (
        <Box
          sx={{ width: 250 }}
          role="presentation"
       
        >
          <List>
          <ListItem button >
                  
                  <Link style={{textDecoration:"none",color:"black"}} to="/"><ListItemText >Home</ListItemText></Link>
                </ListItem>
              <ListItem button >
                  
                <Link style={{textDecoration:"none",color:"black"}} to="/moreDrones"><ListItemText >More Drones</ListItemText></Link>
              </ListItem>
              <Divider />
              { user?.email ?<>
                <ListItem button >
               <Link style={{textDecoration:"none",color:"black"}} to="/dashboard"> <ListItemText >Dashboard</ListItemText></Link>
              </ListItem>
              <Divider />
              <ListItem button >
                <ListItemText onClick={logout} >Logout</ListItemText>
              </ListItem>
              </>
              :
              <ListItem button >
              <Link style={{textDecoration:"none",color:"black"}} to="login">  <ListItemText >Login</ListItemText></Link>
              </ListItem>
              }
              <Divider />

          
          </List>
        
         
        </Box>
      );
    return (
        <>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:"gray"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            className={navIcon}
            onClick={()=>setState(true)}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography className={navLogo} variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Squadrish Drone
          </Typography>
          
          <Box className={navContainer}>
          <Link sx={{flexGrow:1}} to="/" style={{textDecoration:"none",color:"black",marginRight:"20px"}}><Button sx={{background:"black",}} variant="contained" >Home</Button> </Link>
          <Link sx={{flexGrow:1}} to="/moreDrones" style={{textDecoration:"none",color:"black",marginRight:"20px"}}><Button sx={{background:"black",}} variant="contained" >More Drones</Button> </Link>
          {user?.email? <>
        
        <Link to="/dashboard">
        <Button style={{textDecoration:"none" ,marginRight:"20px"}} sx={{background:"black",}} variant="contained">
               Dashboard
          </Button>
        </Link>
         <Button onClick={logout} variant="contained" style={{backgroundColor:"black"}}>
               Logout
          </Button>
          </>
         :
         <Link to="/login" style={{textDecoration:"none"}}>
         <Button variant="contained" style={{backgroundColor:"black"}}>
               Login
          </Button>
         </Link>
         
         }
          </Box>
          
        </Toolbar>
      </AppBar>
    </Box>
    <div>
    
      <React.Fragment >
        <Drawer
          open={state}
          onClose={()=>setState(false)}
        >
          {list}
        </Drawer>
      </React.Fragment>
  </div>
        </>
    );
};

export default Navbar;