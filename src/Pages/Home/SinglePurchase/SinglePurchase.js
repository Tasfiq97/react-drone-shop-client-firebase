import { Button, Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';

const SinglePurchase = ({data}) => {
    const {drone,image,price,key,description}=data;
    return (
       
            <Grid sx={{marginTop:"80px"}} item sm={12} md={4}>
            <img style={{width:"75%"}} src={image} alt="" />
            <h3>{drone}</h3>
            <p>{description.slice(0,150)}</p>
            <p style={{color:"gray",fontWeight:"700",fontSize:"20px"}}>price: ${price}</p>
            <Link to={`/purchase/${key}`}>
            <Button  sx={{backgroundColor:"black "}} variant="contained">Purchase</Button>
            </Link>
            
        </Grid>
        
    );
};

export default SinglePurchase;