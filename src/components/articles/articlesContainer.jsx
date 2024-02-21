import "./styles.css";
import { AppContext } from "../../App";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import LikeBtn from "../likeBtn/LikeBtn";
import Pagination from "../pagination/Pagination";
import Skeleton from "react-loading-skeleton";
export function ArticlesContainer({ articles }) {
  const {
    data: { isLoadingArticle },
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
            isLoadingArticle={isLoadingArticle}
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

export function SingleArticle({
  handleLikeArticle,
  article,
  isLoadingArticle,
}) {
  const nav = useNavigate();

  return (
    <div className="big-container">
      <div className="article-image">
        {isLoadingArticle ? (
          <Skeleton width="400px" height="200px" />
        ) : (
          <img width="100%" src={article.image} />
        )}
      </div>

      <div className="article-content">
        <div className="article-container">
          <div
            className="article-header"
            onClick={() => nav(`/articles/${article._id}`)}
          >
            <h1>
              {isLoadingArticle ? (
                <Skeleton height="40px" width="380px" />
              ) : (
                article.title
              )}
            </h1>
          </div>

          <LikeBtn selection={article} handleLike={handleLikeArticle} />
        </div>
        <div className="article-body">
          {isLoadingArticle ? (
            <Skeleton height="60px" width="400px" />
          ) : (
            "Article Content"
          )}
        </div>
      </div>
    </div>
  );
}
