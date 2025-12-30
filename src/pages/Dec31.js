import { useEffect, useRef, useState } from "react";
import PandaGif from "../components/PandaGif";

const wishesList = [
  "Ok aji Tame Asithila Dunia Ku ✨💖",
  "And Hm 20 Years lagigala Ame DEKHA heba pain 🫶🌸",
  "But finally dekha heigale MCA re!! 🌿❤️",
  "Gugu Mane achhi Day -1 ✨🤍",
  "Mun ta bhabi b Nathili Ame Katha B heba BOliii 🌙😊",
  "But lately Ame aji akathiii 💫🤝",
  "Nov-21 You texted Me for The first Time🤍🌙",
  "Hm hm Mun janichi photo pain Karithila so, 🔆💞",
  "Mun Greatfull Coz Then Ame katha heba Strat Karithiile 🌸🌍",
  "And aji jaha b bond Ame share karuche💖🔗",
  "I'm Always GreatFull For You🌷✨",
  "Hm Mote Bht kharap lage Jetebele Tmku Tens Dekhe 💫",
  "Gugu, your energy feels safe that’s why this bond feels real 🕊️🤍",
  "Gugu mun wish Kare Tme kebe B semity Tens na kara 💭😊",
  "Ki tmr down Time Na asu 🤲💕",
  "and I Know U r a Strong & Pure Soul  🌼💪",
  "And Tame Sabu Khichhi Handle Karineba Nije  👀💞",
  "But i don't Want ki tmr Kebe Semity kichhi B dina Asu 🌊🤍",
  "And jadi b asuchi tme eka na face na kara ✨🫶",
  "Mun achhi as Always You Know.. But tme Ta janicha au.. 🌺🤍",
  "You don’t need to be loud our bond speaks for itself ⚡💖",
  "And Hm Mun Bht Kichi Sikhichi Tmku 🫶🌙",
  "Sesabu Kahibi Pakhre Thila bele 🌱🤍",
  "Gugu, Pleaseeeee smileeeee <3 😊🌈",
  "And I know Ata Kichhi Bada jinsa nuha...",
  "A website Ta...",
  "But Seriously I make It from the bottom of my heart 💖",
  "Every Element re Mun Bahut Time deichi  🌸✨",
  "And Tme Janicha Perfection mo PAin kete MAtter KAre",
  "So Mun Bht Care & Patience re sabu kichhi baneiichi  🤍🫶",
  "Happy Spiritual Birthday Gugu 💫💞",
  "And Hm Se tale jou chat OPtion achhi Seta re click KAriki kn Feel kala KAhiba!!!! 💬✨",
];

export default function Dec31() {
  const [wishes, setWishes] = useState([]);
  const [hearts, setHearts] = useState([]);

  const wishesRef = useRef(wishesList);
  const [wishIndex, setWishIndex] = useState(0);
  const bottomRef = useRef(null);

  /* 🔹 Auto-scroll when new wish appears */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [wishes]);

  /* 🔹 Wish flow (ORDERED) */
  useEffect(() => {
    if (wishIndex >= wishesRef.current.length) return;

    const interval = setInterval(() => {
      setWishes(prev => [...prev, wishesRef.current[wishIndex]]);
      setWishIndex(prev => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, [wishIndex]);

  /* 💖 Heart rain on tap */
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
        <h2>Happy Spiritual Birthday ✨</h2>
        <p>(Not Youuu) refers to you 🌸</p>

        <div className="wishes-scroll">
          {wishes.map((w, i) => {
            const isLast = i === wishes.length - 1;

            return (
              <div
                key={i}
                className={`wish-item ${isLast ? "last-wish" : ""}`}
              >
                <p className="wish">{w}</p>
              </div>
            );
          })}
          <div ref={bottomRef} />
        </div>

        {hearts.map(h => (
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
