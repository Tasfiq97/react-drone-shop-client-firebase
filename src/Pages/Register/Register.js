import { Alert, Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/useFirebase';
import login from "../../Images/4957136.jpg"

const Register = () => {
  const location=useLocation()
  const history=useHistory()
    const {user,signinEmaliPass}=useAuth()
    const [newUser,setNewUser]=useState({});
    const [alert,setAlert]=useState(false)

    const handleChange=(e)=>{
        const field=e.target.name;
        const value=e.target.value;
        const loadUser={...newUser}
         loadUser[field]=value;
        setNewUser(loadUser);
    }

    const handleSubmit=(e)=>{
         if(newUser.password!==newUser.password2){
             setAlert(true);
             return
         }
         signinEmaliPass(newUser.email,newUser.password,newUser.name,location,history)
        // console.log(newUser.email,newUser.password,newUser.name)
         e.preventDefault()

         
    }
   
    return (
        <Grid container spacing={2} sx={{padding:"60px"}}>
  <Grid item xs={12} md={6}>
  <h1> Please Register </h1>
   { alert &&  <Alert severity="error">your password didnt match</Alert>}
        <form onSubmit={handleSubmit} >
        <TextField 
         onChange={handleChange}
        sx={{width:"75%",m:1}}
        id="standard-basic" 
        label="Name" 
        type="text"
        name="name"
        variant="standard" />
        <TextField 
         onChange={handleChange}
        sx={{width:"75%",m:1}}
        id="standard-basic" 
        label="Email" 
        type="email"
        name="email"
        variant="standard" />
        <TextField 
        onChange={handleChange}
          sx={{width:"75%",m:1}}
        id="standard-basic" 
        label="Password" 
        type="password"
        name="password"
        
        variant="standard" />
        <br />
        <TextField 
         onChange={handleChange}
          sx={{width:"75%",m:1}}
        id="standard-basic" 
        label="Re-type Password" 
        type="password"
        name="password2"
       
        variant="standard" />
        <br />
  <Button type="submit" sx={{width:"75%",marginTop:"30px",backgroundColor:"black"}} variant="contained" >Register</Button>
        </form>
        <Link to="/login" style={{textDecoration:"none"}}>
        <Button  sx={{width:"75%",marginTop:"30px"}} variant="text">Already registered? please login</Button>
        </Link>
  </Grid>
  <Grid item xs={12} md={6}>
    <div>
        <img style={{width:"100%"}} src={login} alt="" />
    </div>
  </Grid>
  
 
</Grid>
        
    );
};

export default Register;