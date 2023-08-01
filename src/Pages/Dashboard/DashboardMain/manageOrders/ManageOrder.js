import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import Swal from "sweetalert2";

const ManageOrder = () => {
  const [order, setOrder] = React.useState([]);
  const [update, setUpdate] = React.useState(null);
  React.useEffect(() => {
    fetch("https://niche-server-drone.vercel.app/purchase")
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [update]);
  const handleUpdate = (id) => {
    console.log(id);
    fetch(
      `https://niche-server-drone.vercel.app/purchase/${id}`,
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(order),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.matchedCount > 0) {
          Swal.fire("sucess", "shipped succesfull", "sucess");
          setUpdate(true);
        } else {
          setUpdate(false);
        }
      });
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>name</TableCell>
            <TableCell align="right">address</TableCell>
            <TableCell align="right">status</TableCell>
            <TableCell align="right">update</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {order.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.email}
              </TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">
                <Button
                  onClick={() => handleUpdate(row._id)}
                  variant="contained"
                >
                  Update
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ManageOrder;
