import { useContext } from "react";
import { AppContext } from "../../App";
import { Button } from "../buttons/Button";

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
              <Button
                key={i}
                toggleCategory={toggleCategory}
                selectedCategory={selectedCategory}
                category={category}
              >
                {category}
              </Button>
            );
          })}
        </div>
      </div>
    </>
  );
}
