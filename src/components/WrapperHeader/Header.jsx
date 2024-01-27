import React from "react";
import ChatWindow from "../ChatWindow/ChatWindow";

const Header = () => {
  return (
    <>
      <div id="header-before">
        <div className="chat-window-wrapper"></div>
      </div>
      <ChatWindow />
    </>
  );
};

export default Header;
