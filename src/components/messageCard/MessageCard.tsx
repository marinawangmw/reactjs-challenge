import React from "react";
import "./MessageCard.css";

interface MessageCardProps {
	children: React.ReactNode;
}

const MessageCard: React.FC<MessageCardProps> = ({ children }) => {
	return <div className="messageCard">{children}</div>;
};

export default MessageCard;
