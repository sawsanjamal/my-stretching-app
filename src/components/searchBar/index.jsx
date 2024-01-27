import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SearchModal } from "./SearchModal";
import { useState } from "react";
import styles from "./styles.module.css";

export default function SearchBar() {
  const [openModal, setOpenModal] = useState(false);
  const toggleSearchModal = () => setOpenModal(!openModal);

  return (
    <>
      <div className={styles.searchBarContainer}>
        <input
          className={styles.searchInput}
          type="search"
          aria-label="Search"
          onFocus={toggleSearchModal}
        />
        <button className={styles.searchBtn}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      {openModal && <SearchModal />}
    </>
  );
}
