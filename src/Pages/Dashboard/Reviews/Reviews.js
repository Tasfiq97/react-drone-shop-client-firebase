import { TextField,TextareaAutosize, Button } from '@mui/material';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const Reviews = () => {
    const [addReview,setAddReview]=useState({});
    const {user}=useAuth();
    const history=useHistory()
  
const handleOnChange=(e)=>{
    const field=e.target.name;
    const value=e.target.value;
    const newField={...addReview}
    newField[field]=value;
    setAddReview(newField)
    // console.log(newField)
    
}
const handleSubmit=(e)=>{
    e.preventDefault()
    const ratingNum=parseInt(addReview.rating);
    
    
        const newReview={
            ...addReview,
            ratingNew:ratingNum,
            name:user.displayName
        }
        fetch("https://react-drone-shop-server-node-mongo.vercel.app/review",{
                method:"POST",
                headers:{"content-type":"application/json"},
                body:JSON.stringify(newReview)
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.insertedId){
                    alert("review added successfully");
                    history.push("/")
                }
            })
      

  
   

}
    return (
        <div style={{textAlign:"center"}}>
           <h2>Please Review Our Products</h2>
           <form onSubmit={handleSubmit}>
           <TextField 
           required  
           name="img" 
           onChange={handleOnChange}
           sx={{margin:"20px"}}
           id="outlined-basic" 
           label="your Image url" 
           variant="outlined" />
          
          

           <br />
          <TextareaAutosize
            sx={{margin:"20px"}}
            name="review" 
            onChange={handleOnChange}
  aria-label="minimum height"
  minRows={5}
  placeholder="Write something"
  style={{ width: 200 }}
  required
/>
<br />
           <TextField 
             sx={{margin:"20px"}}
           id="outlined-basic" 
           type="number"
           name="rating" 
           onChange={handleOnChange}
           label="Rating" 
           required
           placeholder="from 1-5"
           variant="outlined" />
           
           <br />
           <Button type="submit" sx={{backgroundColor:"black"}} variant="contained">Submit</Button>
           </form>
        </div>
    );
};

export default Reviews;