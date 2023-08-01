import { Button, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const SinglePurchase = ({ data }) => {
  const { drone, image, price, key, description } = data;
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
          <Typography variant="body2" color="text.secondary">
            {description?.slice(0, 200)}
          </Typography>
          <Typography
            sx={{ marginTop: "40px" }}
            variant="h5"
            color="text.primary"
          >
            ${price}
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
    </>
  );
};

export default SinglePurchase;
