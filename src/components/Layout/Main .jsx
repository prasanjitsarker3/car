import React from 'react';
import Header from '../Sheard/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Sheard/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;