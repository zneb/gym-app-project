import { useEffect, useRef, useState } from "react";
import styles from "./Workout.module.css";
import { formatTime } from "./formatTime";

function Timer({
  ticking,
  setTicking,
  currentTime,
  setCurrentTime,
}: {
  ticking: boolean;
  setTicking: React.Dispatch<React.SetStateAction<boolean>>;
  currentTime: number;
  setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
}) {
  const intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!ticking) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      return;
    }
    intervalRef.current = setInterval(
      () => setCurrentTime((ct) => ct - 1),
      1000
    );

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [ticking, setCurrentTime]);

  const mins = formatTime(Math.floor(currentTime / 60));
  const secs = formatTime(currentTime % 60);

  return (
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
      <button
        onClick={() => {
          setTicking(!ticking);
        }}
      >
        {ticking ? "Stop" : "Start"}
      </button>
    </div>
  );
}

export function useTimer() {
  const [showTimer, setShowTimer] = useState(false);
  const [ticking, setTicking] = useState(false);
  const [currentTime, setCurrentTime] = useState(30);

  useEffect(() => {
    if (currentTime <= 0) {
      setShowTimer(false);
    }
  }, [currentTime, setTicking]);

  const setTimer = (time: number, autoTick = false) => {
    setCurrentTime(time);
    setTicking(autoTick);
    setShowTimer(true);
  };

  const hideTimer = () => {
    setTicking(false);
    setShowTimer(false);
  };

  return {
    Timer: () =>
      showTimer && (
        <Timer
          ticking={ticking}
          setTicking={setTicking}
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
        />
      ),
    showTimer,
    setTimer,
    hideTimer,
  };
}