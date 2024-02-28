import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
export function SearchModal({ setOpenModal }) {
  const {
    data: { female, stretches, darkMode },
  } = useContext(AppContext);
  const inputRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStretch, setSelectedStretch] = useState(null);

  const stretchMatches = stretches.filter(
    (stretch) =>
      !searchQuery || stretch.name.toLowerCase().includes(searchQuery)
  );

  function closeModal() {
    setOpenModal(false);
  }
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  useEffect(() => {
    if (stretchMatches.length === 0 && selectedStretch !== null) {
      setSelectedStretch(null);
    }
  }, [stretchMatches, selectedStretch]);

  function findVideoMatch() {
    if (female) {
      return stretchMatches[selectedStretch]?.frontVideoFemale;
    }
    return stretchMatches[selectedStretch]?.frontVideo;
  }

  return (
    <dialog className={darkMode ? styles.searchModalDark : styles.searchModal}>
      <CloseButton closeModal={closeModal} darkMode={darkMode} />
      <div className={styles.searchModalHeader}>
        <input
          ref={inputRef}
          className={styles.searchInputModal}
          type="search"
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setSelectedStretch(0);
          }}
        />
        <button className={styles.searchBtnModal}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>

      <div className={styles.searchModalBody}>
        <div className={styles.searchResultsContainer}>
          {stretchMatches.map((stretch, i) => {
            return (
              <div
                onMouseOver={() => {
                  setSelectedStretch(i);
                }}
                key={i}
                className={`${styles.searchOptions} ${
                  selectedStretch === i ? styles.searchOptionsMatch : ""
                }`}
              >
                {stretch.name}
              </div>
            );
          })}
        </div>
        <div
          className={darkMode ? styles.searchResultsDark : styles.searchResults}
        >
          {selectedStretch !== null && (
            <div
              className={
                darkMode
                  ? styles.searchResultsMatchDark
                  : styles.searchResultsMatch
              }
            >
              <div className={styles.searchResult}>
                <video
                  className={styles.video}
                  key={findVideoMatch()}
                  controls
                  loop
                  autoPlay
                >
                  <source src={findVideoMatch()} type="video/mp4" />
                </video>

                <div>{stretchMatches[selectedStretch]?.name}</div>
              </div>
            </div>
          )}

          {stretchMatches[selectedStretch] && (
            <Link
              to={`/stretches/${stretchMatches[selectedStretch]._id}`}
              className={
                darkMode
                  ? styles.searchModalOpenLinkDark
                  : styles.searchModalOpenLink
              }
            >
              <div onClick={closeModal}>Open</div>
            </Link>
          )}

          {searchQuery && stretchMatches.length === 0 && (
            <div
              className={
                darkMode
                  ? styles.searchResultsMatchDark
                  : styles.searchResultsMatch
              }
            >
              No Matches For This Stretch
            </div>
          )}
        </div>
      </div>
    </dialog>
  );
}

function CloseButton({ closeModal, darkMode }) {
  return (
    <>
      <button
        onClick={closeModal}
        className={darkMode ? styles.closeBtnDark : styles.closeBtn}
      >
        x
      </button>
    </>
  );
}
