import React from "react";
import { useEffect, useState } from "react";
import Contacts from "../../../item";
import { useSelector } from "react-redux";
import axios from "axios";

const SidebarHead = () => {
  const { currentUser } = useSelector((state) => state.user);

  const { currentUserChat } = useSelector((state) => state.user);

  const [users, setUsers] = useState([]);
  const [currentContact, setCurrentContact] = useState([]);

  useEffect(() => {
    setUsers(Contacts.users);
    // console.log(currentUser);
  }, []);

  const [currentUserMessage, setCurrentUserMessage] = useState([]);

  const handleCurrentProfile = (user) => {
    setCurrentContact(user);
  };

  const handleCurrentProfile_ = (message) => {
    setCurrentUserMessage(message);
  };

  // console.log(currentUserMessage);

  const [messageInput, setMessageInput] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevents the default behavior of the Enter key (e.g., new line in a textarea)

      // Add your Axios POST request here
      const senderEmail = currentUser.email;
      if (currentUserMessage.user.email) {
        const receiverEmail = currentUserMessage.user.email; // Replace with actual receiver email
      } // Replace with actual sender email

      axios
        .post("http://localhost:8000/api/chat/send/messages", {
          senderEmail,
          receiverEmail,
          messageType: "text", // Replace with the actual message type
          content: messageInput,
        })
        .then((response) => {
          // Handle the response as needed
          console.log("Message sent successfully:", response.data);
        })
        .catch((error) => {
          // Handle errors
          console.error("Error sending message:", error);
        });

      // Clear the input field after sending the message
      setMessageInput("");
    }
  };

  return (
    <div id="user_options">
      <ul className="default-user">
        {currentUser ? (
          <li className="flex items-center">
            {" "}
            <img
              src={currentUser.profilePicture}
              alt="img"
              height="40"
              width="40"
              style={{ borderRadius: "100%" }}
            />
            {currentUser.username}
          </li>
        ) : (
          <li>
            <svg
              viewBox="0 0 212 212"
              height="40"
              width="40"
              preserveAspectRatio="xMidYMid meet"
              class="ln8gz9je ppled2lx"
              version="1.1"
              x="0px"
              y="0px"
              enable-background="new 0 0 212 212"
            >
              <use xlinkHref="/sprite.svg#default-user" />
            </svg>
          </li>
        )}
      </ul>
      <ul className="menu_icons">
        <li>
          <svg
            viewBox="0 0 24 24"
            height="24"
            width="24"
            preserveAspectRatio="xMidYMid meet"
            class=""
            fill="none"
          >
            <use xlinkHref="/sprite.svg#community-icon" />
          </svg>
        </li>
        <li>
          <svg
            viewBox="0 0 24 24"
            height="24"
            width="24"
            preserveAspectRatio="xMidYMid meet"
            class=""
            fill="none"
          >
            <use xlinkHref="/sprite.svg#status-icon" />
          </svg>
        </li>
        <li>
          <svg
            viewBox="0 0 24 24"
            height="24"
            width="24"
            preserveAspectRatio="xMidYMid meet"
            class=""
            fill="none"
          >
            <use xlinkHref="/sprite.svg#newsletter-icon" />
          </svg>
        </li>
        <li>
          <svg
            viewBox="0 0 24 24"
            height="24"
            width="24"
            preserveAspectRatio="xMidYMid meet"
            class=""
            fill="none"
          >
            <use xlinkHref="/sprite.svg#newchat-outline-icon" />
          </svg>
        </li>
        <li>
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
            <use xlinkHref="/sprite.svg#menu-icon" />
          </svg>
        </li>
      </ul>
    </div>
  );
};

export default SidebarHead;
