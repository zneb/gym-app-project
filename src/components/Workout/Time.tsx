import { useEffect, useMemo, useState } from "react";
import styles from "./Workout.module.css";
import { formatTime } from "./formatTime";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;

export function Time() {
  const startTime = useMemo(() => Date.now(), []);
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setElapsed(Date.now() - startTime),
      1000
    );

    return () => clearInterval(interval);
  }, [startTime]);

  const hoursNumber = elapsed / HOUR;

  const hours = hoursNumber < 1 ? false : formatTime(elapsed / HOUR);
  const minutes = formatTime((elapsed / MINUTE) % 60);
  const seconds = formatTime((elapsed / SECOND) % 60);
  return (
    <div className={styles.time}>
      {hours && `${hours}:`}
      {minutes}:{seconds}
    </div>
  );
}
