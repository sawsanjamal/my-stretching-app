import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
import toggleOn from "../../assets/toggle-on.svg";
import toggleOff from "../../assets/toggle-off.svg";
import SearchBar from "../searchBar";
import { useState } from "react";
import { AccountDropdown } from "./AccountDropdown";

export default function Navbar(props) {
  const [openDropdown, setOpenDropdown] = useState(false);
  return (
    <div className="navbar">
      <div className="navbarItems">
        <div className="navbar-toggle-btn">
          <img
            onClick={props.toggleDarkMode}
            src={props.darkMode ? toggleOn : toggleOff}
          />
        </div>
        <div>
          <SearchBar />
        </div>
        <button
          className="navbar-signup-btn"
          onClick={() => setOpenDropdown(!openDropdown)}
        >
          <FontAwesomeIcon icon={faUser} />
        </button>
        {openDropdown && <AccountDropdown />}
      </div>
    </div>
  );
}
