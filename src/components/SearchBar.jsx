import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchBar() {
  return (
    <div className="search-bar-container">
      <input className="search-input" type="search" aria-label="Search"></input>
      <button className="search-btn">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  );
}
