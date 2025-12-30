import { useEffect, useState } from "react";

export default function GlobalMessage() {
  const [visible, setVisible] = useState(true);

  // auto hide after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 25000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="global-message-overlay">
      <div className="global-message-card">
        <p className="global-message-text">
          Please wait for 10sec...<br />
          Mun Bahut care & patience  🌸<br />
          Re Baneichi A space Ta Tama Pain,😚<br />
          So please Sabu Page Re 1-2Min deba,🙃<br />
          Sabu Element Dekhiba,If Kichhi<br />
          Bhala Nalagiba Sry🫣 <br />
          With lots of love 💖 <br />
          and a lot of feeling 🤍
        </p>

        <button
          className="global-message-btn"
          onClick={() => setVisible(false)}
        >
          Hau Bujhili🤭✨
        </button>
      </div>
    </div>
  );
}
