import { useContext, useState } from "react";
import "../styles.css";
import { MaleHumanFront } from "../components/humanBody/maleHumanFront";
import { MaleHumanBack } from "../components/humanBody/maleHumanBack";
import { ToggleSwitch } from "../components/toggle/ToggleSwitch";
import { FemaleHumanFront } from "../components/humanBody/femaleHumanFront";
import { FemaleHumanBack } from "../components/humanBody/femaleHumanBack";
import { AppContext } from "../App";

export default function Stretches() {
  const [female, setFemale] = useState(true);
  const {
    data: { darkMode },
  } = useContext(AppContext);
  return (
    <div className="stretches-page-container">
      <div className="stretches-page">
        <div>
          <h1> Here are my stretches </h1>
          <div className="stretches-example-container">
            <div className="stretch-example">
              <h1 className="stretch-title">Stretch 1</h1>
              <div className="stretch-example-content">
                <div>images</div>
                <ul>
                  <li>Steps </li>
                  <li>Steps </li>
                  <li>Steps </li>
                </ul>
              </div>
            </div>
            <div className="stretch-example">
              <h1 className="stretch-title">Stretch 1</h1>
              <div className="stretch-example-content">
                <div>images</div>
                <ul>
                  <li>Steps </li>
                  <li>Steps </li>
                  <li>Steps </li>
                </ul>
              </div>
            </div>
            <div className="stretch-example">
              <h1 className="stretch-title">Stretch 1</h1>
              <div className="stretch-example-content">
                <div>images</div>
                <ul>
                  <li>Steps </li>
                  <li>Steps </li>
                  <li>Steps </li>
                </ul>
              </div>
            </div>
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
              {female ? <FemaleHumanFront /> : <MaleHumanFront />}
              {female ? <FemaleHumanBack /> : <MaleHumanBack />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
