import React from "react";
import { useEffect, useState } from "react";
import Contacts from "../../../item";
import { useSelector } from "react-redux";
import axios from "axios";
import SidebarHead from "./SidebarHead";
import SearchBar from "./SearchBar";
import ContactsList from "./ContactsList";

const SidebarMain = ({ newMateFound }) => {
  return (
    <div id="column-1">
      {/* Sidebar Head  */}

      <SidebarHead />

      {/* SEARCH BAR */}

      <SearchBar />

      {/* Contact_list  */}
      <ContactsList />
    </div>
  );
};

export default SidebarMain;
