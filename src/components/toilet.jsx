import { Button } from "@mantine/core";
import { IconDroplet, IconPoo } from "@tabler/icons";
import { TimeInput } from "@mantine/dates";
import { IconClock } from "@tabler/icons";
import { useState } from "react";
const Toilet = () => {
  const [pee, setPee] = useState();
  const brown = "#A52A2A";
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
      >
        Poo
      </Button>
    </>
  );
};
export default Toilet;
