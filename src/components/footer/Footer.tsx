import React from 'react';
import './Footer.css';

const Footer = () => {
    const date = new Date().toLocaleDateString()
    return (
        <div className="footer">
            <div className="footer__name">
                <p>Marina Wang</p>
            </div>
            <div className="footer__date">
                <p>{date}</p>
            </div>
        </div>
    );
};

export default Footer;