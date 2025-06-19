import React from "react";
import { motion } from "framer-motion";
import styles from "./MoodArt.module.css";
import { useEffect } from "react";

import happyImg from "../assets/happy.webp";
import sadImg from "../assets/sad.webp";
import motivatedImg from "../assets/motivation.jpeg";
import tiredImg from "../assets/tired.jpg";
import angryImg from "../assets/angry.avif";

const moodImages = {
  happy: happyImg,
  sad: sadImg,
  motivated: motivatedImg,
  tired: tiredImg,
  angry: angryImg,
};

const MoodArt = ({ mood }) => {
  const moodKey = mood.toLowerCase();
  const imageFile = moodImages[moodKey] || happyImg; // Default to happy image if mood not found

  // Set the background image dynamically

  return (
    <motion.div
      className={styles.artContainer}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <img src={imageFile} alt={`${mood} mood visual`} className={styles.art} />
    </motion.div>
  );
};

export default MoodArt;
