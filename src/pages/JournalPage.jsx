import React from "react";
import Journal from "../components/Journal";
import styles from "./JournalPage.module.css";

const JournalPage = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Daily Mood Journal 📓</h1>
    <Journal />
  </div>
);

export default JournalPage;
