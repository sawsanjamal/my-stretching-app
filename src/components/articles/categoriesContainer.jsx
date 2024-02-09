import { useContext } from "react";
import { AppContext } from "../../App";

export function CategoriesContainer({ renderArticles }) {
  const {
    data: { articles },
  } = useContext(AppContext);
  const categories = articles.map((article) => article.category);
  const articlesCategories = new Set(categories);
  const CategoriesArray = Array.from(articlesCategories);
  return (
    <>
      <div className="categories-container">
        <h1 className="categories-header">Categories</h1>
        <div className="categories-list">
          {CategoriesArray.map((category, i) => {
            return (
              <button
                key={i}
                onClick={() => renderArticles(category)}
                className="categories-btn"
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
