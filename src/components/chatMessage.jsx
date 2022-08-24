import React from "react";

const ChatMessage = (props) => {
  const { id, name, text, time } = props;
  console.log(name);
  return (
    <div className="chat-single">
      message
      <p className="chat-name">{name}</p>
      <p className="chat-message">
        {text} : {time}
      </p>
    </div>
  );
};

export default ChatMessage;
