import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
import toggleOn from "../../assets/toggle-on.svg";
import toggleOff from "../../assets/toggle-off.svg";
import SearchBar from "../searchBar";
import { useContext } from "react";
import { AccountDropdown } from "./AccountDropdown";
import { AppContext } from "../../App";

export default function Navbar() {
  const {
    data: { user, darkMode, openDropdown },
    methods: { setDarkMode, setOpenDropdown },
  } = useContext(AppContext);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }
  return (
    <div className={darkMode ? "navbar-dark" : "navbar"}>
      <div className="navbarItems">
        <div className="navbar-toggle-btn">
          <img onClick={toggleDarkMode} src={darkMode ? toggleOff : toggleOn} />
        </div>
        <div>
          <SearchBar />
        </div>
        {user ? (
          <button
            className={darkMode ? "navbar-email-btn-dark" : "navbar-email-btn"}
            onClick={() => setOpenDropdown(!openDropdown)}
          >
            <div className="user-email">{user.email}</div>
          </button>
        ) : (
          <button
            className={
              darkMode ? "navbar-signup-btn-dark" : "navbar-signup-btn"
            }
            onClick={() => setOpenDropdown(!openDropdown)}
          >
            <FontAwesomeIcon icon={faUser} />
          </button>
        )}

        {openDropdown && <AccountDropdown />}
      </div>
    </div>
  );
}
