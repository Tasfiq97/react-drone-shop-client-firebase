import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import useAuth from "../../../Hooks/useAuth";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const OpenModal = ({
  open,
  handleClose,
  handleOpen,
  selectedProduct,
  setAlert,
}) => {
  const { user } = useAuth();

  const initialInfo = { email: user.email };
  const [order, setOrder] = useState(initialInfo);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    let newField = { ...order };
    newField[field] = value;
    setOrder(newField);
    // console.log(newField);
  };

  const handleForm = (e) => {
    e.preventDefault();
    const ordersInfo = {
      ...order,
      product: selectedProduct.drone,
      price: selectedProduct.price,
      status: "pending",
    };

    fetch("https://niche-server-drone-tasfiq97.vercel.app/purchase", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(ordersInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setAlert(true);
          handleClose();
        }
      });
    // console.log(ordersInfo);
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2>{selectedProduct.drone}</h2>
          <form onSubmit={handleForm}>
            <TextField
              sx={{ width: "75%", m: 2 }}
              onChange={handleOnBlur}
              id="standard-basic"
              label="Name"
              name="name"
              defaultValue={user?.displayName}
              required
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 2 }}
              onChange={handleOnBlur}
              id="standard-basic"
              label="Email"
              name="email"
              defaultValue={user?.email}
              required
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 2 }}
              onChange={handleOnBlur}
              id="standard-basic"
              label="Address"
              name="address"
              required
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 2 }}
              onChange={handleOnBlur}
              id="standard-basic"
              label="Number"
              name="number"
              required
              variant="standard"
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ backgroundColor: "black" }}
            >
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default OpenModal;
