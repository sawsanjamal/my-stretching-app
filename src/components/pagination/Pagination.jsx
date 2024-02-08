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
  return (
    <nav className="pagination-nav">
      <div className="pagination-text">
        Showing {indexOfFirstPost + 1} to{" "}
        {totalPosts > indexOfLastPost ? indexOfLastPost : totalPosts} of{" "}
        {totalPosts} results
      </div>
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
    </nav>
  );
};

export default Pagination;
