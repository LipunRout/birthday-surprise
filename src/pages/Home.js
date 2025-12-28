import { useNavigate } from "react-router-dom";
import Slideshow from "../components/Slideshow";

export default function Home() {
  const navigate = useNavigate();


  

  return (
    <div className="page center-box">
        <Slideshow folder="dec31" total={7} interval={3500} />
      <h2>You are special in every universe</h2>
      <p>This little space is made only for you</p>
      <button className="btn magic-btn" onClick={() => navigate("/choose-date")}>
        See the Magic
      </button>
    </div>
  );
}
