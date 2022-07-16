import { useState } from "react";

import clsx from "clsx";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import style from "../sass/components/layout.module.scss";
import { links } from "../shared/navigation";

import MobileMenu from "./MobileMenu";

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={style.light}>
      <Helmet>
        <title>Strona główna</title>
      </Helmet>
      <div className="container">
        <header className={clsx("grid-row", style.header)}>
          <div className={clsx("grid-col-4", style["logo-box"])}>
            <span className={style.logo}>Issues Tracker</span>
          </div>
          <div className={clsx("grid-col-8", style["links-xl"])}>
            <ul className="grid-row">
              {links.map((link, index) => (
                <li className="grid-col-4" title={link.describe} key={index}>
                  <Link className={style.links} to={link.url}>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={style["button-menu"]}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          {isMenuOpen && <MobileMenu links={links} />}
        </header>
      </div>
      <main className="container">{children}</main>
    </div>
  );
};

export default Layout;
