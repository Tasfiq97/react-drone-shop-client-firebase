import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email,setEmail]=useState("");
    const [admin,setAdmin]=useState(false);

  const handleEmail=(e)=>{
setEmail(e.target.value)
  }

    const handleSubmit=(e)=>{
        e.preventDefault()
  const user={email}
        fetch("http://localhost:5000/users/admin",{
            method:"PUT",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
           if(data.modifiedCount){
               setAdmin(true)
               window.location.reload();
           }
        })
    }
    return (
        <div style={{textAlign:"center"}}>
            <h2>Make  anyone admin </h2>
            <form onSubmit={handleSubmit} >
            <TextField 
            sx={{margin:"30px",width:"50%"}}
            label="Email" 
            variant="standard"
            onChange={handleEmail}
            
             />
             <br />
             <Button type="submit" sx={{backgroundColor:"black"}} variant="contained">Make Admin</Button>
            </form>
            {admin && <Alert severity="success"> Admin made Successful</Alert>}
        </div>
    );
};

export default MakeAdmin;