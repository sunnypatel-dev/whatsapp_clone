import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { io } from "socket.io-client";
import {
  signInUserTotalContactsData,
  setCurrentClickedContactChat,
} from "../../../redux/user/userSlice";

const InputSection = () => {
  const socket = io("http://localhost:8000");

  const dispatch = useDispatch();

  const {
    currentUser,
    currentClickedContactChat,
    currentUserTotalContactsData,
  } = useSelector((state) => state.user);

  const [messageInput, setMessageInput] = useState("");

  const handleKeyDown = async (event) => {
    if (event.key !== "Enter") {
      return;
    }

    event.preventDefault();

    const senderEmail = currentUser.email;
    const receiverEmail = currentClickedContactChat.user.email;

    if (!receiverEmail) {
      return;
    }

    try {
      // Make the Axios POST request
      const response = await axios.post(
        "http://localhost:8000/api/chat/send/messages",
        {
          senderEmail,
          receiverEmail,
          messageType: "text",
          content: messageInput,
        }
      );

      // Handle the response as needed
      console.log("Message sent successfully:", response.data);

      // Emit a socket event to fetch messages
      socket.emit("fetchMessages", senderEmail);

      // Listen for the server's response
      socket.once("UserDetail", (messagesWithUsers) => {
        console.log(messagesWithUsers);
        // Handle the socket response

        dispatch(signInUserTotalContactsData(messagesWithUsers));

        // Find the entry in messagesWithUsers for the specified receiver email
        const receiverEntry = messagesWithUsers.find(
          (entry) => entry.user.email === receiverEmail
        );

        if (receiverEntry) {
          // Extract user and messages
          const { user, messages } = receiverEntry;

          // Dispatch the user and messages for the specified receiver email
          dispatch(setCurrentClickedContactChat({ user, messages }));
        } else {
          console.error(`No entry found for receiver email: ${receiverEmail}`);
        }
      });

      setMessageInput("");
    } catch (error) {
      // Handle errors
      console.error("Error sending message:", error);
    }
  };

  return (
    <div id="chat-input-box">
      <div id="attach-icon">
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
      </div>
      <div id="smiley">
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
      </div>
      <input
        type="text"
        value={messageInput}
        onChange={(e) => setMessageInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type your message..."
      />
      <div id="mic-msg">
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
        {/* <svg
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
        </svg> */}
      </div>
    </div>
  );
};

export default InputSection;

{
  /* <ul>
        <li id="attach-icon">
          <span data-icon="attach-menu-plus">
            
          </span>
        </li>
        <li>
          <span id="smiley" data-icon="smiley" class="">
           
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
     
    </span>
  </li>
  //  */
}
//       <li id="mic-msg">
//         <span data-icon="ptt" class="">
//
//         </span>
//       </li>
//     </ul> */}
