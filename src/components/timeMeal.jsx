import { useState } from "react";
import { ActionIcon, Collapse } from "@mantine/core";
import { IconClock } from "@tabler/icons";

const TimeDisplay = (time) => {
  const displayTime = time.time.toString().substring(11, 16);
  const [opened, setOpened] = useState(false);

  return (
    <>
      <ActionIcon>
        <IconClock onClick={() => setOpened((o) => !o)} />
      </ActionIcon>

      <Collapse in={opened}>{displayTime}</Collapse>
    </>
  );
};
export default TimeDisplay;
