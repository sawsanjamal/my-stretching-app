import { MaleHumanFront } from "../components/humanBody/maleHumanFront";
import { MaleHumanBack } from "../components/humanBody/maleHumanBack";
import { ToggleSwitch } from "../components/toggle/ToggleSwitch";
import { useContext, useRef, useState } from "react";
import { FemaleHumanFront } from "../components/humanBody/femaleHumanFront";
import { FemaleHumanBack } from "../components/humanBody/femaleHumanBack";
import "../index.css";
import { AppContext } from "../App";
import { SingleArticle } from "../components/articles/articlesContainer";

export default function Home() {
  const {
    data: { darkMode, articles },
    methods: { handleLikeArticle },
  } = useContext(AppContext);
  const [female, setFemale] = useState(true);
  let home = useRef(true);
  return (
    <div className="home-container">
      <div className="human-body-container">
        <div className="human-body-front">
          {female ? (
            <FemaleHumanFront home={home} />
          ) : (
            <MaleHumanFront home={home} />
          )}
        </div>
        <div className="human-body-back">
          {female ? (
            <FemaleHumanBack home={home} />
          ) : (
            <MaleHumanBack home={home} />
          )}
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
        {articles.slice(0, 3).map((article, i) => {
          return (
            <div key={i}>
              <SingleArticle
                handleLikeArticle={handleLikeArticle}
                article={article}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
