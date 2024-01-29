import { useState } from "react";
import { StretchesModal } from "../components/modals/stretchesModal";
import "../styles.css";
import { MaleHumanFront } from "../components/humanBody/maleHumanFront";
import { MaleHumanBack } from "../components/humanBody/maleHumanBack";
import { ToggleSwitch } from "../components/toggle/ToggleSwitch";
import { FemaleHumanFront } from "../components/humanBody/femaleHumanFront";
import { FemaleHumanBack } from "../components/humanBody/femaleHumanBack";

export default function Stretches() {
  const [open, setOpen] = useState(true);
  const [female, setFemale] = useState(true);
  function closeModal() {
    setOpen(false);
  }
  return (
    <div className="stretches-page-container">
      <div className="stretches-page">
        <div className={`${open ? "blur" : ""}`}>
          <h1> Here are my stretches </h1>
          <button onClick={() => setOpen(true)}>Open Modal</button>

          <div>
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
        </div>
        {open && <StretchesModal closeModal={closeModal} />}
      </div>
      <div className="stretches-side-bar">
        <div className="toggle-container">
          <ToggleSwitch />
        </div>
        <div className="stretches-human-body-container">
          {female ? <FemaleHumanFront /> : <MaleHumanFront />}
          {female ? <FemaleHumanBack /> : <MaleHumanBack />}
        </div>
      </div>
    </div>
  );
}
