import "react-chat-elements/dist/main.css";

import { MessageBox } from "react-chat-elements";

export default function ChatMessage() {
  return (
    <>
      <MessageBox
        position="left"
        title="Burhan"
        type="text"
        text="Hi there !"
        date={new Date()}
        replyButton={true}
      />

      <MessageBox
        position="right"
        title="Emre"
        type="meetingLink"
        text="Click to join the meeting"
        date={new Date()}
      />
    </>
  );
}
