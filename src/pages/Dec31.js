import { useEffect, useRef, useState } from "react";
import PandaGif from "../components/PandaGif";
// import { useNavigate } from "react-router-dom";

const wishesList = [
  "You light up every room, and somehow my world too ✨💖",
  "Seeing you happy makes everything feel right 🫶🌸",
  "Soft soul, strong heart and a bond getting stronger 🌿❤️",
  "Quietly unforgettable, just like what we share ✨🤍",
  "Gugu, your smile stays with me long after the moment 🌙😊",
  "Some people shine loud, but we glow together 💫🤝",
  "Not youuu making silence feel safe between us 🤍🌙",
  "You carry warmth, and it reaches me every time 🔆💞",
  "Gugu, when you’re happy, the world feels lighter 🌸🌍",
  "Your kindness doesn’t just speak, it connects us 💖🔗",
  "Not youuu being the reason moments feel special 🌷✨",
  "We turn ordinary days into memories together 📸💫",
  "Gugu, your energy feels safe that’s why this bond feels real 🕊️🤍",
  "Not youuu leaving happiness behind without trying 💭😊",
  "Your heart shows, and that’s what brings us closer 🤲💕",
  "Gugu, softness really is strength especially in us 🌼💪",
  "You make me feel seen, and that deepens everything 👀💞",
  "Not youuu being the calm that holds us steady 🌊🤍",
  "Your presence feels like a promise we’re keeping ✨🫶",
  "Gugu, grace looks different when it’s shared 🌺🤍",
  "You don’t need to be loud our bond speaks for itself ⚡💖",
  "Not youuu turning feelings into comfort for both of us 🫶🌙",
  "You’re gentle, never weak and that’s why this works 🌱🤍",
  "Gugu, your smile<3 😊🌈",
  "You feel familiar, because this bond feels real 🌍💞",
  "Not youuu being someone who makes connections deeper 💌✨",
];

export default function Dec31() {
  const [wishes, setWishes] = useState([]);
  const [hearts, setHearts] = useState([]);

  const shuffledWishesRef = useRef(
    [...wishesList].sort(() => Math.random() - 0.5)
  );

  const [wishIndex, setWishIndex] = useState(0);
  const bottomRef = useRef(null);

  // auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [wishes]);

  // wish flow
  useEffect(() => {
    if (wishIndex >= shuffledWishesRef.current.length) return;

    const interval = setInterval(() => {
      setWishes((prev) => [...prev, shuffledWishesRef.current[wishIndex]]);
      setWishIndex((prev) => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, [wishIndex]);

  // heart rain
  const dropHeart = () => {
    const id = Date.now();
    setHearts((prev) => [...prev, id]);

    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => h !== id));
    }, 3000);
  };

  return (
    <>
      <PandaGif />

      <div className="page center-box dec31" onClick={dropHeart}>
        <h2>Happy Spiritual Birthday ✨</h2>
        <p>(Not Youuu) refers to you 🌸</p>

        <div className="wishes-scroll">
          {wishes.map((w, i) => (
            <div key={i} className={`wish-item`}>
              <p className="wish">{w}</p>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>
        

        {hearts.map((h) => (
          <span
            key={h}
            className="heart-rain"
            style={{ left: `${Math.random() * 100}vw` }}
          >
            💖
          </span>
        ))}
      </div>
    </>
  );
}
