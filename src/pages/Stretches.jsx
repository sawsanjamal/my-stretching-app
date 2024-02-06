import { useContext, useState } from "react";
import "../styles.css";
import { MaleHumanFront } from "../components/humanBody/maleHumanFront";
import { MaleHumanBack } from "../components/humanBody/maleHumanBack";
import { ToggleSwitch } from "../components/toggle/ToggleSwitch";
import { FemaleHumanFront } from "../components/humanBody/femaleHumanFront";
import { FemaleHumanBack } from "../components/humanBody/femaleHumanBack";
import { AppContext } from "../App";

import { v4 as uuid } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Stretches() {
  const [female, setFemale] = useState(true);
  const [muscleGroup, setMuscleGroup] = useState(null);

  const {
    data: { user, stretches, darkMode },
    methods: { handleLike },
  } = useContext(AppContext);

  const selectedStretches = stretches.filter(
    (stretch) => stretch.muscleGroup === muscleGroup
  );

  // work on page for empty array
  return (
    <div className="stretches-page-container">
      <div className="stretches-page">
        <div>
          <h1> Here are my stretches </h1>
          <div className="stretches-example-container">
            {selectedStretches.map((stretch) => {
              const liked = user.stretches.includes(stretch._id);
              return (
                <div key={uuid()} className="stretch-example">
                  <h1
                    className={
                      darkMode ? "stretch-title-dark" : "stretch-title"
                    }
                  >
                    {stretch.name}
                    <button
                      className={liked ? "hearted" : "nothearted"}
                      onClick={() => handleLike(stretch._id)}
                    >
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                  </h1>
                  <div className="stretch-example-content">
                    <div>images</div>
                    <ul>
                      {stretch.steps.map((step) => {
                        return <li key={uuid()}>{step}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="stretches-side-bar">
            <div
              className={
                darkMode ? "toggle-container-dark" : "toggle-container"
              }
            >
              <ToggleSwitch
                isOn={female}
                handleToggle={() => setFemale(!female)}
              />
            </div>
            <div className="stretches-human-body-container">
              {female ? (
                <FemaleHumanFront setMuscleGroup={setMuscleGroup} />
              ) : (
                <MaleHumanFront setMuscleGroup={setMuscleGroup} />
              )}
              {female ? (
                <FemaleHumanBack setMuscleGroup={setMuscleGroup} />
              ) : (
                <MaleHumanBack setMuscleGroup={setMuscleGroup} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
