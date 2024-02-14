import { useContext } from "react";
import "./styles.css";
import { AppContext } from "../../App";
export default function Footer() {
  const {
    data: { darkMode },
  } = useContext(AppContext);

  return <div className={darkMode ? "footer-dark" : "footer"} />;
}
