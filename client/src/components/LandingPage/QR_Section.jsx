import React from "react";

const QR_Section = () => {
  return (
    <div className="flex justify-between gap-4 pt-4">
      <div className=" p-4">
        <h1
          style={{ fontSize: "1.7rem" }}
          className="text-gray-500 font-light mb-11"
        >
          Use WhatsApp on your computer
        </h1>
        <div className="pl-8">
          <ol type="A" className="list-decimal text-gray-600 text-lg">
            <li className="mb-4">Open WhatsApp on your phone</li>
            <li className="mb-4">
              Tap&nbsp;
              <b className="font-medium gap-1 inline-flex">
                Menu
                <svg height="24px" viewBox="0 0 24 24" width="24px">
                  <use xlinkHref="sprite.svg#landing-menu" />
                </svg>
                &nbsp;
              </b>
              on Android, or&nbsp;
              <b className="font-medium gap-1 inline-flex">
                Settings&nbsp;
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <use xlinkHref="sprite.svg#landing-setting" />
                </svg>
              </b>{" "}
              on iPhone
            </li>
            <li className="mb-4">
              Tap<b className="font-medium">Linked devices</b> and then{" "}
              <b className="font-medium">Link a device</b>
            </li>
            <li className="mb-4">
              Point your phone at this screen to capture the QR code
            </li>
          </ol>
        </div>
      </div>
      <div id="qr_" className="p-4">
        <img src="./qr.jfif" />
      </div>
    </div>
  );
};

export default QR_Section;
