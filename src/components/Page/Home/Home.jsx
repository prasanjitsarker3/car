import React from 'react';
import Banner from '../../Sheard/Banner';
import About from '../../Sheard/About';
import Service from './Service';
import DateInfo from '../../Sheard/DateInfo';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <DateInfo></DateInfo>
        </div>
    );
};

export default Home;