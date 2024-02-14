import "../styles.css";
import { ArticlesContainer } from "../components/articles/articlesContainer";
import { CategoriesContainer } from "../components/articles/categoriesContainer";
import { AppContext } from "../App";
import { useContext, useState } from "react";

export default function Articles() {
  const {
    data: { articles },
  } = useContext(AppContext);
  const [category, setCategory] = useState(null);

  const articlesByCategory = articles.filter(
    (article) => !category || article.category === category
  );
  function toggleCategory(selectedCategory) {
    const value = category === selectedCategory ? null : selectedCategory;
    setCategory(value);
  }
  return (
    <>
      <h1> Here are my articles </h1>
      <div className="articles-page">
        {articles.length > 0 && (
          <ArticlesContainer articles={articlesByCategory} />
        )}
        <CategoriesContainer
          selectedCategory={category}
          toggleCategory={toggleCategory}
        />
      </div>
    </>
  );
}
