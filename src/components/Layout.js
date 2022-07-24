import { useContext, useState } from "react";

import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import { UserContext } from "../context/UserContext";
import { avatarLists } from "../shared/avatarsLists";
import { links } from "../shared/navigation";
import { displayAvatar } from "../shared/utils/displayAvatar";

import AvatarImage from "./AvatarImage";
import MobileMenu from "./MobileMenu";

import "../sass/components/layout.scss";

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { userName, avatar } = useContext(UserContext);

  return (
    <>
      <Helmet>
        <title>Strona główna</title>
      </Helmet>
      <div className="light">
        <div className="container">
          <header className="row header">
            <span className="col-5 col-sm-3 logo">Issues Tracker</span>
            <div className="col-1 button-menu-box">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className=" button-menu"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
            <nav className="col-md-5 nav-links">
              <ul className="row">
                {links.map((link, index) => (
                  <li className="col-sm-auto" title={link.describe} key={index}>
                    <Link className="links" to={link.url}>
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="col-2 avatar-nav-section">
              <AvatarImage
                className="avatar-nav"
                photoAlt="User-Avatar"
                style={displayAvatar(avatar, avatarLists).border}
                src={displayAvatar(avatar, avatarLists).url}
              />

              <span className="col-12 nav-name">{userName}</span>
            </div>
          </header>
        </div>
      </div>
      {isMenuOpen && <MobileMenu links={links} />}
      <main className="container">{children}</main>
    </>
  );
};

export default Layout;
