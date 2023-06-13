import { Button, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import Navbar from "../Shared/Navbar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
const DronesAll = ({ data }) => {
  const { image, drone, camera, price, key, description } = data;
  return (
    <>
      <Card sx={{ maxWidth: 345, marginTop: "80px" }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {drone}
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            camera: {camera}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography
            sx={{ marginTop: "40px" }}
            variant="h5"
            color="text.primary"
          >
            price: ${price}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/purchase/${key}`}>
            <Button sx={{ backgroundColor: "black " }} variant="contained">
              Purchase
            </Button>
          </Link>
        </CardActions>
      </Card>
      {/*               
  //             <Grid item xs={12} md={4}>
  //           <img width="75%" src={image} alt="" />
  //          <h3>{drone}</h3>
  //          <h4>Camera: {camera}</h4>
  //          <p>{description.slice(0,150)}</p>
  //          <p style={{color:"gray",fontWeight:"700",fontSize:"20px"}}>price: $ {price}</p>
  //          <Link to={`/purchase/${key}`}>
  //           <Button  sx={{backgroundColor:"black "}} variant="contained">Purchase</Button>
  //           </Link>
  // </Grid> */}
    </>
  );
};

export default DronesAll;
