import React from 'react';
import './MessageCard.css'

const MessageCard = ({ children }) => {
    return (
        <div className='messageCard'>
            <p> {children} </p>
        </div>
    );
};

export default MessageCard;