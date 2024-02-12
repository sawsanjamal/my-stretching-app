import "./styles.css";
const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  indexOfFirstPost,
  indexOfLastPost,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  // if(pageNumbers[pageNumbers[length -1]] < ){}

  const generatePaginationText = () => {
    let firstChunk = totalPosts === 0 ? "0" : indexOfFirstPost + 1;
    const secondChunk = totalPosts === 0 ? "" : "to";
    let thirdChunk =
      totalPosts > indexOfLastPost ? indexOfLastPost : totalPosts || " ";
    if (firstChunk > thirdChunk) {
      firstChunk = thirdChunk - postsPerPage;
      paginate(totalPosts / postsPerPage);
    }
    return `Showing ${firstChunk} ${secondChunk} ${thirdChunk} of ${totalPosts} results`;
  };
  return (
    <nav className="pagination-nav">
      <div className="pagination-text">{generatePaginationText()}</div>

      {totalPosts > 3 && (
        <ul className="number-list">
          {pageNumbers.map((number) => (
            <li className="list-item" key={number}>
              <button
                className="pagination-btn"
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
