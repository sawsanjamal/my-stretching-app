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

export default function Sidebar() {
  const {
    data: { user, darkMode, collapsed },
    methods: { signUp, handleLogout, handleToggleSidebar },
  } = useContext(AppContext);

  return (
    <>
      {collapsed ? (
        <div className={darkMode ? "sidebar-dark" : "sidebar"}>
          <div className="sidebarItems">
            <div>
              <button
                className={darkMode ? "sidebar-btn-dark" : "sidebar-btn"}
                onClick={handleToggleSidebar}
              >
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
                  <FontAwesomeIcon icon={faUser} />
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
      ) : (
        <div className={darkMode ? "sidebar-dark" : "sidebar"}>
          <div className="sidebarItemsExpanded">
            <div>
              <button
                className={darkMode ? "sidebar-btn-dark" : "sidebar-btn"}
                onClick={handleToggleSidebar}
              >
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>
            <Link to="/" className="link">
              <div className="sidebarItem">
                <button
                  className={darkMode ? "sidebar-btn-dark" : "sidebar-btn"}
                >
                  <FontAwesomeIcon icon={faHouse} />
                </button>
                <h3 className="btn-title">Home</h3>
              </div>
            </Link>
            <Link to="/stretches" className="link">
              <div className="sidebarItem">
                <button
                  className={darkMode ? "sidebar-btn-dark" : "sidebar-btn"}
                >
                  <FontAwesomeIcon icon={faHeart} />
                </button>
                <h3 className="btn-title">Stretches</h3>
              </div>
            </Link>
            <Link to="/articles" className="link">
              <div className="sidebarItem">
                <button
                  className={darkMode ? "sidebar-btn-dark" : "sidebar-btn"}
                >
                  <FontAwesomeIcon icon={faBook} />
                </button>
                <h3 className="btn-title">Articles</h3>
              </div>
            </Link>
            {user ? (
              <Link to="/" className="link">
                <div className="sidebarItem" onClick={handleLogout}>
                  <button
                    className={darkMode ? "sidebar-btn-dark" : "sidebar-btn"}
                  >
                    <FontAwesomeIcon icon={faUser} />
                  </button>
                  <h3 className="btn-title"> Logout</h3>
                </div>
              </Link>
            ) : (
              <Link to="/" className="link">
                <div className="sidebarItem" onClick={signUp}>
                  <button
                    className={darkMode ? "sidebar-btn-dark" : "sidebar-btn"}
                  >
                    <FontAwesomeIcon icon={faUser} />
                  </button>
                  <h3 className="btn-title"> Sign Up</h3>
                </div>
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
}
