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
  const POSTS_PER_PAGE = 2;
  const userStretches = (user || { stretches: [] }).stretches.map(
    (stretchId) => {
      const stretch = (stretches || []).find(
        (stretch) => stretch._id === stretchId
      );

      return { ...stretch, liked: true };
    }
  );
  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = userStretches.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
      <div className="my-stretches-page">
        <h1 className="stretches-header"> Here Are My Liked Stretches </h1>

        <StretchesList
          darkMode={darkMode}
          handleLike={handleLike}
          stretches={currentPosts}
        />
        <Pagination
          postsPerPage={POSTS_PER_PAGE}
          totalPosts={userStretches.length}
          paginate={paginate}
          indexOfFirstPost={indexOfFirstPost}
          indexOfLastPost={indexOfLastPost}
        />
      </div>
    </div>
  );
}
