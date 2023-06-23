import { useState } from "react";
import styles from "./Workout.module.css";
import { formatTime } from "./formatTime";

export function useTimer() {
  const [currentTime, setCurrentTime] = useState(30);

  const mins = formatTime(Math.floor(currentTime / 60));
  const secs = formatTime(currentTime % 60);
  return () => (
    <div className={styles.timer}>
      <div className={styles.timerEdit}>
        <button
          onClick={() => {
            setCurrentTime(currentTime - 5);
          }}
          disabled={currentTime <= 5}
        >
          -
        </button>
        <div className={styles.timeDisplay}>
          {mins}:{secs}
        </div>
        <button
          onClick={() => {
            setCurrentTime(currentTime + 5);
          }}
          disabled={currentTime >= 12 * 60}
        >
          +
        </button>
      </div>
      <button>Start</button>
    </div>
  );
}
