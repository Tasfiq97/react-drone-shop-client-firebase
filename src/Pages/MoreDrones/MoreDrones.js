import { Container, Grid, Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import DronesAll from "../Dronesall/DronesAll";
import Navbar from "../Shared/Navbar";
import axios from "axios";

const MoreDrones = () => {
  const [alldata, setAllData] = useState([]);

  useEffect(() => {
    axios.get("https://drone-shop-server.onrender.com/products").then(data=>setAllData(data.data))

  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <h1
        style={{
          textAlign: "center",
          marginTop: "140px",
          marginBottom: "70px",
        }}
      >
        All Our Drones{" "}
      </h1>
      <Container style={{ marginBottom: "80px" }}>
        <Grid container gap={6}>
          { alldata.length===0?<>
            <Skeleton variant="rectangular" width={210} height={60} />
          </>: alldata.map((data) => (
            <DronesAll key={data.key} data={data}></DronesAll>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default MoreDrones;
