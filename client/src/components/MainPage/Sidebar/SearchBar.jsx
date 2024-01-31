import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { searchedUsersInfo } from "../../../redux/user/userSlice";
import { useEffect } from "react";

const SearchBar = () => {
  const dispatch = useDispatch();

  const { mateFound } = useSelector((state) => state.user);

  // store will not store search entity when page is refreshed

  useEffect(() => {
    dispatch(searchedUsersInfo(null));
  }, []);

  // when you search and found mate and click on it , all other searches get disappeared

  useEffect(() => {
    if (mateFound === true) {
      dispatch(searchedUsersInfo(null));
      document.getElementById("searchMate").value = "";
    }
  });

  const handleSearch = async (searchTerm) => {
    if (searchTerm == "") {
      dispatch(searchedUsersInfo(null));
    }

    if (searchTerm.trim() !== "") {
      const url = `http://localhost:8000/api/user/search-mate?searchTerm=${encodeURIComponent(
        searchTerm.trim()
      )}`;
      // console.log(url);

      try {
        const response = await axios.get(url);

        dispatch(searchedUsersInfo(response.data));
      } catch (error) {
        console.error("Error searching users:", error);
      }
    } else {
      // Handle the case when the search term is empty
    }
  };

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
          onChange={(e) => handleSearch(e.target.value)}
          className="font-normal text-sm"
          type="text"
          id="searchMate"
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
