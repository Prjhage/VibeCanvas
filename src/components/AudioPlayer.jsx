import React, { useEffect, useRef } from "react";
import styles from "./AudioPlayer.module.css";

// Import audio files
import lofi from "../assets/sounds/lofi.mp3";
import rain from "../assets/sounds/rain.mp3";
import focus from "../assets/sounds/focus.mp3";
import nature from "../assets/sounds/nature.mp3";
import calm from "../assets/sounds/calm.mp3";

const AudioPlayer = ({ mood }) => {
  const audioRef = useRef(null);

  const moodMap = {
    Happy: lofi,
    Sad: rain,
    Motivated: focus,
    Tired: nature,
    Angry: calm,
  };

  const audioSrc = moodMap[mood] || lofi;

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      audioRef.current.play().catch((e) => {
        console.warn("Playback prevented:", e);
      });
    }
  }, [audioSrc]);

  return (
    <div className={styles.container}>
      <audio controls autoPlay loop ref={audioRef}>
        <source src={audioSrc} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
