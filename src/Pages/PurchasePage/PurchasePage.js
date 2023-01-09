import { Alert, Button, Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navbar from '../Shared/Navbar';
import OpenModal from '../Shared/OpenModal/OpenModal';

const PurchasePage = () => {
    const {productId}=useParams();
    const [selectedProduct,setSelectedProduct]=useState([])
    const [open, setOpen] = React.useState(false);
    const [alert,setAlert]=useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    useEffect(()=>{
        fetch("https://react-drone-shop-server-node-mongo.vercel.app/products")
        .then(res=>res.json())
        .then(data=>{
            const filteredData=data.find(pd=>pd.key==productId)
             setSelectedProduct(filteredData);
        });
    },[])
    return (
      <Box>
         <Navbar></Navbar>
        <Container>
          
            <OpenModal
            selectedProduct={selectedProduct}
            open={open}
            handleOpen={handleOpen}
            handleClose={handleClose}
           setAlert={setAlert}
     >

     </OpenModal>
            <Grid container spacing={2} style={{padding:"40px"}}>
  <Grid item xs={12} md={6}>
   <h1>{selectedProduct.drone}</h1>
   {alert && <Alert severity="success">product purchase sucessful!</Alert>}
   <h3> camera:{selectedProduct.camera}</h3>
   <p>{selectedProduct.description}</p>
     <h4>price: ${selectedProduct.price}</h4>
     <Button onClick={handleOpen} variant="contained" sx={{backgroundColor:"black"}}>Place Order</Button>
     
  </Grid>
  <Grid item xs={12} md={6}>
     <img width="75%" src={selectedProduct.image} alt="" />
  </Grid>
  
</Grid>
        </Container>
        </Box>

    );
};

export default PurchasePage;