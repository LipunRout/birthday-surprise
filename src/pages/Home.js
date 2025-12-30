import { useNavigate } from "react-router-dom";
import Slideshow from "../components/Slideshow";
import GlobalMessage from "../components/GlobalMessage";
export default function Home({ musicRef }) {
  const navigate = useNavigate();

  const handleMagicClick = () => {
    // 🎵 Start music safely (user interaction)
    musicRef?.current?.playMusic();

    // ✨ Navigate to next page
    navigate("/choose-date");
  };

  return (
    <div className="page center-box">
      <GlobalMessage />
      <Slideshow folder="dec31" total={7} interval={3500} />

      <h2>You are special in every universe</h2>
      <p>This little space is made only for you</p>

      <button className="btn magic-btn" onClick={handleMagicClick}>
        See the Magic ✨
      </button>
    </div>
  );
}
