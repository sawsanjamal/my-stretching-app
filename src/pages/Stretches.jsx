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
  const [female, setFemale] = useState(true);
  const [muscleGroup, setMuscleGroup] = useState(null);

  const {
    data: { user, stretches, darkMode },
    methods: { handleLike },
  } = useContext(AppContext);

  const selectedStretches = stretches.filter(
    (stretch) => stretch.muscleGroup === muscleGroup
  );
  const userStretches = selectedStretches.map((stretch) => {
    return { ...stretch, liked: user.stretches.includes(stretch._id) };
  });

  // work on page for empty array
  return (
    <div className="stretches-page-container">
      <div className="stretches-page">
        <div>
          <h1> Here are my stretches </h1>
          <StretchesList
            darkMode={darkMode}
            handleLike={handleLike}
            stretches={userStretches}
          />
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
