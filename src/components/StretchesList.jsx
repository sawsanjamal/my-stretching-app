import "../styles.css";

import LikeBtn from "./likeBtn/LikeBtn";
import { useContext } from "react";
import { AppContext } from "../App";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function StretchesList({ stretches }) {
  const {
    data: { darkMode, female, isLoading },
    methods: { handleLike },
  } = useContext(AppContext);

  return (
    <div className="stretches-example-container">
      {stretches.map((stretch, i) => {
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
              <h1 className={darkMode ? "stretch-title-dark" : "stretch-title"}>
                {isLoading ? <Skeleton width="33%" /> : stretch.name}
              </h1>
              <LikeBtn selection={stretch} handleLike={handleLike} />
            </div>

            <div className="stretch-example-content">
              <div className="videos">
                <video className="video" controls autoPlay>
                  {isLoading ? (
                    <Skeleton />
                  ) : (
                    <source
                      src={
                        female ? stretch.frontVideoFemale : stretch.frontVideo
                      }
                      type="video/mp4"
                    />
                  )}
                </video>
                <video className="video" controls autoPlay>
                  {isLoading ? (
                    <Skeleton />
                  ) : (
                    <source
                      src={female ? stretch.sideVideoFemale : stretch.sideVideo}
                      type="video/mp4"
                    />
                  )}
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
          </div>
        );
      })}
    </div>
  );
}
