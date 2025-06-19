// Component: Journal.jsx
import React, { useState } from "react";
import styles from "./Journal.module.css";

const Journal = () => {
  const [entry, setEntry] = useState("");
  const [log, setLog] = useState([]);

  const handleSave = () => {
    setLog([...log, { text: entry, time: new Date().toLocaleString() }]);
    setEntry("");
  };

  return (
    <div className={styles.container}>
      <textarea
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        placeholder="How are you feeling today?"
        className={styles.textarea}
      />
      <button onClick={handleSave}>Save Entry</button>
      <ul className={styles.log}>
        {log.map((item, i) => (
          <li key={i}>
            <b>{item.time}</b>: {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Journal;
