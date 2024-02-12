import "../styles.css";
import { v4 as uuid } from "uuid";

import LikeBtn from "./likeBtn/LikeBtn";

export default function StretchesList({ stretches, darkMode, handleLike }) {
  return (
    <>
      <div className="stretches-example-container">
        {(stretches || []).map((stretch) => {
          return (
            <div key={uuid()} className="stretch-example">
              <div
                className={
                  darkMode
                    ? "stretch-header-container-dark"
                    : "stretch-header-container"
                }
              >
                <h1
                  className={darkMode ? "stretch-title-dark" : "stretch-title"}
                >
                  {stretch.name}
                </h1>
                <LikeBtn selection={stretch} handleLike={handleLike} />
              </div>

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
