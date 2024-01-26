import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
import toggleOn from "../../assets/toggle-on.svg";
import toggleOff from "../../assets/toggle-on.svg";
import SearchBar from "../searchBar";

export default function Navbar(props) {
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
        <button className="navbar-signup-btn" onClick={props.setOpenModal}>
          <FontAwesomeIcon icon={faUser} />
        </button>
      </div>
    </div>
  );
}