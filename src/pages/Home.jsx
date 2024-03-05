import { MaleHumanFront } from "../components/humanBody/maleHumanFront";
import { MaleHumanBack } from "../components/humanBody/maleHumanBack";
import { ToggleSwitch } from "../components/toggle/ToggleSwitch";
import { useContext } from "react";
import { FemaleHumanFront } from "../components/humanBody/femaleHumanFront";
import { FemaleHumanBack } from "../components/humanBody/femaleHumanBack";
import "../index.css";
import { AppContext } from "../App";
import { SingleArticle } from "../components/articles/articlesContainer";

export default function Home() {
  const {
    data: { darkMode, female, articles, muscleGroup },
    methods: { handleLikeArticle, toggleMuscleGroup, setFemale },
  } = useContext(AppContext);

  return (
    <>
      <div className="human-body-container">
        <div className="human-body-inner-container">
          <div className="human-body-model-container">
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
        <div className="home-toggle">
          <div className={darkMode ? "btn-container-dark" : "btn-container"}>
            <span className="span-gender-male">Male</span>
            <ToggleSwitch
              isOn={female}
              handleToggle={() => setFemale(!female)}
            />
            <span className="span-gender-female">Female</span>
          </div>
        </div>
      </div>
      <h1 className="home-page-title"> Featured Content</h1>
      <div className="articles-container">
        {articles.slice(0, 3).map((article, i) => {
          return (
            <SingleArticle
              key={i}
              handleLikeArticle={handleLikeArticle}
              article={article}
              darkMode={darkMode}
            />
          );
        })}
      </div>
    </>
  );
}
