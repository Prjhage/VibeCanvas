import React from "react";
import { motion } from "framer-motion";
import styles from "./MoodSelector.module.css";

const moods = [
  { label: "Happy", emoji: "😊" },
  { label: "Sad", emoji: "😢" },
  { label: "Motivated", emoji: "💪" },
  { label: "Tired", emoji: "😴" },
  { label: "Angry", emoji: "😠" },
];

const MoodSelector = ({ setMood }) => (
  <div className={styles.selector}>
    {moods.map(({ label, emoji }) => (
      <motion.button
        key={label}
        onClick={() => setMood(label)}
        className={styles.button}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className={styles.emoji}>{emoji}</span>
        {label}
      </motion.button>
    ))}
  </div>
);

export default MoodSelector;
