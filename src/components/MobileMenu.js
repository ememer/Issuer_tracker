import { Link } from "react-router-dom";

import "../sass/components/mobileMenu.scss";

const MobileMenu = ({ links }) => {
  return (
    <nav className="mobile-nav">
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
