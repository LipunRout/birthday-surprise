import { useEffect,useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
import PandaGif from "../components/PandaGif";





const wishesList = [
  "You light up every room ✨",
  "You are deeply loved 💖",
  "Soft soul, strong heart 🌿❤️",
  "Quietly unforgettable ✨",
  "Gugu, you have a presence that lingers long after you leave 🌙",
  "Some people shine loud, you glow gently 💫",
  "Not youuu making silence feel comforting 🤍",
  "You carry warmth like it’s second nature 🔆",
  "Gugu, the world feels calmer when you’re around 🌸",
  "Your kindness speaks before your words do 💖",
  "Not youuu being effortlessly special 🌷",
  "You turn ordinary moments into memories 📸✨",
  "Gugu, your energy feels safe and rare 🕊️",
  "You don’t chase attention, yet it finds you 🌟",
  "Not youuu leaving an impression without trying 💭",
  "Your heart shows in the smallest gestures 🤲💕",
  "Gugu, you’re proof that softness is strength 🌼💪",
  "You make people feel seen without asking questions 👀💞",
  "Not youuu being the calm in the chaos 🌊",
  "Your presence feels like a quiet promise 🤍✨",
  "Gugu, you carry grace in your simplest moments 🌺",
  "You don’t need to be loud to be powerful ⚡",
  "Not youuu turning feelings into comfort 🫶",
  "You are gentle, but never weak 🌱",
  "Gugu, your smile changes the mood of a room 😊🌈",
  "You feel familiar, even to strangers 🌍🤍",
  "Not youuu being someone people remember fondly 💌",
];

export default function Dec31() {
  const [wishes, setWishes] = useState([]);
  const [hearts, setHearts] = useState([]);
  const [showConfetti, setShowConfetti] = useState(true);
  // const navigate = useNavigate();
  const shuffledWishesRef = useRef(
    [...wishesList].sort(() => Math.random() - 0.5)
  );
  const bottomRef = useRef(null);

  
  const [wishIndex, setWishIndex] = useState(0);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [wishes]);
  
  useEffect(() => {
    if (wishIndex >= shuffledWishesRef.current.length) return;
  
    const interval = setInterval(() => {
      setWishes(prev => [
        ...prev,
        shuffledWishesRef.current[wishIndex]
      ]);
      setWishIndex(prev => prev + 1);
    }, 2000);
  
    return () => clearInterval(interval);
  }, [wishIndex]);
  
  
  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const dropHeart = () => {
    const id = Date.now();
    setHearts(prev => [...prev, id]);
    setTimeout(() => {
      setHearts(prev => prev.filter(h => h !== id));
    }, 3000);
  };

  return (
    <>
    <PandaGif />
    <div className="page center-box dec31" onClick={dropHeart}>
    {/* <button
  className="final-btn"
  onClick={() => navigate("/letter")}
>
  Final Message 💌
</button> */}

      
      {showConfetti && <div className="confetti">🎉 🎊 ✨ 🎇</div>}

      <h2>Happy Spiritual Birthday ✨</h2>

      {/* <div className="candle">
        <span className="flame"></span>
      </div>
       */}

<div className="wishes-scroll">
  {wishes.map((w, i) => (
    <div
      key={i}
      className={`wish-item ${i === wishes.length - 1 ? "new-wish" : ""}`}
    >
      <p className="wish">{w}</p>
    </div>
  ))}
  <div ref={bottomRef} />

</div>


      {hearts.map(h => (
        <span key={h} className="heart-rain">💖</span>
      ))}
    </div>
    </>
  );
}
