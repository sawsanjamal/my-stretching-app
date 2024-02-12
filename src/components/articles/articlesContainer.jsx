import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LikeBtn from "../likeBtn/LikeBtn";
export function ArticlesContainer({ userArticles }) {
  const {
    methods: { handleLikeArticle },
  } = useContext(AppContext);
  return (
    <>
      <div className="articles-page-container">
        {userArticles.map((article, i) => {
          return (
            <SingleArticle
              key={i}
              handleLikeArticle={handleLikeArticle}
              article={article}
            />
          );
        })}
      </div>
    </>
  );
}

export function SingleArticle({ handleLikeArticle, article }) {
  const nav = useNavigate();
  return (
    <div className="big-container">
      <div className="article-container">
        <div
          className="article-header"
          onClick={() => nav(`/articles/${article._id}`)}
        >
          <h1>{article.title}</h1>
        </div>
        <LikeBtn selection={article} handleLike={handleLikeArticle} />
      </div>
      <div className="article-content">
        <div>image</div>
        <div>Article Content</div>
      </div>
    </div>
  );
}
