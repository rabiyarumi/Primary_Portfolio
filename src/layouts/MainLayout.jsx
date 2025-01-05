import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen max-w-screen-xl mx-auto'>
            <Navbar/>
            <div className='flex-grow'> 
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;