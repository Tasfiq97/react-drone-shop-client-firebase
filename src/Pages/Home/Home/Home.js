import React from 'react';
import Navbar from '../../Shared/Navbar';
import Banner from '../Banner/Banner';
import DroneInfo from '../DroneInfo/DroneInfo';
import Footer from '../Footer/Footer';
import Purchase from '../Purchase/Purchase';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <DroneInfo></DroneInfo>
            <Purchase></Purchase>
            <Review></Review>
            
        </div>
    );
};

export default Home;