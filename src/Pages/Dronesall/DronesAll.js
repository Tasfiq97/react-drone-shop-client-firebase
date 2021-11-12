import { Button, Container, Grid,  } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';

const DronesAll = ({data}) => {
    const {image,drone,camera,price,key}=data
    return (
     
            <Grid item xs={12} md={4}>
            <img width="75%" src={image} alt="" />
           <h3>{drone}</h3>
           <h4>Camera: {camera}</h4>
           <p style={{color:"gray",fontWeight:"700",fontSize:"20px"}}>price: $ {price}</p>
           <Link to={`/purchase/${key}`}>
            <Button  sx={{backgroundColor:"black "}} variant="contained">Purchase</Button>
            </Link>
  </Grid>
       
    );
};

export default DronesAll;