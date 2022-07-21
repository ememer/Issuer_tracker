import { useState } from "react";

import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import { links } from "../shared/navigation";

import MobileMenu from "./MobileMenu";

import "../sass/components/layout.scss";

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <nav className="col-sm-7 nav-links">
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
          </header>
        </div>
      </div>
      {isMenuOpen && <MobileMenu links={links} />}
      <main className="container">{children}</main>
    </>
  );
};

export default Layout;
