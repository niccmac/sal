import { Container } from "@mantine/core";
import React from "react";

const ChatMessage = (props) => {
  const { text, name, id } = props.message;

  return (
    <div className="chat-single" key={id}>
      <Container size="sm">{name}</Container>
      <p className="chat-name">{name}</p>
      <p className="chat-message">{text}</p>
    </div>
  );
};

export default ChatMessage;
