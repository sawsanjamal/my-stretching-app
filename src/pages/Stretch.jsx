import "../styles.css";
import { AppContext } from "../App";
import { useContext } from "react";
import StretchesList from "../components/stretches/StretchesList";
import { useParams } from "react-router-dom";

export default function Stretch() {
  const {
    data: { user, stretches, darkMode },
  } = useContext(AppContext);
  const { id } = useParams();

  const stretchesMatch = stretches
    .filter((stretch) => stretch._id === id)
    .map((stretch) => ({
      ...stretch,
      liked: user.stretches.includes(stretch._id),
    }));

  return (
    <div className="stretches-page-container">
      <div className="stretches-page">
        <StretchesList darkMode={darkMode} stretches={stretchesMatch} />
      </div>
    </div>
  );
}
