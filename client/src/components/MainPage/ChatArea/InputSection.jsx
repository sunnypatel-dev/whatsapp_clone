import React from "react";
import { useEffect, useState } from "react";
import Contacts from "../../../item";
import { useSelector } from "react-redux";
import axios from "axios";

const InputSection = () => {
  const { currentUser, currentClickedContactChat } = useSelector(
    (state) => state.user
  );

  const [messageInput, setMessageInput] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevents the default behavior of the Enter key (e.g., new line in a textarea)

      // Add your Axios POST request here
      const senderEmail = currentUser.email;
      if (currentClickedContactChat.user.email) {
        const receiverEmail = currentClickedContactChat.user.email; // Replace with actual receiver email
        // Replace with actual sender email

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
    }
  };

  return (
    <div id="Typing_area" className="">
      <ul className="">
        <li>
          <span data-icon="attach-menu-plus" class="">
            <svg
              viewBox="0 0 24 24"
              height="24"
              width="24"
              preserveAspectRatio="xMidYMid meet"
              class=""
              fill="none"
            >
              <use xlinkHref="/sprite.svg#attach-icon" />
            </svg>
          </span>
        </li>
        <li>
          <span id="smiley" data-icon="smiley" class="">
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
              <use xlinkHref="/sprite.svg#smiley-icon" />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Type a message"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </li>

        {/* <li>
    <span data-icon="send" class="">
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
        
      <use xlinkHref="/sprite.svg#send-icon" />
      </svg>
    </span>
  </li>
   */}
        <li>
          <span data-icon="ptt" class="">
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
              <use xlinkHref="/sprite.svg#mic-icon" />
            </svg>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default InputSection;
