import { useContext } from "react";
import "./styles.css";
import { AppContext } from "../../App";

export function Button({
  children,
  selectedCategory,
  toggleCategory,
  category,
}) {
  const {
    data: { darkMode },
  } = useContext(AppContext);
  return (
    <button
      onClick={() => toggleCategory(category)}
      className={
        darkMode
          ? "dark-btn"
          : "btn" && selectedCategory === category
          ? "btn-selected"
          : "btn"
      }
    >
      {children}
    </button>
  );
}
