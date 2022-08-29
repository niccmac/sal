import { IconDroplet, IconPoo } from "@tabler/icons";
import React, { useState, useEffect } from "react";
import { Button } from "@mantine/core";
import { db } from "../firebase";

import { query, onSnapshot, addDoc, collection } from "firebase/firestore";
import TimeDisplay from "./timeDisplay";

const Toilet = () => {
  const [pee, setPee] = useState([]);
  const [poo, setPoo] = useState();

  const handlePee = async () => {
    await addDoc(collection(db, "Pee"), {
      time: new Date()
    });
  };

  const handlePoo = async () => {
    await addDoc(collection(db, "Poo"), {
      time: new Date()
    });
  };

  useEffect(() => {
    const q = query(collection(db, "Pee"));
    let times = [];
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((time) => {
        const add =
          time._document.data.value.mapValue.fields.time.timestampValue;
        times.push(add);
      });
      setPee(times);
    });
    return () => unsubscribe();
  }, [pee]);

  useEffect(() => {
    const q = query(collection(db, "Poo"));
    let times = [];
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((time) => {
        const add =
          time._document.data.value.mapValue.fields.time.timestampValue;
        times.push(add);
      });
      setPoo(times);
    });
    return () => unsubscribe();
  }, [poo]);

  return (
    <>
      <main>
        {pee && pee.map((item) => <TimeDisplay key={item} time={item} />)}
      </main>
      <Button
        color="yellow"
        radius="lg"
        size="md"
        compact
        onClick={() => handlePee()}
      >
        {<IconDroplet size={14} />}
      </Button>
      {/* 
      <Button
        color="yellow"
        radius="lg"
        size="md"
        compact
        onClick={() => clearPee()}
      >
        Clear All
      </Button> */}
      <main>
        {poo && poo.map((item) => <TimeDisplay key={item} time={item} />)}
      </main>
      <Button
        color="brown"
        radius="lg"
        size="md"
        compact
        onClick={() => handlePoo()}
      >
        <IconPoo size={14} />
      </Button>
      {/* <Button
        color="brown"
        radius="lg"
        size="md"
        compact
        onClick={() => clearPoo()}
      >
        Clear All
      </Button> */}
    </>
  );
};
export default Toilet;
