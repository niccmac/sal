import { IconDroplet, IconPoo } from "@tabler/icons";
import { TimeInput } from "@mantine/dates";
import { IconClock } from "@tabler/icons";
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
const Toilet = () => {
  const [pee, setPee] = useState();
  const [poo, setPoo] = useState();
  const brown = "#A52A2A";

  const handlePee = () => {
    const q = query(collection(db, "Pee"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      console.log(querySnapshot);
      setPee("changed");
      console.log("changed");
    });
    return () => unsubscribe();
  };
  const handlePoo = () => {
    console.log("in handler");
    const q = query(collection(db, "Poo"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      console.log(querySnapshot);
      setPee("changed");
      console.log("changed");
    });
    return () => unsubscribe();
  };

  return (
    <>
      <TimeInput
        label="Pick time"
        placeholder="Pick time"
        icon={<IconClock size={16} />}
        defaultValue={new Date()}
      />
      <Button
        color="yellow"
        radius="lg"
        size="md"
        compact
        leftIcon={<IconDroplet size={14} />}
        onClick={() => handlePee()}
      >
        Pee
      </Button>
      <TimeInput
        label="Pick time"
        placeholder="Pick time"
        icon={<IconClock size={16} />}
        defaultValue={new Date()}
      />
      <Button
        color="brown"
        radius="lg"
        size="md"
        compact
        leftIcon={<IconPoo size={14} />}
        onClick={() => handlePoo()}
      >
        Poo
      </Button>
    </>
  );
};
export default Toilet;
