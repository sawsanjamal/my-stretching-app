import "../styles.css";
import { v4 as uuid } from "uuid";

import LikeBtn from "./likeBtn/LikeBtn";
import { useContext } from "react";
import { AppContext } from "../App";

export default function StretchesList({ stretches }) {
  const {
    data: { darkMode, female },
    methods: { handleLike },
  } = useContext(AppContext);

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
                <div className="videos">
                  <video className="video" controls>
                    <source
                      src={
                        female ? stretch.frontVideoFemale : stretch.frontVideo
                      }
                      type="video/mp4"
                    />
                  </video>
                  <video className="video" controls>
                    {female ? (
                      <source src={stretch.sideVideoFemale} type="video/mp4" />
                    ) : (
                      <source src={stretch.sideVideo} type="video/mp4" />
                    )}
                  </video>
                </div>
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
