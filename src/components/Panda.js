import { useState } from "react";

export default function Panda() {
  const [hearts, setHearts] = useState([]);

  const react = () => {
    const id = Date.now();
    setHearts(prev => [...prev, id]);
    setTimeout(() => {
      setHearts(prev => prev.filter(h => h !== id));
    }, 2000);
  };

  return (
    <div className="panda-wrapper" onClick={react}>
      {/* 💖 HEART REACTION */}
      {hearts.map(h => (
        <span key={h} className="panda-heart">💖</span>
      ))}

      {/* 🎈 BALLOON */}
      <span className="panda-balloon">🎈</span>

      {/* 🐼 PANDA SVG */}
      <svg
  width="140"
  height="170"
  viewBox="0 0 140 170"
  className="panda-svg"
>
  {/* 🐼 EARS */}
  <circle cx="40" cy="30" r="18" fill="#000" />
  <circle cx="100" cy="30" r="18" fill="#000" />

  {/* 🐼 HEAD */}
  <circle cx="70" cy="60" r="40" fill="#fff" />

  {/* 👀 EYES */}
  <ellipse cx="55" cy="60" rx="10" ry="14" fill="#000" />
  <ellipse cx="85" cy="60" rx="10" ry="14" fill="#000" />

  {/* 👀 BLINK */}
  <line className="eye-blink left" x1="45" y1="60" x2="65" y2="60" />
  <line className="eye-blink right" x1="75" y1="60" x2="95" y2="60" />

  {/* 👃 NOSE */}
  <circle cx="70" cy="78" r="4" fill="#000" />

  {/* 🐼 BODY */}
  <ellipse cx="70" cy="115" rx="38" ry="30" fill="#fff" />

  {/* 🐼 ARMS (HOLDING CAKE) */}
  <ellipse cx="45" cy="110" rx="12" ry="18" fill="#000" />
  <ellipse cx="95" cy="110" rx="12" ry="18" fill="#000" />

  {/* 🎂 CAKE BASE */}
  <rect
    x="50"
    y="95"
    width="40"
    height="18"
    rx="6"
    fill="#ffb3c6"
  />

  {/* 🎂 CAKE TOP */}
  <rect
    x="54"
    y="88"
    width="32"
    height="10"
    rx="5"
    fill="#ffd6e8"
  />

  {/* 🕯️ CAKE CANDLE */}
  <rect x="68" y="78" width="4" height="10" fill="#ff8fab" />
  <circle className="cake-flame" cx="70" cy="74" r="4" />

  {/* 🦵 LEGS */}
  <ellipse className="leg left-leg" cx="55" cy="150" rx="10" ry="6" fill="#000" />
  <ellipse className="leg right-leg" cx="85" cy="150" rx="10" ry="6" fill="#000" />
</svg>

    </div>
  );
}
