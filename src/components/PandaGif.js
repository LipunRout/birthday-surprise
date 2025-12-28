import { useState } from "react";

export default function PandaGif() {
  const [hearts, setHearts] = useState([]);

  const handleClick = () => {
    const id = Date.now();
    setHearts(prev => [...prev, id]);
    setTimeout(() => {
      setHearts(prev => prev.filter(h => h !== id));
    }, 2000);
  };

  return (
    <div className="panda-top-bar" onClick={handleClick}>
      {/* 💖 HEARTS */}
      {hearts.map(h => (
        <span key={h} className="panda-heart">💖</span>
      ))}

      {/* 🐼 PANDAS */}
      <img
        src="https://usagif.com/wp-content/uploads/gif/panda-107.gif"
        alt="panda"
        className="panda-gif glow delay1"
      />
      <img
        src="https://usagif.com/wp-content/uploads/gif/panda-73.gif"
        alt="panda"
        className="panda-gif glow delay2"
      />
      <img
        src="https://usagif.com/wp-content/uploads/gif/panda-32.gif"
        alt="panda"
        className="panda-gif glow delay3"
      />
    </div>
  );
}
