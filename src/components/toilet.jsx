import { Button } from "@mantine/core";
import { IconDroplet, IconPoo } from "@tabler/icons";
const Toilet = () => {
  return (
    <>
      <Button
        color="yellow"
        radius="lg"
        size="md"
        compact
        leftIcon={<IconDroplet size={14} />}
      >
        Pee
      </Button>
      <Button
        color="#A52A2A"
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
