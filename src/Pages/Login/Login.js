import { Box, Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import loginImg from "../../Images/4957136.jpg";
import AdminModal from "./AdminModal";

const Login = () => {
  const { login } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const [loginData, setLoginData] = useState({});
  const handleChange = (e) => {
    console.log(e);
    const field = e.target.name;
    const value = e.target.value;
    const loadNewUser = { ...loginData };
    loadNewUser[field] = value;
    setLoginData(loadNewUser);
    // console.log(loadNewUser);
  };
  const handleSubmit = (e) => {
    console.log(loginData.email, loginData.password);
    login(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };
  return (
    <Grid container spacing={2} sx={{ padding: "60px" }}>
      <Grid item xs={12} md={6}>
        <h1> Please Login </h1>
        <form onSubmit={handleSubmit}>
          <TextField
            onChange={handleChange}
            sx={{ width: "75%" }}
            id="standard-basic"
            label="Email"
            type="email"
            name="email"
            variant="standard"
          />
          <TextField
            onChange={handleChange}
            sx={{ width: "75%" }}
            id="standard-basic"
            label="Password"
            type="password"
            name="password"
            variant="standard"
          />
          <br />
          <Button
            type="submit"
            sx={{ width: "75%", marginTop: "30px", backgroundColor: "black" }}
            variant="contained"
          >
            Login
          </Button>
        </form>
        <Link to="/register" style={{ textDecoration: "none" }}>
          <Button sx={{ width: "75%", marginTop: "30px" }} variant="text">
            New User? please register
          </Button>
        </Link>

        <Box sx={{ textAlign: "center", width: "75%" }}>
          <AdminModal />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <div>
          <img style={{ width: "100%" }} src={loginImg} alt="" />
        </div>
      </Grid>
    </Grid>
  );
};

export default Login;
