import React from 'react';
import MyOrders from '../MyOrders/MyOrders';

const DashboardMain = () => {
    return (
        <div style={{height:"100vh",textAlign:"center",marginBottom:"90px"}}>
            <h1> You can check your orders here </h1>
            <MyOrders></MyOrders>
        </div>
    );
};

export default DashboardMain;