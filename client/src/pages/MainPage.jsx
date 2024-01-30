import React from "react";
import GreenWrapper from "../components/MainPage/GreenWrapper";
import SidebarMain from "../components/MainPage/Sidebar/SidebarMain";
import ChatAreaMain from "../components/MainPage/ChatArea/ChatAreaMain";

const MainPage = () => {
  return (
    <>
      <GreenWrapper />
      <div id="chatwindow" className="">
        <div id="chat-cols">
          <SidebarMain />
          <ChatAreaMain />
        </div>
      </div>
    </>
  );
};

export default MainPage;
