import { Avatar, Container, Text, List } from "@mantine/core";

import React from "react";
import { db, auth } from "../firebase";
import { UserAuth } from "../providers/GoogleAuthProvider";

const ChatMessage = (props) => {
  const { user } = UserAuth();
  const { text, name, id, photo } = props.message;
  if (user.displayName !== name) {
    console.log(props.message);
  }
  return (
    <div className="chat-single" key={id} display="flex">
      {user.displayName === name ? (
        <Container className="chat-name-user" radius={100}>
          <List.Item
            icon={<Avatar src={user.photoURL} alt={user.displayName} />}
          >
            <Text size="xs">{text}</Text>
          </List.Item>
        </Container>
      ) : (
        <Container className="chat-name-other" radius={100}>
          <List.Item icon={<Avatar src={photo} alt={user.displayName} />}>
            <Text size="xs" color="red">
              {text}
            </Text>
          </List.Item>
        </Container>
      )}
    </div>
  );
};

export default ChatMessage;
