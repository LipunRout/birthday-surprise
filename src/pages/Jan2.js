import { useEffect, useState } from "react";

export default function Jan2() {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const target = new Date("2025-01-01T00:00:00");

    const timer = setInterval(() => {
      setTimeLeft(target - new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (timeLeft <= 0) {
    return (
      <div className="center-card">
        <h2>Happy Birthday, Not Youuu 💖</h2>
        <p>
          You waited.  
          And this moment waited for you.
        </p>
      </div>
    );
  }

  const hours = Math.floor(timeLeft / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <div className="page center-box">
      <h2>Almost there ⏳</h2>
      <p>
        {hours}h {minutes}m {seconds}s left
      </p>
      <p>
        Good things don’t rush.  
        Neither did this.
      </p>
    </div>
  );
}
