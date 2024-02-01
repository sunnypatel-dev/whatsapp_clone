import React from "react";
import ChatAreaHead from "./ChatAreaHead";
import ChatSpace from "./ChatSpace";
import InputSection from "./InputSection";

const ChatAreaMain = () => {
  return (
    <div id="column-2">
      <ChatAreaHead />
      <ChatSpace />
      <InputSection />
    </div>
  );
};

export default ChatAreaMain;
