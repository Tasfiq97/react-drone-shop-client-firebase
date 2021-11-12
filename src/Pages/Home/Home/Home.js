import React from 'react';
import AppNavbar from '../../Shared/AppNavbar';
import Banner from '../Banner/Banner';
import DroneInfo from '../DroneInfo/DroneInfo';
import Footer from '../Footer/Footer';
import Purchase from '../Purchase/Purchase';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
          
            <Banner></Banner>
            <DroneInfo></DroneInfo>
            <Purchase></Purchase>
            <Review></Review>
            
        </div>
    );
};

export default Home;