import React from "react";

const SearchBar = () => {
  return (
    <div id="search_contacts">
      <div id="input_container">
        <span id="back_icon" data-icon="back" class="">
          <svg
            viewBox="0 0 24 24"
            height="24"
            width="24"
            preserveAspectRatio="xMidYMid meet"
            class=""
            version="1.1"
            x="0px"
            y="0px"
            enable-background="new 0 0 24 24"
          >
            <use xlinkHref="/sprite.svg#back-icon" />
          </svg>
        </span>
        <span id="search_icon" data-icon="search" class="">
          <svg
            viewBox="0 0 24 24"
            height="24"
            width="24"
            preserveAspectRatio="xMidYMid meet"
            class=""
            version="1.1"
            x="0px"
            y="0px"
            enable-background="new 0 0 24 24"
          >
            <use xlinkHref="/sprite.svg#search-icon" />
          </svg>
        </span>

        <input
          className="font-normal text-sm"
          type="text"
          placeholder="Search or start a new chat"
        ></input>
        <span id="close_icon" data-icon="x-alt" class="">
          <svg
            viewBox="0 0 24 24"
            height="24"
            width="24"
            preserveAspectRatio="xMidYMid meet"
            class=""
            version="1.1"
            x="0px"
            y="0px"
            enable-background="new 0 0 24 24"
          >
            <use xlinkHref="/sprite.svg#x-icon" />
          </svg>
        </span>
      </div>
      <span data-icon="filter" className="cursor-pointer">
        <svg
          viewBox="0 0 24 24"
          height="20"
          width="20"
          preserveAspectRatio="xMidYMid meet"
          class=""
          version="1.1"
          x="0px"
          y="0px"
          enable-background="new 0 0 24 24"
        >
          <use xlinkHref="/sprite.svg#filter-icon" />
        </svg>
      </span>
    </div>
  );
};

export default SearchBar;
