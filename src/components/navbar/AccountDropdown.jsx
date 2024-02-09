import { useContext } from "react";
import { AppContext } from "../../App";
import { clearCookies } from "../../api/users";
import { Link } from "react-router-dom";

export function AccountDropdown() {
  const {
    data: { user, darkMode },
    methods: { setUser, setModalOpen, setSignUpModalOpen },
  } = useContext(AppContext);
  function handleLogout() {
    clearCookies();
    setUser(null);
    setModalOpen(true);
  }

  return (
    <div className="account-dropdown">
      {user ? (
        <button className={darkMode ? "dropdown-btn-dark" : "dropdown-btn"}>
          <div className="personal-dropdown-item" onClick={handleLogout}>
            Logout
          </div>
          <div className="personal-dropdown-item">
            <Link to="mystretches">My Stretches</Link>
          </div>
          <div className="personal-dropdown-item">
            {" "}
            <Link to="myarticles">My Articles</Link>
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
