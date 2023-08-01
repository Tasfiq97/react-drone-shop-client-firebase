import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import DronesAll from "../Dronesall/DronesAll";
import Footer from "../Home/Footer/Footer";
import Navbar from "../Shared/Navbar";

const MoreDrones = () => {
  const [alldata, setAllData] = useState([]);

  useEffect(() => {
    fetch("https://niche-server-drone-tasfiq97.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setAllData(data));
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
          {alldata.map((data) => (
            <DronesAll key={data.key} data={data}></DronesAll>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default MoreDrones;
