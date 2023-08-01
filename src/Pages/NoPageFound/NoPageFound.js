import React from 'react';
import Navbar from '../Shared/Navbar';

const NoPageFound = () => {
    return (
        <div style={{height:"100vh"}}>
            <Navbar></Navbar>
            <h2 style={{textAlign:"center"}}>404 NO PAGE FOUND</h2>
        </div>
    );
};

export default NoPageFound;