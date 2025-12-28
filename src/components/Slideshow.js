import { useEffect, useRef, useState } from "react";

export default function Slideshow({
  folder,
  total,
  interval = 3000
}) {
  const [index, setIndex] = useState(1);
  const [captions, setCaptions] = useState({});
  const startX = useRef(0);

  /* 🔹 PRELOAD IMAGES */
  useEffect(() => {
    for (let i = 1; i <= total; i++) {
      const img = new Image();
      img.src = `/photos/${folder}/${i}.png`;
    }
  }, [folder, total]);

  useEffect(() => {
    fetch(`/photos/${folder}/captions.json`)
      .then(res => {
        if (!res.ok) {
          throw new Error("Captions file not found");
        }
        return res.json();
      })
      .then(data => {
        setCaptions(data);
      })
      .catch(err => {
        console.error("Caption fetch error:", err);
        setCaptions({});
      });
  }, [folder]);
  
  /* 🔹 AUTO SLIDE */
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev % total) + 1);
    }, interval);
    return () => clearInterval(timer);
  }, [total, interval]);

  /* 🔹 SWIPE HANDLERS */
  const onTouchStart = e => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = e => {
    const endX = e.changedTouches[0].clientX;
    if (startX.current - endX > 50) next();
    if (endX - startX.current > 50) prev();
  };

  const next = () => setIndex(i => (i % total) + 1);
  const prev = () => setIndex(i => (i === 1 ? total : i - 1));

  return (
    <div
      className="slideshow"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <img
        key={index}
        src={`/photos/${folder}/${index}.png`}
        alt="memory"
        className="slide-img"
      />

      {/* 💖 HEART SPARKLES */}
      <span className="sparkle">💖</span>
      <span className="sparkle delay2">💕</span>

      {/* 📝 CAPTION */}
      <p className="caption">
  {captions[String(index)] || ""}
</p>

    </div>
  );
}
