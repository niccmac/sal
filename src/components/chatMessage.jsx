import { Avatar, Container, Text, List } from "@mantine/core";

import React from "react";
import { db, auth } from "../firebase";
import { UserAuth } from "../providers/GoogleAuthProvider";

const ChatMessage = (props) => {
  const { user } = UserAuth();
  const { text, name, id, photo } = props.message;

  return (
    <>
      {user.displayName === name ? (
        <div className="chat-single-user" key={id}>
          <Container className="chat-name" radius={100}>
            <List.Item
              icon={<Avatar src={user.photoURL} alt={user.displayName} />}
            >
              <Text size="xs">{text}</Text>
            </List.Item>
          </Container>
        </div>
      ) : (
        <div className="chat-single-other" key={id}>
          <Container className="chat-name" radius={100}>
            <List.Item icon={<Avatar src={photo} alt={user.displayName} />}>
              <Text size="xs" color="red">
                {text}
              </Text>
            </List.Item>
          </Container>
        </div>
      )}
    </>
  );
};

export default ChatMessage;
