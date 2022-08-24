import React, { useState, useEffect, useRef } from "react";
import { Drawer, Button, Group } from "@mantine/core";
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
          <main>
            {messages &&
              messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
          </main>
          <SendMessage />
          <span ref={scroll}></span>
        </>
      </Drawer>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Chat</Button>
      </Group>
    </>
  );
};

export default Chat;
