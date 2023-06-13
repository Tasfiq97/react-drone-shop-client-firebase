import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://drone-shop-server-production.up.railway.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <Container style={{ marginTop: "50px" }}>
      <h1>Customers Review</h1>
      <h4 style={{ color: "gray" }}>our happy customeers</h4>

      <Grid container gap={5}>
        {reviews?.map((review) => (
          // <Grid item xs={12} md={4}>
          //   <img
          //     style={{ width: "50%", borderRadius: "100%" }}
          //     src={review.img}
          //     alt=""
          //   />
          //   <h3>{review.name}</h3>
          //   <p>{review.review}</p>
          //   <h5>their ratings</h5>
          //   <Rating
          //     emptySymbol="fa fa-star-o fa-x"
          //     fullSymbol="fa fa-star fa-x"
          //     initialRating={review.rating}
          //     readonly
          //   />
          // </Grid>
          <Card sx={{ maxWidth: 345, marginTop: "50px" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={review.img}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {review.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {review.review}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Rating
                emptySymbol="fa fa-star-o fa-x"
                fullSymbol="fa fa-star fa-x"
                initialRating={review.rating}
                readonly
              />
            </CardActions>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default Review;
