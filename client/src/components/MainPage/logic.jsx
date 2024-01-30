import React from "react";
import { useEffect, useState } from "react";
import Contacts from "../../item";
import { useSelector } from "react-redux";
import axios from "axios";

const ChatWindow = () => {
  // const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.user);

  const { currentUserChat } = useSelector((state) => state.user);

  const [users, setUsers] = useState([]);
  const [currentContact, setCurrentContact] = useState([]);

  useEffect(() => {
    setUsers(Contacts.users);
  }, []);

  const [currentUserMessage, setCurrentUserMessage] = useState([]);

  const handleCurrentProfile = (user) => {
    setCurrentContact(user);
  };

  const handleCurrentProfile_ = (message) => {
    setCurrentUserMessage(message);
  };

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

  return <></>;
};

export default ChatWindow;
