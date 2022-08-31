import { useState } from "react";
import { ActionIcon, Collapse } from "@mantine/core";
import { IconDogBowl } from "@tabler/icons";

const MealTime = (item) => {
  const { text, time } = item.item;
  const displayTime = time.timestampValue;
  console.log(time.timestampValue);
  // const mealTime = time.time.toString().substring(11, 16);
  const [opened, setOpened] = useState(false);

  return (
    <>
      <ActionIcon>
        <IconDogBowl onClick={() => setOpened((o) => !o)} />
      </ActionIcon>

      <Collapse in={opened}>{text.stringValue} :</Collapse>
    </>
  );
};
export default MealTime;
