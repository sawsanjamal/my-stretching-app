import "./styles.css";
import { FemaleSymbol } from "./femaleSymbol";
import { MaleSymbol } from "./maleSymbol";
export function ToggleSwitch({ isOn, handleToggle }) {
  return (
    <div className="toggle" onClick={handleToggle}>
      <span className={`symbol ${isOn ? "translated" : ""}`}>
        {isOn ? <FemaleSymbol /> : <MaleSymbol />}
      </span>
    </div>
  );
}
