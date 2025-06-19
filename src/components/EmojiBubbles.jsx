import React from "react";
import styles from "./EmojiBubbles.module.css";

const emojiMap = {
  Happy: ["😊", "🌞", "✨", "🎉"],
  Sad: ["😢", "💧", "🌧️", "😭"],
  Angry: ["😠", "🔥", "💣", "😤"],
  Motivated: ["💪", "🚀", "🏆", "🔥"],
  Tired: ["😴", "💤", "🌙", "😌"],
};

const EmojiBubbles = ({ mood = "Happy" }) => {
  const emojis = emojiMap[mood] || [];

  return (
    <div className={styles.bubbleContainer}>
      {Array.from({ length: 20 }).map((_, i) => {
        const emoji = emojis[i % emojis.length];
        const left = Math.random() * 100;
        const delay = Math.random() * 5;

        return (
          <span
            key={i}
            className={styles.emoji}
            style={{
              left: `${left}%`,
              animationDelay: `${delay}s`,
            }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
};

export default EmojiBubbles;
