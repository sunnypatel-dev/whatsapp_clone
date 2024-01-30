import React from "react";

const MainHeader = () => {
  return (
    <>
      <div className="landing-header flex items-center gap-3 w-2/3 m-auto py-7 px-2">
        <svg width="39" height="39" viewBox="0 0 39 39">
          <use xlinkHref="sprite.svg#whatsapp-icon" />
        </svg>
        <h4 className="text-white font-semibold text-sm ">WHATSAPP WEB</h4>
      </div>
    </>
  );
};

export default MainHeader;
