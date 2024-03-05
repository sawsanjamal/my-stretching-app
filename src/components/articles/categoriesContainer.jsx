import { useContext } from "react";
import { AppContext } from "../../App";

export function CategoriesContainer({ toggleCategory, selectedCategory }) {
  const {
    data: { darkMode, articles },
  } = useContext(AppContext);

  const categories = articles.map((article) => article.category);
  const articlesCategories = new Set(categories);
  const categoriesArray = Array.from(articlesCategories);

  return (
    <>
      <div
        className={
          darkMode ? "categories-container-dark" : "categories-container"
        }
      >
        <h1 className="categories-header">Categories</h1>
        <div className={darkMode ? "categories-list-dark" : "categories-list"}>
          {categoriesArray.map((category, i) => {
            return (
              <button
                key={i}
                onClick={() => {
                  toggleCategory(category);
                }}
                className={
                  selectedCategory === category
                    ? "categories-btn-selected"
                    : "categories-btn"
                }
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
