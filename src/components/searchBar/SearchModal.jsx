import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
export function SearchModal({ setOpenModal }) {
  function closeModal() {
    setOpenModal(false);
  }
  return (
    <dialog className={styles.searchModal}>
      <CloseButton closeModal={closeModal} />
      <div className={styles.searchModalHeader}>
        <input className={styles.searchInputModal} type="search" />
        <button className={styles.searchBtnModal}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      <div className={styles.searchResultsContainer}>
        <div className={styles.searchOptions}></div>
        <div className={styles.searchResults}>
          <button>Open</button>
        </div>
      </div>
    </dialog>
  );
}

function CloseButton({ closeModal }) {
  return (
    <>
      <button onClick={closeModal} className={styles.closeBtn}>
        x
      </button>
    </>
  );
}
