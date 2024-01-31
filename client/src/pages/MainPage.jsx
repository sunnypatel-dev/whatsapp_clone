import React from "react";
import GreenWrapper from "../components/MainPage/GreenWrapper";
import Index from "../components/MainPage/Index";

const MainPage = () => {
  return (
    <>
      <GreenWrapper />
      <div id="chatwindow" className="">
        <div id="chat-cols">
          <Index />
        </div>
      </div>
    </>
  );
};

export default MainPage;
