import "../Switch.css";
import { FemaleSymbol } from "./femaleSymbol";
import { MaleSymbol } from "./maleSymbol";
export function ToggleSwitch({ isOn, handleToggle }) {
  return (
    <>
      <input
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
        checked={isOn}
        onChange={handleToggle}
      ></input>
      <label
        className="react-switch-label"
        style={{ background: isOn && "pink" }}
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`}>
          {isOn ? <FemaleSymbol /> : <MaleSymbol />}
        </span>
      </label>
    </>
  );
}
