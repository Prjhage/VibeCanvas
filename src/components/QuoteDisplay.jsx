import React from "react";
import { motion } from "framer-motion";
import styles from "./QuoteDisplay.module.css";

const QuoteDisplay = ({ mood, quote }) => (
  <motion.div
    className={styles.container}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <h2 className={styles.mood}>Mood: {mood}</h2>
    <p className={styles.quote}>“{quote}”</p>
  </motion.div>
);

export default QuoteDisplay;
