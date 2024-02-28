import "../styles.css";
import { AppContext } from "../App";
import { useContext } from "react";

import { useParams } from "react-router-dom";
import { SingleArticle } from "../components/articles/articlesContainer";

// pull dynamic url param :id
export default function Article() {
  const {
    data: { darkMode, articles },
    methods: { handleLikeArticle },
  } = useContext(AppContext);
  const { id } = useParams();
  const articleMatch = articles.find((article) => article._id === id) || {};

  return (
    <>
      <h1> Here are my articles </h1>
      <div className="articles-page">
        <SingleArticle
          handleLikeArticle={handleLikeArticle}
          article={articleMatch}
          darkMode={darkMode}
        />
      </div>
    </>
  );
}
