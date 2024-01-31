import { useSelector } from "react-redux";

const ChatSpace = () => {
  const { currentClickedContactChat } = useSelector((state) => state.user);

  return (
    <div id="Main_chat_field" className="">
      {currentClickedContactChat != null &&
      currentClickedContactChat.messages != null
        ? [...currentClickedContactChat.messages]
            .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))
            .map((message) => {
              // Ensure a unique key for each dynamically generated component
              const messageKey = `${message.transactionType}_${message._id}`;

              if (
                message.transactionType === "sent" &&
                message.messagesType === "text"
              ) {
                return (
                  <div
                    key={messageKey}
                    className="message_container sender_side"
                  >
                    <div id="sentMessage" className="">
                      <h2>{message.content}</h2>
                      <span>
                        {new Date(message.timestamp).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 15"
                        width="17"
                        height="15"
                        aria-label="read"
                        className="chat__msg-status-icon chat__msg-status-icon--blue"
                      >
                        <path
                          fill="currentColor"
                          d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                );
              } else if (
                message.transactionType === "sent" &&
                message.messagesType === "img"
              ) {
                return (
                  <div
                    key={messageKey}
                    className="message_container sender_side"
                  >
                    <div id="sentImg">
                      <img src={message.src} alt="img" />
                      <span>
                        <h4>{message.caption}</h4>
                        <p>
                          {new Date(message.timestamp).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </span>
                    </div>
                  </div>
                );
              } else if (message.transactionType === "received") {
                return (
                  <div
                    key={messageKey}
                    className="message_container reciever_side"
                  >
                    <div id="recievedMessage" className="">
                      <h2>{message.content}</h2>
                      <span>
                        {new Date(message.timestamp).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                  </div>
                );
              }

              // It's good practice to provide a default return
              return null;
            })
        : null}
    </div>
  );
};

export default ChatSpace;
