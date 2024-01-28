import { useState } from "react";
import { StretchesModal } from "../components/modals/stretchesModal";
import "../styles.css";
import { ArticlesContainer } from "../components/articles/articlesContainer";
import { CategoriesContainer } from "../components/articles/categoriesContainer";
export default function Articles() {
  const [open, setOpen] = useState(true);
  function closeModal() {
    setOpen(false);
  }
  return (
    <div>
      <div className={`${open && "blur"}`}>
        <h1> Here are my articles </h1>
        <button onClick={() => setOpen(true)}>Open Modal</button>
        <div className="articles-page">
          <ArticlesContainer />
          <CategoriesContainer />
        </div>
      </div>

      {open && <StretchesModal closeModal={closeModal} />}
    </div>
  );
}
