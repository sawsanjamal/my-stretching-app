import { MaleHumanFront } from "../components/humanBody/maleHumanFront";
import { MaleHumanBack } from "../components/humanBody/maleHumanBack";
import { ToggleSwitch } from "../components/toggle/ToggleSwitch";
import { useContext, useState } from "react";
import { FemaleHumanFront } from "../components/humanBody/femaleHumanFront";
import { FemaleHumanBack } from "../components/humanBody/femaleHumanBack";
import "../index.css";
import { AppContext } from "../App";
export default function Home() {
  const {
    data: { darkMode },
  } = useContext(AppContext);
  const [female, setFemale] = useState(true);
  return (
    <div className="home-container">
      <div className="human-body-container">
        <div className="human-body-front">
          {female ? <FemaleHumanFront /> : <MaleHumanFront />}
        </div>
        <div className="human-body-back">
          {female ? <FemaleHumanBack /> : <MaleHumanBack />}
        </div>
        <div className="home-toggle">
          <div className={darkMode ? "btn-container-dark" : "btn-container"}>
            <span>Male</span>
            <ToggleSwitch
              isOn={female}
              handleToggle={() => setFemale(!female)}
            />
            <span>Female</span>
          </div>
        </div>
      </div>
      <div className="articles-container">
        <div className="article">Article 1</div>
        <div className="article">Article 2</div>
        <div className="article">Article 3</div>
      </div>
    </div>
  );
}
