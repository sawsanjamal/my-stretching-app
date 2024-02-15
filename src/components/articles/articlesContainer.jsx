import "./styles.css";
import { AppContext } from "../../App";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import LikeBtn from "../likeBtn/LikeBtn";
import Pagination from "../pagination/Pagination";
export function ArticlesContainer({ articles }) {
  const {
    methods: { handleLikeArticle },
  } = useContext(AppContext);
  const [currentPage, setCurrentPage] = useState(1);
  const POSTS_PER_PAGE = 9;
  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = articles.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="articles-page-container">
      {currentPosts.map((article, i) => {
        return (
          <SingleArticle
            key={i}
            handleLikeArticle={handleLikeArticle}
            article={article}
          />
        );
      })}
      <Pagination
        postsPerPage={POSTS_PER_PAGE}
        totalPosts={articles.length}
        paginate={paginate}
        indexOfFirstPost={indexOfFirstPost}
        indexOfLastPost={indexOfLastPost}
      />
    </div>
  );
}

export function SingleArticle({ handleLikeArticle, article }) {
  const nav = useNavigate();

  return (
    <div className="big-container">
      <img className="article-image" src={article.image} />

      <div className="article-content">
        <div className="article-container">
          <div
            className="article-header"
            onClick={() => nav(`/articles/${article._id}`)}
          >
            <h1>{article.title}</h1>
          </div>
          <LikeBtn selection={article} handleLike={handleLikeArticle} />
        </div>
        <div>Article Content</div>
      </div>
    </div>
  );
}
