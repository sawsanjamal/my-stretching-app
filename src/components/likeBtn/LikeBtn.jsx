import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";

export default function LikeBtn({ selection, handleLike }) {
  return (
    <button
      className={"like-btn" && selection.liked ? "hearted" : "nothearted"}
      onClick={() => handleLike(selection._id)}
    >
      <FontAwesomeIcon icon={faHeart} />
    </button>
  );
}
