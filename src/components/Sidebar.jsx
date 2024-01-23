import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import {
  faBook,
  faBars,
  faUser,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar({ setOpenModal }) {
  return (
    <>
      <div className="sidebar">
        <div className="sidebarItems">
          <div>
            <button className="sidebar-menu-btn">
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          <div>
            <button className="sidebar-btn">
              <FontAwesomeIcon icon={faHouse} />
            </button>
            <h3>Home</h3>
          </div>
          <div>
            <button className="sidebar-btn">
              <FontAwesomeIcon icon={faHeart} />
            </button>
            <h3>Stretches</h3>
          </div>
          <div>
            <button className="sidebar-btn">
              <FontAwesomeIcon icon={faBook} />
            </button>
            <h3>Articles</h3>
          </div>
          <div>
            <button className="sidebar-btn" onClick={setOpenModal}>
              <FontAwesomeIcon icon={faUser} />
            </button>
            <h3> Sign Up</h3>
          </div>
        </div>
      </div>
    </>
  );
}
