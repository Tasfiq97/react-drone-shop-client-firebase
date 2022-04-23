import { faAd, faAddressBook, faAddressCard, faAdjust, faAmbulance, faCoffee, faPager, faPause } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FlashlightOffRounded } from '@mui/icons-material';
import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const DroneInfo = () => {
    return (
        <Box  sx={{marginTop:"80px",background:"#eeeeee", padding:"40px 40px" }}>
            <Typography variant="h4" style={{textAlign:"center"}}>
            Drones, Quadcopters and Octocopters Are Perfectly Suited For
The Purposes Of Aerial Inspections
            </Typography>
            <Grid sx={{marginTop:"50px"}} container rowSpacing={2} columnSpacing={{xs: 1, sm: 2, md: 3 }}>
  <Grid item sx={{padding:"20px"}}  sm={12} md={6}>
   <div style={{marginBottom:"60px"}} sx={{padding:"20px"}}>
   <h3> <FontAwesomeIcon style={{fontSize:"25px",marginRight:"20px"}} icon={faAdjust}/>AERIAL PHOTOGRAPHY</h3>
   <p>A drone is an unmanned aerial vehicle (UAV) that is fitted with various equipment including photography and videography leverage agile frameworks</p>
   </div>
   <div style={{marginBottom:"60px"}} sx={{padding:"20px"}}>
   <h3><FontAwesomeIcon style={{fontSize:"25px",marginRight:"20px"}} icon={faAddressCard}/>  RESOLUTION</h3>
   <p>These devices can hover and maneuver above your event capturing images and video of not just individuals iterative approaches to corporate strategy.</p>
   </div>
  </Grid>
  <Grid item   sm={12} md={6}>
  <div style={{marginBottom:"60px"}} sx={{padding:"20px"}}>
   <h3> <FontAwesomeIcon style={{fontSize:"25px",marginRight:"20px"}} icon={faPager}/>PROPELLERS</h3>
   <p>Our drone event services provide you with a skilled UAV pilot that will provide drone event photography or good videography a robust synopsis for high level.</p>
   </div>
   <div style={{marginBottom:"60px"}} sx={{padding:"20px"}}>
   <h3> <FontAwesomeIcon style={{fontSize:"25px",marginRight:"20px"}} icon={faPause}/>POWERFUL & PORTABLE</h3>
   <p>Drone event videographers can record all the activities (in the water too) throughout the event and record from inaccessible foster collaborative proposition..</p>
   </div>
  </Grid>
  
 
</Grid>
        </Box>
    );
};

export default DroneInfo;