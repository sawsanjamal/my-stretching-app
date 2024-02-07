import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
export function SearchModal({ setOpenModal }) {
  const {
    data: { stretches },
  } = useContext(AppContext);
  const inputRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [match, setMatch] = useState("");
  const [stretchMatches, setStretchMatches] = useState([]);
  const [stretchHovered, setStretchHovered] = useState(0);
  function findMatch() {
    const stretchMatches = stretches.filter((stretch) =>
      stretch.name.toLowerCase().includes(searchQuery)
    );
    if (stretchMatches.length) {
      setMatch(true);
    } else {
      setMatch(false);
    }
    setStretchMatches(stretchMatches);
  }
  function closeModal() {
    setOpenModal(false);
  }
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <dialog className={styles.searchModal}>
      <CloseButton closeModal={closeModal} />
      <div className={styles.searchModalHeader}>
        <input
          ref={inputRef}
          className={styles.searchInputModal}
          type="search"
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") setSearchQuery(e.target.value);
            findMatch();
          }}
        />
        <button onClick={findMatch} className={styles.searchBtnModal}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>

      <div className={styles.searchModalBody}>
        <div className={styles.searchResultsContainer}>
          {searchQuery && match
            ? stretchMatches.map((stretch, i) => {
                return (
                  <div
                    onMouseOver={() => {
                      setStretchHovered(i);
                    }}
                    key={i}
                    className={`${styles.searchOptions} ${
                      stretchHovered === i ? styles.searchOptionsMatch : ""
                    }`}
                  >
                    {stretch.name}
                  </div>
                );
              })
            : stretches.map((stretch, i) => {
                return (
                  <div key={i} className={styles.searchOptions}>
                    {stretch.name}
                  </div>
                );
              })}
        </div>
        <div className={styles.searchResults}>
          {searchQuery && match && (
            <div className={styles.searchResultsMatch}>
              <div className={styles.searchResult}>
                <div>{"image"}</div>
                <div>{stretchMatches[stretchHovered].name}</div>
              </div>
            </div>
          )}
          {searchQuery && match && (
            <Link
              to={`/stretches/${stretchMatches[stretchHovered]._id}`}
              className={styles.searchModalOpenLink}
            >
              Open
            </Link>
          )}
          {searchQuery && !match && (
            <div className={styles.searchResultsMatch}>
              No Matches For This Stretch
            </div>
          )}
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
