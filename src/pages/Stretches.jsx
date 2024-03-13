import { useContext, useState } from "react";
import "../styles.css";
import { MaleHumanFront } from "../components/humanBody/maleHumanFront";
import { MaleHumanBack } from "../components/humanBody/maleHumanBack";
import { ToggleSwitch } from "../components/toggle/ToggleSwitch";
import { FemaleHumanFront } from "../components/humanBody/femaleHumanFront";
import { FemaleHumanBack } from "../components/humanBody/femaleHumanBack";
import { AppContext } from "../App";
import StretchesList from "../components/stretches/StretchesList";
import Pagination from "../components/pagination/Pagination";
import { StretchesSkeleton } from "../components/stretches/StretchesSkeleton";

export default function Stretches() {
  const {
    data: { female, user, stretches, darkMode, muscleGroup, isLoading },
    methods: { setFemale, handleLike, toggleMuscleGroup },
  } = useContext(AppContext);
  const [currentPage, setCurrentPage] = useState(1);
  const POSTS_PER_PAGE = 2;
  const selectedStretches = stretches.filter(
    (stretch) => stretch.muscleGroup === muscleGroup
  );
  const userStretches = user
    ? selectedStretches.map((stretch) => {
        return { ...stretch, liked: user.stretches.includes(stretch._id) };
      })
    : selectedStretches;
  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = userStretches.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="stretches-page">
        {isLoading ? (
          <StretchesSkeleton />
        ) : (
          <StretchesList
            darkMode={darkMode}
            handleLike={handleLike}
            stretches={currentPosts}
          />
        )}
        <StretchesSideBar
          female={female}
          darkMode={darkMode}
          setFemale={setFemale}
          toggleMuscleGroup={toggleMuscleGroup}
          muscleGroup={muscleGroup}
          selectedStretches={selectedStretches}
        />
      </div>
      <Pagination
        postsPerPage={POSTS_PER_PAGE}
        totalPosts={selectedStretches.length}
        paginate={paginate}
        indexOfFirstPost={indexOfFirstPost}
        indexOfLastPost={indexOfLastPost}
      />
    </>
  );
}

export function StretchesSideBar({
  female,
  setFemale,
  muscleGroup,
  toggleMuscleGroup,
  darkMode,
  selectedStretches,
}) {
  return (
    <div className="stretches-side-bar-short">
      <div className={darkMode ? "toggle-container-dark" : "toggle-container"}>
        <ToggleSwitch isOn={female} handleToggle={() => setFemale(!female)} />
      </div>
      <div
        className={
          selectedStretches
            ? "stretches-human-body-container-short"
            : '"stretches-human=body-container'
        }
      >
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
  );
}
