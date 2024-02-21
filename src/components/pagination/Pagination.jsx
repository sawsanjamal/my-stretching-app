import { useContext } from "react";
import "./styles.css";
import { AppContext } from "../../App";
const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  indexOfFirstPost,
  indexOfLastPost,
}) => {
  const {
    data: { darkMode },
  } = useContext(AppContext);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const generatePaginationText = () => {
    let firstChunk = totalPosts === 0 ? "0" : indexOfFirstPost + 1;
    const secondChunk = totalPosts === 0 ? "" : "to";
    let thirdChunk =
      totalPosts > indexOfLastPost ? indexOfLastPost : totalPosts || " ";
    if (firstChunk > thirdChunk && totalPosts !== 0) {
      firstChunk = thirdChunk - postsPerPage;
      paginate(totalPosts / postsPerPage);
    }
    return `Showing ${firstChunk} ${secondChunk} ${thirdChunk} of ${totalPosts} results`;
  };
  return (
    <nav
      className={
        (darkMode && totalPosts > 0 && "pagination-nav-dark-selected",
        totalPosts > 0 ? "pagination-nav-selected" : "pagination-nav",
        darkMode ? "pagination-nav-dark" : "pagination-nav")
      }
    >
      <div className="pagination-text">{generatePaginationText()}</div>

      {totalPosts >= 3 && (
        <ul className="number-list">
          {pageNumbers.map((number) => (
            <li className="list-item" key={number}>
              <button
                className={darkMode ? "pagination-btn-dark" : "pagination-btn"}
                onClick={() => paginate(number)}
                aria-label={`Go to Page ${number}`}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Pagination;
