import { useSelector } from "react-redux";

const ChatAreaHead = () => {
  const { currentClickedContactChat } = useSelector((state) => state.user);

  return (
    <div className="contact_user_option">
      <div className="flex items-center pl-3 gap-3">
        {currentClickedContactChat != null && (
          <img src={currentClickedContactChat.user.profilePicture} />
        )}
        <span>
          {currentClickedContactChat != null && (
            <h2 className="cursor-pointer">
              {currentClickedContactChat.user?.username}
            </h2>
          )}
          <p className="cursor-pointer text-xs space-x-5 text-slate-500">
            click here for contact info
          </p>
        </span>
      </div>
      <div className="pr-7">
        <ul className="flex flex-row-reverse gap-5">
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
          <li>
            <span data-icon="search-alt" class="">
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
                <use xlinkHref="/sprite.svg#ultra-search-icon" />
              </svg>
            </span>
          </li>
          <li>
            <div className="flex gap-2 items-center">
              <span data-icon="video-call" class="claouzo6">
                <svg
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  preserveAspectRatio="xMidYMid meet"
                  class=""
                  fill="none"
                >
                  <use xlinkHref="/sprite.svg#video-call-icon" />
                </svg>
              </span>
              <span data-icon="chevron-down-alt" class="">
                <svg
                  viewBox="0 0 17 13"
                  height="10"
                  preserveAspectRatio="xMidYMid meet"
                  class=""
                  version="1.1"
                  x="0px"
                  y="0px"
                  enable-background="new 0 0 17 13"
                >
                  <use xlinkHref="/sprite.svg#alt-down-icon" />
                </svg>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ChatAreaHead;
