import { useContext } from "react";
import { AppContext } from "../../App";

import { Link } from "react-router-dom";

export function AccountDropdown() {
  const {
    data: { user, darkMode },
    methods: { setSignUpModalOpen, setOpenDropdown, handleLogout },
  } = useContext(AppContext);

  return (
    <div className="account-dropdown">
      {user ? (
        <button className={darkMode ? "dropdown-btn-dark" : "dropdown-btn"}>
          <div className="personal-dropdown-item" onClick={handleLogout}>
            Logout
          </div>
          <div
            className="personal-dropdown-item"
            onClick={() => setOpenDropdown(false)}
          >
            <Link to="mystretches" className="link">
              My Stretches
            </Link>
          </div>
          <div
            className="personal-dropdown-item"
            onClick={() => setOpenDropdown(false)}
          >
            {" "}
            <Link to="myarticles" className="link">
              My Articles
            </Link>
          </div>
        </button>
      ) : (
        <button
          className={darkMode ? "dropdown-btn-dark" : "dropdown-btn"}
          onClick={() => {
            setSignUpModalOpen(true);
          }}
        >
          <div className="dropdown-item"> Sign up / Log in</div>
        </button>
      )}
    </div>
  );
}
