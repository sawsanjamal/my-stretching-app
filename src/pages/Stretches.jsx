import { useContext, useState } from "react";
import "../styles.css";
import { MaleHumanFront } from "../components/humanBody/maleHumanFront";
import { MaleHumanBack } from "../components/humanBody/maleHumanBack";
import { ToggleSwitch } from "../components/toggle/ToggleSwitch";
import { FemaleHumanFront } from "../components/humanBody/femaleHumanFront";
import { FemaleHumanBack } from "../components/humanBody/femaleHumanBack";
import { AppContext } from "../App";
import StretchesList from "../components/StretchesList";

export default function Stretches() {
  const {
    data: { female, user, stretches, darkMode, muscleGroup },
    methods: { setFemale, handleLike, toggleMuscleGroup },
  } = useContext(AppContext);

  const selectedStretches = stretches.filter(
    (stretch) => stretch.muscleGroup === muscleGroup
  );
  const userStretches = user
    ? selectedStretches.map((stretch) => {
        return { ...stretch, liked: user.stretches.includes(stretch._id) };
      })
    : selectedStretches;

  // work on page for empty array
  return (
    <div className="stretches-page-container">
      <h1> Here are my stretches </h1>
      <div className="stretches-page">
        <div className="stretches-list">
          {userStretches.length > 0 && (
            <StretchesList
              darkMode={darkMode}
              handleLike={handleLike}
              stretches={userStretches}
            />
          )}
        </div>
        <div className="stretches-side-bar">
          <div
            className={darkMode ? "toggle-container-dark" : "toggle-container"}
          >
            <ToggleSwitch
              isOn={female}
              handleToggle={() => setFemale(!female)}
            />
          </div>
          <div className="stretches-human-body-container">
            {female ? (
              <FemaleHumanFront
                toggleMuscleGroup={toggleMuscleGroup}
                muscleGroup={muscleGroup}
              />
            ) : (
              <MaleHumanFront
                toggleMuscleGroup={toggleMuscleGroup}
                muscleGroup={muscleGroup}
              />
            )}
            {female ? (
              <FemaleHumanBack
                toggleMuscleGroup={toggleMuscleGroup}
                muscleGroup={muscleGroup}
              />
            ) : (
              <MaleHumanBack
                toggleMuscleGroup={toggleMuscleGroup}
                muscleGroup={muscleGroup}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
