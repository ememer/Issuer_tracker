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
          <header className="grid-row header">
            <div className="grid-col-4 logo-box">
              <span className="logo">Issues Tracker</span>
            </div>
            <div className="grid-col-8 links-xl">
              <ul className="grid-row">
                {links.map((link, index) => (
                  <li className="grid-col-4" title={link.describe} key={index}>
                    <Link className="links" to={link.url}>
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="button-menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            {isMenuOpen && <MobileMenu links={links} />}
          </header>
        </div>
      </div>
      <main className="container">{children}</main>
    </>
  );
};

export default Layout;
