import "../../styles.css";
import LikeBtn from "../likeBtn/LikeBtn";
import { AppContext } from "../../App";
import "react-loading-skeleton/dist/skeleton.css";
import { useContext } from "react";

export default function StretchesList({ stretches }) {
  return <StretchesListItems stretches={stretches} />;
}

function StretchesListItems({ stretches }) {
  const {
    data: { darkMode, female },
  } = useContext(AppContext);

  return (
    <div className="stretches-example-container">
      {!stretches.length ? (
        <div />
      ) : (
        stretches.map((stretch, i) => {
          return (
            <div
              key={i}
              className={darkMode ? "stretch-example-dark" : "stretch-example"}
            >
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
                <LikeBtn selection={stretch} />
              </div>

              <div className="video-container">
                <video
                  src={female ? stretch.frontVideoFemale : stretch.frontVideo}
                  type="video/mp4"
                  className="video"
                  controls
                  autoPlay
                ></video>
                <video
                  src={female ? stretch.sideVideoFemale : stretch.sideVideo}
                  type="video/mp4"
                  className="video"
                  controls
                  autoPlay
                ></video>
              </div>

              <ul className="stretch-steps">
                {stretch.steps.map((step, i) => {
                  return (
                    <li className="stretch-step" key={i}>
                      <div className="number">{i + 1}</div>
                      {step}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })
      )}
    </div>
  );
}
