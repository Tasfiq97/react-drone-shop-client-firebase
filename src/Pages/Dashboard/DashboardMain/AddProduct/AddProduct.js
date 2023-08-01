import { Button, TextField, TextareaAutosize } from "@mui/material";
import React, { useState } from "react";
import Swal from "sweetalert2";

const AddProduct = () => {
  const [addProduct, setAddProduct] = useState({});
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newField = { ...addProduct };
    newField[field] = value;
    setAddProduct(newField);
    console.log(newField);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://niche-server-drone.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("sucess", "product added successfully", "sucess");
          window.location.reload();
        }
      });
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Please Review Our Products</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          style={{ width: "50%" }}
          required
          name="key"
          onChange={handleOnChange}
          sx={{ margin: "20px" }}
          id="outlined-basic"
          label="key"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "50%" }}
          required
          name="drone"
          onChange={handleOnChange}
          sx={{ margin: "20px" }}
          id="outlined-basic"
          label="drone name"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "50%" }}
          required
          name="camera"
          onChange={handleOnChange}
          sx={{ margin: "20px" }}
          id="outlined-basic"
          label="camera"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "50%" }}
          required
          name="flightTime"
          onChange={handleOnChange}
          sx={{ margin: "20px" }}
          id="outlined-basic"
          label="flight time"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "50%" }}
          required
          name="image"
          onChange={handleOnChange}
          sx={{ margin: "20px" }}
          id="outlined-basic"
          label="your Image url"
          variant="outlined"
        />

        <br />
        <TextareaAutosize
          sx={{ margin: "20px" }}
          name="description"
          onChange={handleOnChange}
          aria-label="minimum height"
          minRows={5}
          placeholder="write description"
          style={{ width: "50%" }}
          required
        />
        <br />
        <TextField
          style={{ width: "50%" }}
          sx={{ margin: "20px" }}
          id="outlined-basic"
          type="number"
          name="price"
          onChange={handleOnChange}
          label="price"
          required
          placeholder="price"
          variant="outlined"
        />

        <br />
        <Button
          type="submit"
          sx={{ backgroundColor: "black" }}
          variant="contained"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddProduct;
