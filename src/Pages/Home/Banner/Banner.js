import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import banner from "../../../Images/H520-drone.png";

const Banner = () => {
  return (
    <Container style={{ textAlign: "center", marginTop: "180px" }}>
      <Box sx={{ display: "flex", flexDirection: "column", marginTop: "80px" }}>
        <Typography variant="h3" component="div">
          There are Many Ways to Use
        </Typography>
        <Typography variant="h3" component="div" sx={{ color: "gray" }}>
          Our Great Drones
        </Typography>
        <div>
          <img style={{ width: "80%" }} src={banner} alt="" />
        </div>
      </Box>
    </Container>
  );
};

export default Banner;
