import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentClickedContactChat,
  signInUserTotalContactsData,
  setMateFound,
} from "../../../redux/user/userSlice";

const ContactsList = () => {
  const dispatch = useDispatch();

  const { currentUserTotalContactsData, searchedUsersInfo } = useSelector(
    (state) => state.user
  );

  const handleProfileChat = (chat) => {
    dispatch(setCurrentClickedContactChat(chat));
    console.log(chat);
  };

  const handleSearchedUser = (user) => {
    dispatch(setMateFound(true));

    const isNewObject = !currentUserTotalContactsData.some(
      (item) => item.user.email === user.email
    );

    dispatch(setCurrentClickedContactChat({ user: user, messages: null }));

    if (isNewObject) {
      dispatch(
        signInUserTotalContactsData([
          ...currentUserTotalContactsData,
          { user: user, messages: null },
        ])
      );
    }

    setTimeout(() => {
      dispatch(setMateFound(false));
    }, 0);
  };

  return (
    <div id="contacts-list-container" i>
      <div id="actual-list">
        {searchedUsersInfo &&
          searchedUsersInfo.map((user, index) => {
            return (
              <ul onClick={() => handleSearchedUser(user)} key={index}>
                <li>
                  <span>
                    <img src={user.profilePicture} alt={user.username} />
                  </span>
                </li>
                <li>
                  <h2>{user.username}</h2>
                  {/* <h4>good</h4> */}
                </li>
              </ul>
            );
          })}

        {currentUserTotalContactsData &&
          currentUserTotalContactsData.map((chat, index) => {
            const sortedMessages = chat.messages
              ? [...chat.messages].sort(
                  (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
                )
              : [];

            return (
              <ul onClick={() => handleProfileChat(chat)} key={index}>
                <li>
                  <span className="">
                    <img
                      src={chat.user.profilePicture}
                      alt={chat.user.username}
                    />
                  </span>
                </li>
                <li id="middle-object">
                  <span id="title-n-time">
                    <h2>{chat.user.username}</h2>

                    {sortedMessages.length > 0 ? (
                      <>
                        <h4 className="text-xs font-semibold">
                          {new Date(
                            sortedMessages[0].timestamp
                          ).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </h4>
                      </>
                    ) : (
                      <p>empty</p>
                    )}
                  </span>
                  <span id="last-chat-n-notification">
                    {sortedMessages.length > 0 ? (
                      <>
                        <h3>{sortedMessages[0].content}</h3>
                      </>
                    ) : (
                      <p>No messages available</p>
                    )}
                    <div id="notificatoin-n-hoverdown">
                      <svg
                        viewBox="0 0 19 20"
                        height="20"
                        width="19"
                        preserveAspectRatio="xMidYMid meet"
                        class=""
                        version="1.1"
                        x="0px"
                        y="0px"
                      >
                        <use xlinkHref="/sprite.svg#down-icon" />
                      </svg>
                    </div>
                  </span>
                </li>
              </ul>
            );
          })}
      </div>
    </div>
  );
};

export default ContactsList;
