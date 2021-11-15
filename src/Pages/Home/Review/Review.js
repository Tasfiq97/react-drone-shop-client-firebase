
import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';


const Review = () => {
    const [reviews,setReviews]=useState([])

    useEffect(()=>{
  fetch("https://still-mesa-21488.herokuapp.com/reviews")
  .then(res=>res.json())
  .then(data=>setReviews(data))
    },[])
    return (
        <Container style={{ marginTop: "50px" }}>
            <h1>Customers Review</h1>
            <h4 style={{ color: "gray" }}>our happy customeers</h4>

            <Grid container spacing={4}>
                {
                    reviews?.map(review => <Grid item xs={12} md={4}>
                        <img style={{ width: "50%", borderRadius: "100%" }} src={review.img} alt="" />
                        <h3>{review.name}</h3>
                        <p>{review.review}</p>
                        <h5>their ratings</h5>
                        <Rating
                            emptySymbol="fa fa-star-o fa-x"
                            fullSymbol="fa fa-star fa-x"
                            initialRating={review.rating}
                            readonly
                        />
                    </Grid>)
                }


            </Grid>

        </Container>
    );
};

export default Review;