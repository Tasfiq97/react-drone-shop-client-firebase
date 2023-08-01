import React from 'react';
import {  Button, Grid, TextField } from '@mui/material';
const Footer = () => {
    return (
        <Grid container spacing={2} style={{marginTop:"50px",backgroundColor:"#efefef",color:"gray",padding:"40px"}}>
  <Grid item xs={12} md={3}>
    <h2>DronesHere</h2>
    <p>Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing. Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate testing.</p>
  </Grid>
  <Grid item xs={12} md={3}>
   <h3>Categories</h3>
   <ul style={{listStyle:"none",lineHeight:"40px"}}>
       <li>Home</li>
       <li>About us</li>
       <li>Purchase</li>
       <li>Reviews</li>
   </ul>
  </Grid>
  <Grid item xs={12} md={3}>
  <h3>Information</h3>
   <ul style={{listStyle:"none",lineHeight:"40px"}}>
       <li>Portfolio</li>
       <li>Shop</li>
       <li>Contact</li>
       <li>Location</li>
   </ul>
  </Grid>
  <Grid item xs={12} md={3}>
    <h3>subscribe now</h3>
    <TextField id="standard-basic" label="email" variant="standard" /> <br />
    <Button sx={{m:2}} variant="contained">Subscribe</Button>
    <p>Objectively innovate empowered manufactured products whereas parallel platforms.</p>
  </Grid>
  <p style={{textAlign:"center"}}>&copy; all rights reseerved || 2023</p>
</Grid>
    );
};

export default Footer;