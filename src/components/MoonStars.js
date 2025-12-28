export default function MoonStars() {
  return (
    <div className="night-sky">
      <div className="moon"></div>

      {/* Stars */}
      {Array.from({ length: 25 }).map((_, i) => (
        <span key={i} className="star"></span>
      ))}
    </div>
  );
}
