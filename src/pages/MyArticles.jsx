import "../styles.css";
import { AppContext } from "../App";
import { useContext, useState } from "react";

import Pagination from "../components/pagination/Pagination";
import { ArticlesContainer } from "../components/articles/articlesContainer";

export default function MyArticles() {
  const {
    data: { user, articles },
    methods: { handleLikeArticle },
  } = useContext(AppContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  const userArticles = (user || { articles: [] }).articles.map((articleId) => {
    const article = (articles || []).find(
      (article) => article._id === articleId
    );

    return { ...article, liked: true };
  });
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = userArticles.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
      <div className="my-stretches-page">
        <h1> Here Are My Liked Articles </h1>
        <ArticlesContainer
          handleLikeArticle={handleLikeArticle}
          userArticles={currentPosts}
        />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={userArticles.length}
          paginate={paginate}
          indexOfFirstPost={indexOfFirstPost}
          indexOfLastPost={indexOfLastPost}
        />
      </div>
    </div>
  );
}
