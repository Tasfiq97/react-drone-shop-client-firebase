import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DronesAll from '../Dronesall/DronesAll';
import Footer from '../Home/Footer/Footer';
import Navbar from '../Shared/Navbar';


const MoreDrones = () => {
    const [alldata,setAllData]=useState([]);

    useEffect(()=>{
        fetch("https://niche-website-server-tasfiq97.vercel.app/products")
        .then(res=>res.json())
        .then(data=>setAllData(data));
    },[])
    return (
        
         
      
          <div>
              <Navbar></Navbar>
               <h1 style={{textAlign:"center",marginTop:"70px",marginBottom:"70px"}}>All Our Drones </h1>
              <Container style={{marginBottom:"80px"}}>
              <Grid container spacing={2} rowSpacing={5} sx={{textAlign:"center"}}>
  
  {
      alldata.map(data=><DronesAll
      key={data.key}
      data={data}
      >

      </DronesAll>)
  }
</Grid>
              </Container>
             
          </div>

        
    );
};

export default MoreDrones;