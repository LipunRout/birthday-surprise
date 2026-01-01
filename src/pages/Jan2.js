import { useEffect, useState } from "react";

export default function Jan2() {
  const [media, setMedia] = useState([]);
  const [index, setIndex] = useState(0);
  const [showFinal, setShowFinal] = useState(false);

  // load media list
  useEffect(() => {
    fetch("/jan2/media.json")
      .then(res => res.json())
      .then(data => setMedia(data));
  }, []);

  // auto-advance ONLY for images
  useEffect(() => {
    if (!media.length) return;

    const current = media[index];
    if (!current) return;

    if (current.type === "image") {
      const timer = setTimeout(() => {
        if (index < media.length - 1) {
          setIndex(prev => prev + 1);
        }
      }, 3500); // image duration

      return () => clearTimeout(timer);
    }
  }, [index, media]);

  // final wish screen
  if (showFinal) {
    return (
      <div className="page center-box">
        <div className="final-card">
          <h2>For You</h2>

          <p className="final-text">
            This wasn’t about a date.
            <br />
            It was about how softly
            <br />
            you stay in my thoughts.
          </p>

          <p className="final-text highlight">
            I’m really glad it’s you.
          </p>

          <p className="final-sign">— Not Youuu 🤍</p>
        </div>
      </div>
    );
  }

  const current = media[index];

  return (
    <div className="page center-box">
      <div className="romantic-card">
        {/* IMAGE */}
        {current?.type === "image" && (
          <img
            src={current.src}
            alt="memory"
            className="romantic-media"
          />
        )}

        {/* VIDEO */}
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


        {/* Final button */}
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
