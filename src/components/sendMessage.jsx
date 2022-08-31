import { TextInput, ActionIcon, useMantineTheme } from "@mantine/core";
import { IconArrowRight, IconMessageCircle2 } from "@tabler/icons";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { auth, db } from "../firebase";
import { useEffect } from "react";

export function SendMessage() {
  const [input, setInput] = useState("");
  const handleSendMessage = async () => {
    if (input !== "" && input !== " ") {
      const { displayName, uid, photoURL } = auth.currentUser;
      await addDoc(collection(db, "Messages"), {
        name: displayName,
        photo: photoURL,
        text: input,
        time: serverTimestamp(),
        uid
      });
      setInput("");
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    const keyDownHandler = (e) => {
      if (input !== "" && input !== " ") {
        if (e.key === "Enter") {
          e.preventDefault();
          handleSendMessage();
        }
      }
    };
    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

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
