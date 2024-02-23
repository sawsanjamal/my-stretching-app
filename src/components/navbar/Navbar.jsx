import Avatar, { genConfig } from "react-nice-avatar";
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
  const config = genConfig("myapp");
  return (
    <div className={darkMode ? "navbar-dark" : "navbar"}>
      <div className="navbarItems">
        <div className="navbar-toggle-btn">
          <img
            width="45px"
            onClick={toggleDarkMode}
            src={darkMode ? toggleOff : toggleOn}
          />
        </div>
        <div>
          <SearchBar />
        </div>
        {user && user.profilePicture ? (
          <img
            className="image"
            src={user.profilePicture}
            onClick={() => setOpenDropdown(!openDropdown)}
          />
        ) : (
          <div className="image" onClick={() => setOpenDropdown(!openDropdown)}>
            <Avatar style={{ width: "3rem", height: "3rem" }} {...config} />
          </div>
        )}
        {openDropdown && <AccountDropdown />}
      </div>
    </div>
  );
}
