export function ShoulderStretch() {
  return (
    <div className="stretches-page-container">
      <div className="stretches-page">
        <div>
          <h1> Here are my stretches </h1>
          <div className="stretches-example-container">
            <div className="stretch-example">
              <h1 className="stretch-title">Shoulder Stretch Variation One</h1>
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
              <h1 className="stretch-title">Shoulder Stretch Variation Two</h1>
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
              <h1 className="stretch-title">
                Shoulder Stretch Variation Three
              </h1>
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
