import { useContext } from "react";
import "./styles.css";
import { AppContext } from "../../App";

export function SmallButton({ children }) {
  const {
    data: { darkMode },
  } = useContext(AppContext);
  return (
    <button className={darkMode ? "small-btn-dark" : "small-btn"}>
      {children}
    </button>
  );
}
