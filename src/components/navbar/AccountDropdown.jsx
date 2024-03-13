import { useContext } from "react";
import { AppContext } from "../../App";

import { Link } from "react-router-dom";

export function AccountDropdown() {
  const {
    data: { user, darkMode },
    methods: { setOpenDropdown, handleLogout, signUp },
  } = useContext(AppContext);

  return (
    <div className="account-dropdown">
      {user ? (
        <button className={darkMode ? "dropdown-btn-dark" : "dropdown-btn"}>
          <div
            className="personal-dropdown-item"
            onClick={() => setOpenDropdown(false)}
          >
            <Link to="myprofile" className="link">
              My Profile
            </Link>
          </div>
          <div
            className="personal-dropdown-item"
            onClick={() => setOpenDropdown(false)}
          >
            <Link to="stretches/mystretches" className="link">
              My Stretches
            </Link>
          </div>
          <div
            className="personal-dropdown-item"
            onClick={() => setOpenDropdown(false)}
          >
            {" "}
            <Link to="articles/myarticles" className="link">
              My Articles
            </Link>
          </div>
          <div className="personal-dropdown-item" onClick={handleLogout}>
            Logout
          </div>
        </button>
      ) : (
        <button className={darkMode ? "dropdown-btn-dark" : "dropdown-btn"}>
          <div onClick={signUp} className="dropdown-item">
            Sign up / Log in
          </div>
        </button>
      )}
    </div>
  );
}
