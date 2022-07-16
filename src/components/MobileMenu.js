import { Link } from "react-router-dom";

import style from "../sass/components/mobileMenu.module.scss";
const MobileMenu = ({ links }) => {
  return (
    <nav className={style["mobile-nav"]}>
      <ul className={style.mobile}>
        {links.map((link, index) => (
          <li title={link.describe} key={index}>
            <Link className={style["nav-link"]} to={link.url}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileMenu;
