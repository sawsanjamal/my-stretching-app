import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import {
  faBook,
  faBars,
  faUser,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./styles.css";
import { useContext } from "react";
import { AppContext } from "../../App";
import { clearCookies } from "../../api/users";
// import { Cookies } from "js-cookie";

export default function Sidebar() {
  const {
    data: { user, darkMode },
    methods: { setUser, setModalOpen, setSignUpModalOpen },
  } = useContext(AppContext);
  function handleLogout() {
    clearCookies();
    setUser(null);
    setModalOpen(true);
  }
  function signUp() {
    setModalOpen(false);
    setSignUpModalOpen(true);
  }
  return (
    <>
      <div className={darkMode ? "sidebar-dark" : "sidebar"}>
        <div className="sidebarItems">
          <div>
            <button className={darkMode ? "sidebar-btn-dark" : "sidebar-btn"}>
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          <div>
            <button className={darkMode ? "sidebar-btn-dark" : "sidebar-btn"}>
              <Link to="/" className="link">
                <FontAwesomeIcon icon={faHouse} />
              </Link>
            </button>
            <h3>Home</h3>
          </div>
          <div>
            <button className={darkMode ? "sidebar-btn-dark" : "sidebar-btn"}>
              <Link to="/stretches" className="link">
                <FontAwesomeIcon icon={faHeart} />
              </Link>
            </button>
            <h3>Stretches</h3>
          </div>
          <div>
            <button className={darkMode ? "sidebar-btn-dark" : "sidebar-btn"}>
              <Link to="/articles" className="link">
                <FontAwesomeIcon icon={faBook} />
              </Link>
            </button>
            <h3>Articles</h3>
          </div>
          {user ? (
            <div>
              <button
                className={darkMode ? "sidebar-btn-dark" : "sidebar-btn"}
                onClick={handleLogout}
              >
                <Link to="/logout">
                  <FontAwesomeIcon icon={faUser} />
                </Link>
              </button>
              <h3> Logout</h3>
            </div>
          ) : (
            <div>
              <button
                className={darkMode ? "sidebar-btn-dark" : "sidebar-btn"}
                onClick={signUp}
              >
                <FontAwesomeIcon icon={faUser} />
              </button>
              <h3> Sign Up</h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
