import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
import toggleOn from "../../assets/toggle-on.svg";
import toggleOff from "../../assets/toggle-off.svg";
import SearchBar from "../searchBar";
import { useContext, useState } from "react";
import { AccountDropdown } from "./AccountDropdown";
import { AppContext } from "../../App";

export default function Navbar() {
  const {
    data: { user, darkMode },
    methods: { setDarkMode },
  } = useContext(AppContext);
  const [openDropdown, setOpenDropdown] = useState(false);
  function toggleDarkMode() {
    setDarkMode(() => !darkMode);
  }
  return (
    <div className={darkMode ? "navbar-dark" : "navbar"}>
      <div className="navbarItems">
        <div className="navbar-toggle-btn">
          <img onClick={toggleDarkMode} src={darkMode ? toggleOn : toggleOff} />
        </div>
        <div>
          <SearchBar />
        </div>
        {user ? (
          <button
            className={darkMode ? "navbar-email-btn-dark" : "navbar-email-btn"}
            onMouseEnter={() => setOpenDropdown(!openDropdown)}
          >
            <div className="user-email">{user.email}</div>
          </button>
        ) : (
          <button
            className={
              darkMode ? "navbar-signup-btn-dark" : "navbar-signup-btn"
            }
            onMouseEnter={() => setOpenDropdown(!openDropdown)}
          >
            <FontAwesomeIcon icon={faUser} />
          </button>
        )}

        {openDropdown && <AccountDropdown />}
      </div>
    </div>
  );
}
