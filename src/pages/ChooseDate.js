import { useNavigate } from "react-router-dom";
import Slideshow from "../components/Slideshow";

export default function ChooseDate() {
  const navigate = useNavigate();

  return (
    <div className="page center-box">
      <h2>No Cheating Plz Choose Today's Date!</h2>
      <button className="btn date-btn" onClick={() => navigate("/dec31")}>
        31st December
      </button>
      <Slideshow folder="dec31" total={7} interval={1000} />
      <button className="btn date-btn" onClick={() => navigate("/jan2")}>
        2nd January
      </button>
    </div>
  );
}
