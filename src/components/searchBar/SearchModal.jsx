import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
export function SearchModal() {
  return (
    <dialog className={styles.searchModal}>
      <button className={styles.closeBtn}>x</button>
      <div className={styles.searchModalHeader}>
        <input className="search-input" type="search" />
        <button className={styles.searchBtn}>
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
