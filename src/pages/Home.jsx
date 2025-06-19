// src/pages/Home.jsx
import React, { useState } from "react";
import MoodSelector from "../components/MoodSelector";
import QuoteDisplay from "../components/QuoteDisplay";
import MoodArt from "../components/MoodArt";
import AudioPlayer from "../components/AudioPlayer";

import styles from "./Home.module.css";
import quotes from "../data/quotes.json";
import EmojiBubbles from "../components/EmojiBubbles"; // 🫧 floating emojis!

const Home = () => {
  const [mood, setMood] = useState(null);
  const [quote, setQuote] = useState("");

  const handleMoodChange = (newMood) => {
    setMood(newMood);
    const quoteList = quotes[newMood];
    setQuote(quoteList[Math.floor(Math.random() * quoteList.length)]);
  };
  const moodClass = mood ? styles[mood.toLowerCase()] : "";
  return (
    <div className={`${styles.container} ${moodClass}`} data-mood={mood}>
      <EmojiBubbles mood={mood || "Happy"} /> {/* 🫧 floating emojis! */}{" "}
      {/* Corrected line */}
      <h1 className={styles.title}>Mood-Based Quote & Art Generator 🎨✨</h1>
      <MoodSelector setMood={handleMoodChange} />
      {mood && (
        <>
          <MoodArt mood={mood} />
          <QuoteDisplay mood={mood} quote={quote} />
          <AudioPlayer mood={mood} />
        </>
      )}
    </div>
  );
};

export default Home;
