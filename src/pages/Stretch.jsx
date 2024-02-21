import "../styles.css";
import { AppContext } from "../App";
import { useContext } from "react";
import StretchesList from "../components/StretchesList";
import { useParams } from "react-router-dom";

// pull dynamic url param :id
export default function Stretch() {
  const {
    data: { stretches, darkMode },
    methods: { handleLike },
  } = useContext(AppContext);
  const { id } = useParams();
  const stretchesMatch = stretches.filter((stretch) => stretch._id === id);

  return (
    <div className="stretches-page-container">
      <h1> Here Is The Selected Stretch </h1>
      <div className="stretches-page">
        <div className="stretches-list">
          <StretchesList
            darkMode={darkMode}
            handleLike={handleLike}
            stretches={stretchesMatch}
          />
        </div>
      </div>
    </div>
  );
}
