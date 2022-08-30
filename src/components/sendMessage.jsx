import { TextInput, ActionIcon, useMantineTheme } from "@mantine/core";
import { IconArrowRight, IconMessageCircle2 } from "@tabler/icons";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { auth, db } from "../firebase";

export function SendMessage() {
  const [input, setInput] = useState("");
  const handleSendMessage = async (e) => {
    const { displayName, uid } = auth.currentUser;
    await addDoc(collection(db, "Messages"), {
      name: displayName,
      text: input,
      time: serverTimestamp(),
      uid
    });
    setInput("");
  };

  const handleInputChange = (e) => {
    if (e.key === "Enter") {
      console.log("enter press here! ");
    }
    if (e.target.value !== "" || e.target.value !== " ") {
      setInput(e.target.value);
    }
  };
  return (
    <TextInput
      value={input}
      onChange={(e) => handleInputChange(e)}
      icon={<IconMessageCircle2 size={18} stroke={1.5} />}
      radius="xl"
      size="md"
      rightSection={
        <ActionIcon size={32} radius="xl" variant="filled">
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
