import { useState } from "react";
import { ActionIcon, Collapse } from "@mantine/core";
import { IconDogBowl, IconTrashX } from "@tabler/icons";
import { getDatabase } from "firebase/database";
import { collection, doc } from "firebase/firestore";
import { db } from "../firebase";

const MealTime = (item) => {
  console.log("...", item);
  const [opened, setOpened] = useState(false);
  const { text, time } = item.item;
  let localTime = new Date(time.timestampValue);
  const displayTime = localTime.toString().substring(16, 21);

  const handleTrashClick = async (e) => {
    const database = getDatabase();
    // TODO update doc when delete button is clicked
    await doc(collection(db, `Eating`), {
      active: false
    });
    // await database
    //   .collection("Eating")
    //   .doc(item.itemKey)
    //   .update({ active: false })
    //   .then((_) => console.info("Success"))
    //   .catch((error) => {
    //     console.error(error);
    //   });
    // set(ref(database, "Eating" + item.itemKey), {
    //   text: text.stringValue,
    //   time: time.timestampValue,
    //   active: false
    // })
    // .then(() => {
    //   console.log("Updated");
    // })
    // .catch((e) => {
    //   console.log("Not Updated", e);
    // });
    console.log("Trash Clicked");
  };

  return (
    <>
      <ActionIcon>
        <IconDogBowl onClick={() => setOpened((o) => !o)} />
      </ActionIcon>

      <Collapse in={opened}>
        {text.stringValue} : {displayTime}
        <IconTrashX onClick={() => handleTrashClick()} />
      </Collapse>
    </>
  );
};
export default MealTime;
