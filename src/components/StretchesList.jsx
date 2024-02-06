import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles.css";
import { v4 as uuid } from "uuid";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function StretchesList({ stretches, darkMode, handleLike }) {
  return (
    <>
      <div className="stretches-example-container">
        {(stretches || []).map((stretch) => {
          return (
            <div key={uuid()} className="stretch-example">
              <h1 className={darkMode ? "stretch-title-dark" : "stretch-title"}>
                {stretch.name}
                <button
                  className={stretch.liked ? "hearted" : "nothearted"}
                  onClick={() => handleLike(stretch._id)}
                >
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              </h1>
              <div className="stretch-example-content">
                <div>images</div>
                <ul>
                  {(stretch.steps || []).map((step) => {
                    return <li key={uuid()}>{step}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
