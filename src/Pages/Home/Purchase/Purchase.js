import { Button, Container, Grid, Skeleton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SinglePurchase from "../SinglePurchase/SinglePurchase";
import axios from "axios";

const Purchase = () => {
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  useEffect(() => {
    axios.get("https://drone-shop-server.onrender.com/products").then(data=>setData(data.data))

    const newData = data?.slice(0, 6);
    setSelectedData(newData);
  }, [data]);
  return (
    <Container>
      <h1>Our Own Drones For you</h1>
      <Grid container gap={5}>
        {selectedData.length===0?<>
          <Skeleton variant="rectangular" width={210} height={160} />
          <Typography> please wait for a while to render data as I am using free server hosting </Typography>
        </>: selectedData?.map((data) => (
          <SinglePurchase key={data.key} data={data}></SinglePurchase>
        ))}
      </Grid>
      <Link
        to="/moreDrones"
        style={{ textDecoration: "none", textAlign: "center" }}
      >
        <Button
          style={{
            backgroundColor: "black",
            color: "white",
            marginTop: "50px",
            fontSize: "15px",
            marginBottom: "50px",
          }}
          variant="contained"
        >
          More Drones{" "}
        </Button>
      </Link>
    </Container>
  );
};

export default Purchase;
