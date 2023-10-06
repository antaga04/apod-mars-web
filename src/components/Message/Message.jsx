import React from 'react';
import './Message.css';

const Message = ({ msg }) => {
  return <div className="message flex-center"><p>{msg}</p></div>;
};

export default Message;
