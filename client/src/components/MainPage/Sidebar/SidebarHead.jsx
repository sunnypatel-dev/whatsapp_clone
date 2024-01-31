import { useSelector } from "react-redux";

const SidebarHead = () => {
  const { currentUser } = useSelector((state) => state.user);

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
