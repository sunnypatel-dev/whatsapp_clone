import React from "react";
import { useEffect, useState } from "react";
import Contacts from "../../../item";
import { useDispatch, useSelector } from "react-redux";
import {
  currentClickedContactChat,
  setMateFound,
} from "../../../redux/user/userSlice";
import { signInUserTotalContactsData } from "../../../redux/user/userSlice";

const ContactsList = () => {
  const dispatch = useDispatch();

  const { currentUserTotalContactsData, searchedUsersInfo } = useSelector(
    (state) => state.user
  );

  const handleProfileChat = (chat) => {
    dispatch(currentClickedContactChat(chat));
    console.log(chat);
  };

  const handleSearchedUser = (user) => {
    dispatch(setMateFound(true));

    const isNewObject = !currentUserTotalContactsData.some(
      (item) => item.user.email === user.email
    );

    dispatch(currentClickedContactChat({ user: user, messages: null }));

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

    console.log("done");
  };

  return (
    <div id="Contact_List">
      <div id="c1" className="list">
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

        {currentUserTotalContactsData.length > 0 &&
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
                <li id="content">
                  <span className="title_time">
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
                  <span className="message_notification">
                    {sortedMessages.length > 0 ? (
                      <>
                        <div>
                          <h2>{sortedMessages[0].content}</h2>
                        </div>
                      </>
                    ) : (
                      <p>No messages available</p>
                    )}
                    <div id="notificatoin_">
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
