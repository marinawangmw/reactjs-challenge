import React from 'react';
import './MessageCard.css'

interface MessageCardProps {
    children: React.ReactNode
}

const MessageCard: React.FC<MessageCardProps> = ({ children }) => {
    return (
        <div className='messageCard'>
            <p> {children} </p>
        </div>
    );
};

export default MessageCard;