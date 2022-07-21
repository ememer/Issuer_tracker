import { useContext } from "react";

import { Link } from "react-router-dom";

import { UserContext } from "../context/UserContext";
import { displayAvatar } from "../shared/utils/displayAvatar";

import AvatarImage from "./AvatarImage";

import "../sass/components/mobileMenu.scss";

const MobileMenu = ({ links }) => {
  const { avatar, avatarLists, userName } = useContext(UserContext);

  return (
    <nav className="mobile-nav">
      <div className="avatar-section-menu">
        <AvatarImage
          className="mobile-avatar"
          photoAlt="User-Avatar"
          style={displayAvatar(avatar, avatarLists).border}
          src={displayAvatar(avatar, avatarLists).url}
        />
        <h2>{userName}</h2>
      </div>
      <ul className="mobile">
        {links.map((link, index) => (
          <li title={link.describe} key={index}>
            <Link className="nav-link" to={link.url}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileMenu;
