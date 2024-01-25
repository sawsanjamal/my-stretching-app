import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SearchModal } from "./SearchModal";
import { useState } from "react";

export default function SearchBar() {
  const [openModal, setOpenModal] = useState(false);
  const toggleSearchModal = () => setOpenModal(!openModal);

  return (
    <>
      <div className="search-bar-container">
        <input
          className="search-input"
          type="search"
          aria-label="Search"
          onFocus={toggleSearchModal}
        />
        <button className="search-btn">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      {openModal && <SearchModal />}
    </>
  );
}
