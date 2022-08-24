import React, { useState, useEffect, useRef } from "react";
import ChatMessage from "./chatMessage";
// import SendMessage from "./SendMessage";
import { db, app } from "../firebase";
// import firebase from "firebase";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  getDocs
} from "firebase/firestore";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const q = query(collection(db, "Messages"), orderBy("time"));
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
      <main>
        {messages &&
          messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
      </main>
      {/* <button onClick={() => onSnapshot()}>Messages?</button> */}
      {/* Send Message Compoenent */}

      <span ref={scroll}></span>
    </>
  );
};

export default Chat;
