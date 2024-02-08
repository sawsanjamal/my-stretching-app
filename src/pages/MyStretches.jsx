import "../styles.css";
import { AppContext } from "../App";
import { useContext, useState } from "react";
import StretchesList from "../components/StretchesList";
import Pagination from "../components/pagination/Pagination";

export default function MyStretches() {
  const {
    data: { user, stretches, darkMode },
    methods: { handleLike },
  } = useContext(AppContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  const userStretches = (user || { stretches: [] }).stretches.map(
    (stretchId) => {
      const stretch = (stretches || []).find(
        (stretch) => stretch._id === stretchId
      );

      return { ...stretch, liked: true };
    }
  );
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = userStretches.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
      <div className="my-stretches-page">
        <h1> Here Are My Liked Stretches </h1>

        <StretchesList
          darkMode={darkMode}
          handleLike={handleLike}
          stretches={currentPosts}
        />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={userStretches.length}
          paginate={paginate}
          indexOfFirstPost={indexOfFirstPost}
          indexOfLastPost={indexOfLastPost}
        />
      </div>
    </div>
  );
}
