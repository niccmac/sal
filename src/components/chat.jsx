import React, { useState, useEffect, useRef } from "react";
import { Drawer, Button, Group, Container } from "@mantine/core";
import { db, app } from "../firebase";
// import firebase from "firebase";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  getDocs,
  limit
} from "firebase/firestore";
import ChatMessage from "./chatMessage";
import SendMessage from "./sendMessage";
import { IconMessageCircle2 } from "@tabler/icons";

const Chat = () => {
  const [opened, setOpened] = useState(false);
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const q = query(
      collection(db, "Messages"),
      orderBy("time", "desc"),
      limit(2)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Chat"
        padding="xl"
        size="xl"
        position="right"
        overlayOpacity={0.55}
        overlayBlur={3}
      >
        <>
          <Container className="chat-container">
            <main className="chat-messages">
              {messages &&
                messages.map((message) => (
                  <ChatMessage key={message.id} message={message} />
                ))}
            </main>
            <SendMessage className="chat-send" />
            <span ref={scroll}></span>
          </Container>
        </>
      </Drawer>

      <Group position="center">
        <IconMessageCircle2 onClick={() => setOpened(true)} />
      </Group>
    </>
  );
};

export default Chat;
