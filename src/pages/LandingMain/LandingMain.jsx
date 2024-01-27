import React from "react";
import GetTheApp from "./GetTheApp";
import QR_Section from "./QR_Section";
import LinkWithPh from "./LinkWithPh";
import Tutorial from "./Tutorial";

const LandingMain = () => {
  return (
    <div
      id="landing-main"
      className="w-8/12 m-auto bg-white py-10 px-10 rounded-sm mb-32"
    >
      <GetTheApp />

      <QR_Section />

      <hr />

      <LinkWithPh />

      <Tutorial />
    </div>
  );
};

export default LandingMain;
