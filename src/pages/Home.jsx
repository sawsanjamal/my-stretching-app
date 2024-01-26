import { HumanFront } from "../components/humanBody/humanFront";
import { HumanBack } from "../components/humanBody/humanBack";
export default function Home() {
  return (
    <div className="home-container">
      <div className="human-body-container">
        <div className="human-body-front">
          <HumanFront />
        </div>
        <div className="human-body-back">
          <HumanBack />
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
