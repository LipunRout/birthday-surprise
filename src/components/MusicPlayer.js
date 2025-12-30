import { useRef, forwardRef, useImperativeHandle } from "react";

const MusicPlayer = forwardRef((props, ref) => {
  const audioRef = useRef(null);

  const playMusic = () => {
    if (!audioRef.current) return;
    audioRef.current.volume = 0.25;
    audioRef.current.play().catch(() => {});
  };

  useImperativeHandle(ref, () => ({
    playMusic
  }));

  return (
    <audio
      ref={audioRef}
      src="/music/gugu.mp3"
      loop
    />
  );
});

export default MusicPlayer;
