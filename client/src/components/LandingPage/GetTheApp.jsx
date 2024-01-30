import React from "react";

const GetTheApp = () => {
  return (
    <aside className="flex gap-3 items-center py-7 px-11 mx-14 border border-slate-300 rounded-md">
      <svg
        viewBox="0 0 76 51"
        height="60"
        preserveAspectRatio="xMidYMid meet"
        class=""
        fill="none"
      >
        <use xlinkHref="sprite.svg#desktop-icon" />
      </svg>

      <div className="flex justify-between w-full ml-2">
        <span className="">
          <h3 className="text-slate-800 text-base">
            Download WhatsApp for Windows
          </h3>
          <p className="text-sm text-slate-500">
            Get calling, screen sharing and a faster experience with the new
            Windows app.
          </p>
        </span>
        <span>
          <button
            id="get_the_app_btn"
            className="font-semibold text-sm outline-none "
          >
            Get the app
          </button>
        </span>
      </div>
    </aside>
  );
};

export default GetTheApp;
