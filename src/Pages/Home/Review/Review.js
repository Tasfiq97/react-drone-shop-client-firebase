
import { Container, Grid } from '@mui/material';
import React from 'react';
import Rating from 'react-rating';
const reviews = [
    {
        img: "https://lightwidget.com/wp-content/uploads/local-file-not-found.png",
        name: "arnold weigner",
        review: "The package arrived intact and took 11 days. This is my first drone. I don't know about it. The seller discussed and helped me in detail. The drone is placed in a foamed backpack and is well protected. I calibrated the drone according to the instructions and linked it with my phone. It stayed still in the wind and the camera The performance is great, the automatic return performance is good, this is a shopping I am very satisfied.",
        rating: 4
    },
    {
        img: "https://lightwidget.com/wp-content/uploads/local-file-not-found.png",
        name: "ariyana krund",
        review: "It arrived perfectly, packaged beautifully and intact, and met my expectations. The drone has a German manual. It is easy for me to calibrate and take off the aircraft. It will take me to farther places. Good seller, thank you!",
        rating: 3.5,
    },
    {
        img: "https://lightwidget.com/wp-content/uploads/local-file-not-found.png",
        name: "joseph hezes",
        review: "Well cared for nice seller, good communication and thinks along with you. Definitely going to order more",
        rating: 5,
    }

]

const Review = () => {
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
                            p
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