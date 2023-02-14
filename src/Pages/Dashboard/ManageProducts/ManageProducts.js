import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

const ManageProducts = () => {
    const [allProducts,setAllProducts]=React.useState([])
    React.useEffect(()=>{
        fetch("https://niche-website-server-tasfiq97.vercel.app/products")
        .then(res=>res.json())
        .then(data=>setAllProducts(data))

    },[])

    const handleDelete=(id)=>{
        const proceed=window.confirm("are you sure you want to delete")
        if(proceed){
 fetch(`https://niche-website-server-tasfiq97.vercel.app/products/${id}`,{
     method:"DELETE",

 })
 .then(res=>res.json())
 .then(data=>{
     if(data.deletedCount){
        alert("product remove successfully");
        const remaining= allProducts.filter(purchase=>purchase._id !=id)
        setAllProducts(remaining);
     }
 });
}
    }
    return (
        <TableContainer component={Paper}>
            <h1>Mange All products</h1>
        <Table sx={{ minWidth: 200 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Drones</TableCell>
              <TableCell align="right">price</TableCell>
              <TableCell align="right">Status</TableCell>
             
            </TableRow>
          </TableHead>
          <TableBody>
            {allProducts.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.drone}
                </TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right"><Button onClick={()=>handleDelete(row._id)} variant="contained">Delete</Button></TableCell>
               
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
};

export default ManageProducts;