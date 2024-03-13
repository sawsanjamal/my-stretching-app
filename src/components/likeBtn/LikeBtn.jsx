import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";
import { useContext } from "react";
import { AppContext } from "../../App";

export default function LikeBtn({ selection }) {
  const {
    methods: { handleLike },
  } = useContext(AppContext);
  return (
    <button
      className={selection.liked ? "hearted" : "nothearted"}
      onClick={() => handleLike(selection._id)}
    >
      <FontAwesomeIcon icon={faHeart} />
    </button>
  );
}
