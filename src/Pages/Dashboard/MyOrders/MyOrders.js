
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../Hooks/useAuth';
import { Button } from '@mui/material';

const MyOrders = () => {
    const {user}=useAuth()
    const [purchase,setPurchase]=React.useState([])
    React.useEffect(()=>{
        fetch(`https://react-drone-shop-server-node-mongo.vercel.app/allPurchase?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setPurchase(data));

    },[user])
    const handleDelete=(id)=>{
      const proceed=window.confirm("are you sure you want to delete")
      if(proceed){
        fetch(`https://react-drone-shop-server-node-mongo.vercel.app/allPurchase/${id}`,{
          method:'DELETE',
   
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.deletedCount){
            alert("product remove successfully");
            const remaining= purchase.filter(purchase=>purchase._id !=id)
            setPurchase(remaining);
          }
        })
      }
     
    }
    return (
        <TableContainer component={Paper}>
           <h1>You have ordered {purchase.length} products</h1>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
         
          <TableHead>
            <TableRow>
              <TableCell>Your email</TableCell>
              <TableCell align="right">Product name</TableCell>
              <TableCell align="right">Price</TableCell>
           
            </TableRow>
          </TableHead>
          <TableBody>
            {purchase.map((row) => (
              <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.email}
                </TableCell>
                <TableCell align="right">{row.product}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="left">{row.price}</TableCell>
                <TableCell align="left"><Button onClick={()=>handleDelete(row._id)} variant="contained">delete</Button></TableCell>
               
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
};

export default MyOrders;