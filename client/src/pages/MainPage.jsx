import React from "react";
import GreenWrapper from "../components/MainPage/GreenWrapper";
import Index from "../components/MainPage/Index";

const MainPage = () => {
  return (
    <>
      <GreenWrapper />
      <div id="chat-window" className="">
        <div id="window-row">
          <Index />
        </div>
      </div>
    </>
  );
};

export default MainPage;
