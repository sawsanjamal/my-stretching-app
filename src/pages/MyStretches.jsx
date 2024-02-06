import "../styles.css";
import { AppContext } from "../App";
import { useContext } from "react";
import StretchesList from "../components/StretchesList";
export default function MyStretches() {
  const {
    data: { user, stretches, darkMode },
    methods: { handleLike },
  } = useContext(AppContext);

  const userStretches = (user || { stretches: [] }).stretches.map(
    (stretchId) => {
      const stretch = (stretches || []).find(
        (stretch) => stretch._id === stretchId
      );

      return { ...stretch, liked: true };
    }
  );

  return (
    <div className="stretches-page-container">
      <div className="stretches-page">
        <div>
          <h1> Here Are My Liked Stretches </h1>
          <StretchesList
            darkMode={darkMode}
            handleLike={handleLike}
            stretches={userStretches}
          />
        </div>
      </div>
    </div>
  );
}
