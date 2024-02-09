import "../styles.css";
import { ArticlesContainer } from "../components/articles/articlesContainer";
import { CategoriesContainer } from "../components/articles/categoriesContainer";
import { AppContext } from "../App";
import { useContext } from "react";

export default function Articles() {
  const {
    data: { user, articles },
    methods: { setArticles },
  } = useContext(AppContext);

  function renderArticles(category) {
    const selectedArticles = articles.filter((article) => {
      return article.category === category;
    });
    setArticles(selectedArticles);
  }
  const userArticles = articles.map((article) => {
    return { ...article, liked: user.articles.includes(article._id) };
  });
  return (
    <>
      <h1> Here are my articles </h1>
      <div className="articles-page">
        <ArticlesContainer
          userArticles={userArticles}
          setArticles={setArticles}
        />
        <CategoriesContainer renderArticles={renderArticles} />
      </div>
    </>
  );
}
