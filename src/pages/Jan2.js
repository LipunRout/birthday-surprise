import { useEffect, useState } from "react";

/* 🌸 AUTO SLIDE WISHES (STORY PART) */
const autoWishes = [
  "Ok aji Tame Asithila Dunia Ku ✨💖",
  "And Hm 20 Years lagigala Ame DEKHA heba pain 🫶🌸",
  "But finally dekha heigale MCA re!! 🌿❤️",
  "Gugu Mane achhi Day -1 ✨🤍",
  "Mun ta bhabi b Nathili Ame Katha B heba BOliii 🌙😊",
  "But lately Ame aji akathiii 💫🤝",
  "Nov-21 You texted Me for The first Time 🤍🌙",
  "Hm hm Mun janichi photo pain Karithila so 🔆💞",
  "Mun Greatfull Coz Then Ame katha heba Strat Karithiile 🌸🌍",
  "And aji jaha b bond Ame share karuche 💖🔗",
  "I'm Always GreatFull For You 🌷✨",
  "Hm Mote Bht kharap lage Jetebele Tmku Tens Dekhe 💫",
  "Gugu, your energy feels safe that’s why this bond feels real 🕊️🤍",
  "Gugu mun wish Kare Tme kebe B semity Tens na kara 💭😊",
  "Ki tmr down Time Na asu 🤲💕",
  "and I Know U r a Strong & Pure Soul 🌼💪",
  "And Tame Sabu Khichhi Handle Karineba Nije 👀💞",
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
  "Every Element re Mun Bahut Time deichi 🌸✨",
  "And Tme Janicha Perfection mo PAin kete Matter Kare",
  "So Mun Bht Care & Patience re sabu kichhi baneiichi 🤍🫶",
  "Happy Spiritual Birthday Gugu 💫💞",
  "And Hm Se tale jou chat Option achhi Seta re click Kariki kn Feel kala Kahiba!!!! 💬✨"
];

/* 🌸 AUTO WISH COMPONENT */
function AutoWish() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev =>
        prev < autoWishes.length - 1 ? prev + 1 : prev
      );
    }, 3200);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="auto-wish-card">
      <p key={index} className="auto-wish-text">
        {autoWishes[index]}
      </p>

      <div className="wish-progress">
        {autoWishes.map((_, i) => (
          <span
            key={i}
            className={`wish-dot ${i === index ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}

/* 🌹 MAIN JAN 2 PAGE */
export default function Jan2() {
  const [media, setMedia] = useState([]);
  const [index, setIndex] = useState(0);
  const [showFinal, setShowFinal] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  /* load media */
  useEffect(() => {
    fetch("/jan2/media.json")
      .then(res => res.json())
      .then(data => setMedia(data));
  }, []);

  /* intro wait screen */
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  /* auto-advance images only */
  useEffect(() => {
    if (!media.length || showIntro) return;

    const current = media[index];
    if (!current) return;

    if (current.type === "image") {
      const timer = setTimeout(() => {
        if (index < media.length - 1) {
          setIndex(prev => prev + 1);
        }
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, [index, media, showIntro]);

  /* INTRO CARD */
  if (showIntro) {
    return (
      <div className="page center-box">
        <div className="intro-card">
          <h2>Just a moment 🤍</h2>
          <p className="soft-text">
            This page has a few videos.
            <br />
            It may take a little time to load.
          </p>
          <button
            className="magic-btn mt-3"
            onClick={() => setShowIntro(false)}
          >
            Continue 🤍
          </button>
        </div>
      </div>
    );
  }

/* FINAL MESSAGE */
if (showFinal) {
  return (
    <div className="page center-box">
      <div className="final-card">
        <h2>For You, Gugu 🤍</h2>

        <p className="final-text">
          Hi Gugu,
          <br />
          First thing I’m really sorry for the confusion between
          <br />
          30 and 31.
          <br />
          Happy Birthday, Gugu 🎂✨
        </p>

        <p className="final-text">
          From the very beginning till today,
          <br />
          the way you are just the way you are
          <br />
          that itself is something very beautiful.
        </p>

        <p className="final-text">
          We have shared so many moments,
          <br />
          and the bond we share now
          <br />
          feels strong and unbreakable 🤍
        </p>

        <p className="final-text">
          One thing I truly admire about you is
          <br />
          how you always listen to both sides
          <br />
          before taking a step.
        </p>

        <p className="final-text">
          If I ever start writing about you properly,
          <br />
          I’m sure I could write a lot…
          <br />
          but for now,let this little website speak 💫
        </p>
        <p className="final-text highlight">
          You are very special
          <br />
          your positivity, calmness,
          <br />
          and maturity mean a lot to me 🌸
        </p>

        <p className="final-text">
          Thank you for being in my life.
          <br />
          Truly grateful for you 🤍
        </p>

        <p className="final-sign">
          Happy Birthday, Gem 💎
          <br />
          ✨ Not Youuu ✨
        </p>
      </div>
    </div>
  );
}


  const current = media[index];

  return (
    <div className="page center-box">
      {/* 🌸 AUTO STORY WISHES */}
      <AutoWish />

      {/* 🌹 MEDIA CARD */}
      <div className="romantic-card">
        {current?.type === "image" && (
          <img
            src={current.src}
            alt="memory"
            className="romantic-media"
          />
        )}

        {current?.type === "video" && (
          <video
            src={current.src}
            className="romantic-media"
            muted
            autoPlay
            playsInline
            onEnded={() => {
              if (index < media.length - 1) {
                setIndex(prev => prev + 1);
              }
            }}
          />
        )}

        <p className="romantic-caption">
          {current?.caption}
        </p>

        {/* progress dots */}
        <div className="progress-dots">
          {media.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
            />
          ))}
        </div>

        {/* final button */}
        {index === media.length - 1 && (
          <button
            className="magic-btn mt-3"
            onClick={() => setShowFinal(true)}
          >
            Final Wish 🤍
          </button>
        )}
      </div>
    </div>
  );
}
