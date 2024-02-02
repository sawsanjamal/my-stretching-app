import "../styles.css";
import { ArticlesContainer } from "../components/articles/articlesContainer";
import { CategoriesContainer } from "../components/articles/categoriesContainer";

export default function Articles() {
  return (
    <>
      <h1> Here are my articles </h1>
      <div className="articles-page">
        <ArticlesContainer />
        <CategoriesContainer />
      </div>
    </>
  );
}
