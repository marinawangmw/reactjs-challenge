import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Body from '../../components/body/Body';
import Footer from '../../components/footer/Footer';
import './Homepage.css';

const Homepage = () => {
    return (
        <div>
            <div className="homepage__body">
                <Sidebar />
                <Body />
            </div>
            
                <Footer />
        </div>
    );
};

export default Homepage;