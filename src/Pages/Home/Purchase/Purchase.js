import { Button, Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SinglePurchase from '../SinglePurchase/SinglePurchase';

const Purchase = () => {
    const [data,setData]=useState([]);
    const [selectedData,setSelectedData]=useState();
    useEffect(()=>{
        
            fetch("https://still-mesa-21488.herokuapp.com/products")
            .then(res=>res.json())
            .then(data=>setData(data));

    const newData=data.slice(0,6)
    setSelectedData(newData);
    },[data])
    return (
       <Container>
            <h1>Our Own Drones For you</h1>
            <Grid  container spacing={4}>
            
            {
                    selectedData?.map(data=><SinglePurchase
                    key={data.key}
                    data={data}
                    ></SinglePurchase>)
                }
                
</Grid>
 <Link to="/moreDrones" style={{textDecoration:"none",textAlign:"center"}}>
 <Button style={{backgroundColor:"black",color:"white",marginTop:"50px",fontSize:"15px",marginBottom:"50px",}} variant="contained">More Drones --></Button>
 </Link>
       </Container>
    );
};

export default Purchase;