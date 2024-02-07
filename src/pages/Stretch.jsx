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
    <StretchesList
      darkMode={darkMode}
      handleLike={handleLike}
      stretches={stretchesMatch}
    />
  );
}
