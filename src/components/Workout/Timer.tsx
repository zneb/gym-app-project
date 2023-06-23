import { useState } from "react";
import styles from "./Workout.module.css";

export function Timer() {
  const currentTime = useState(30);

  return (
    <div className={styles.timer}>
      <div className={styles.timerEdit}>
        <button>-</button>
        <div className={styles.timeDisplay}>00:00</div>
        <button>+</button>
      </div>
      <button>Start</button>
    </div>
  );
}
