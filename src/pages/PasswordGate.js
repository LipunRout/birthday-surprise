import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Slideshow from "../components/Slideshow";

export default function PasswordGate({ musicRef }) {
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const checkPassword = () => {
    if (pass === "notyouuu") {
      musicRef?.current?.playMusic(); // 🎵 only here
      navigate("/home");
    } else {
      alert("Wrong password 💔");
    }
  };

  return (
    <div className="page center-box">
      <Slideshow folder="dec31" total={7} interval={3500} />

      <h2>Only for You 💖</h2>

      <input
        type="password"
        placeholder="Gugu Password"
        className="form-control w-50 mx-auto"
        onChange={(e) => setPass(e.target.value)}
      />

      <button className="magic-btn mt-3" onClick={checkPassword}>
      Debini😒!!
      </button>
    </div>
  );
}
