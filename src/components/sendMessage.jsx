import { TextInput, ActionIcon, useMantineTheme } from "@mantine/core";
import { IconArrowRight, IconMessageCircle2 } from "@tabler/icons";
import { useState } from "react";

export function SendMessage() {
  const [input, setInput] = useState("");
  // const theme = useMantineTheme();
  const handleSendMessage = () => {
    console.log("clicked");
  };
  return (
    <TextInput
      value={input}
      onChange={(e) => setInput(e.target.value)}
      icon={<IconMessageCircle2 size={18} stroke={1.5} />}
      radius="xl"
      size="md"
      rightSection={
        <ActionIcon
          size={32}
          radius="xl"
          // color={theme.primaryColor}

          variant="filled"
        >
          <IconArrowRight
            size={18}
            stroke={1.5}
            onClick={() => handleSendMessage()}
          />
        </ActionIcon>
      }
      placeholder="Send a message"
      rightSectionWidth={42}
    />
  );
}

// const SendMessage = () => {
//   return (
//     <>
//       <div>Send Message</div>
//     </>
//   );
// };

export default SendMessage;
