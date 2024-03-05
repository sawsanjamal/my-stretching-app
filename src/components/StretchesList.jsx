import "../styles.css";

import LikeBtn from "./likeBtn/LikeBtn";
import { useContext } from "react";
import { AppContext } from "../App";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function StretchesList({ stretches }) {
  const {
    data: { darkMode, female, isLoading },
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
                  {isLoading ? <Skeleton width="33%" /> : stretch.name}
                </h1>
                <LikeBtn selection={stretch} />
              </div>

              <div>
                <video
                  src={female ? stretch.frontVideoFemale : stretch.frontVideo}
                  type="video/mp4"
                  className="video"
                  controls
                  autoPlay
                >
                  {isLoading && <Skeleton />}
                </video>
                <video
                  src={female ? stretch.sideVideoFemale : stretch.sideVideo}
                  type="video/mp4"
                  className="video"
                  controls
                  autoPlay
                >
                  {isLoading && <Skeleton />}
                </video>
              </div>
              <ul className="stretch-steps">
                {(isLoading ? [{}, {}, {}] : stretch.steps).map((step, i) => {
                  return (
                    <li className="stretch-step" key={i}>
                      <div className="number">
                        {isLoading ? <Skeleton circle /> : i + 1}
                      </div>

                      {isLoading ? (
                        <Skeleton containerClassName="stretch-step-skeleton" />
                      ) : (
                        step
                      )}
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
