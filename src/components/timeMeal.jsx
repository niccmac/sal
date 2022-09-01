import { useState } from "react";
import { ActionIcon, Collapse } from "@mantine/core";
import { IconDogBowl, IconTrashX } from "@tabler/icons";

const MealTime = (item) => {
  const [opened, setOpened] = useState(false);
  const { text, time } = item.item;
  let localTime = new Date(time.timestampValue);
  const displayTime = localTime.toString().substring(16, 21);

  const handleTrashClick = (e) => {
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
