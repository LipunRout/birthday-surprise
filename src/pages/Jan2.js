import { useEffect, useMemo, useState } from "react";

export default function Jan2() {
  // 🎯 NEXT Jan 2, 12:00 AM (memoized once)
  const target = useMemo(
    () => new Date("2026-01-02T00:00:00"),
    []
  );

  const [timeLeft, setTimeLeft] = useState(
    target - new Date()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(target - new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, [target]);

  if (timeLeft <= 0) {
    return (
      <div className="page center-box">
        <div className="countdown-card">
          <h2>Happy Birthday, Not Youuu 💖</h2>
          <p className="soft-text">
            You waited.
            <br />
            And this moment was always meant to be yours.
          </p>
        </div>
      </div>
    );
  }

  const hours = String(
    Math.floor(timeLeft / (1000 * 60 * 60))
  ).padStart(2, "0");

  const minutes = String(
    Math.floor((timeLeft / (1000 * 60)) % 60)
  ).padStart(2, "0");

  const seconds = String(
    Math.floor((timeLeft / 1000) % 60)
  ).padStart(2, "0");

  return (
    <div className="page center-box">
      <div className="countdown-card">
        <h2 className="countdown-title">Almost there</h2>

        <div className="countdown-timer">
          <TimeBox value={hours} label="Hours" />
          <span className="colon">:</span>
          <TimeBox value={minutes} label="Minutes" />
          <span className="colon">:</span>
          <TimeBox value={seconds} label="Seconds" />
        </div>

        <p className="soft-text">
          January 2 • 12:00 AM
          <br />
          Some moments are meant to be felt slowly.
          <br />
          This one is waiting for you.
        </p>
      </div>
    </div>
  );
}

function TimeBox({ value, label }) {
  return (
    <div className="time-box">
      <span className="time-value">{value}</span>
      <span className="time-label">{label}</span>
    </div>
  );
}
