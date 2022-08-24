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
  const [loading, setLoading] = useState(false);
  const scroll = useRef();
  // const ref = app.firestore.collection("Messages");
  // const getMesssages = () => {
  //   setLoading(true);
  //   ref.onSnapshot((querySnapshot) => {
  //     const mess = [];
  //     querySnapshot.forEach((doc) => {
  //       mess.push(doc.data());
  //     });
  //     setMessages(mess);
  //     setLoading(false);
  //   });
  // };

  // useEffect(() => {
  //   console.log("in use effect");
  //   getMesssages();
  //   // eslint-disable-next-line
  // }, []);

  const q = query(collection(db, "Messages"), orderBy("timestamp"));
  const querySnapshot = getDocs(q)
    .then((data) => {
      console.log("...", data.query);
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
  function onSnapshot(q, querySnapshot) {
    let messages = [];
    querySnapshot.forEach((doc) => {
      messages.push({ ...doc.data(), id: doc.id });
    });
    setMessages(messages);
  }
  // return () => onSnapshot();

  return (
    <>
      <main>
        {messages &&
          messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
      </main>
      <button onClick={() => onSnapshot()}>Messages?</button>
      {/* Send Message Compoenent */}
      {/* <SendMessage scroll={scroll} /> */}
      <span ref={scroll}></span>
    </>
  );
};

export default Chat;
