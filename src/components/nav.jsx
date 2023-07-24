import myimg from "S:/lilltllemon/lemon/src/icons_assets/Logo.svg";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faUser, faCartPlus} from '@fortawesome/free-solid-svg-icons';
import "./nav.css";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav className="navbar">
      <a href="/menu"><FontAwesomeIcon icon={faBars} className="menus"/></a>
      <Link to="/">
        <img src={myimg} alt="our logo" />
      </Link>
      <ul>
        <li>
        <a href="/signin"><FontAwesomeIcon icon={faUser} className="manus" /></a>

        </li>
        <li>
        <a href="/signin"><FontAwesomeIcon icon={faCartPlus} className="manus" /></a>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
