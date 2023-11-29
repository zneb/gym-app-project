import { useEffect, useReducer, useState } from "react";
import styles from "./Workout.module.css";
import { formatTime } from "./formatTime";

function Timer({
  state,
  dispatch,
}: {
  state: stateType;
  dispatch: React.Dispatch<actionType>;
}) {
  const [elapsed, setElapsed] = useState(() =>
    getElapsed(state.startedTime, state.timeLeft)
  );

  useEffect(() => {
    const interval = state.startedTime
      ? setInterval(
          () => setElapsed(getElapsed(state.startedTime, state.timeLeft)),
          1000
        )
      : undefined;

    return () => clearInterval(interval);
  }, [state.startedTime, state.timeLeft]);

  useEffect(() => {
    if (elapsed < 0) {
      dispatch({ type: "hide" });
    }
  }, [dispatch, elapsed]);

  const mins = formatTime(Math.floor(elapsed / 60) % 60);
  const secs = formatTime(elapsed % 60);
  return (
    <div className={styles.timer}>
      <div className={styles.timeDisplay}>
        {mins}:{secs}
      </div>
      <div className={styles.timerEdit}>
        <button
          className={styles.timerButton}
          onClick={() => {
            dispatch({ type: "decrement", time: 10 });
          }}
          disabled={state.timeLeft <= 10}
        >
          -10
        </button>
        <button
          className={styles.timerButton}
          onClick={() => {
            dispatch({ type: "decrement", time: 5 });
          }}
          disabled={state.timeLeft <= 5}
        >
          -5
        </button>
        <button
          className={styles.startButton}
          onClick={() => {
            dispatch({ type: state.startedTime ? "stop" : "start" });
          }}
        >
          {state.startedTime ? "Stop" : "Start"}
        </button>
        <button
          className={styles.timerButton}
          onClick={() => {
            dispatch({ type: "increment", time: 5 });
          }}
          disabled={state.timeLeft >= 12 * 60}
        >
          +5
        </button>
        <button
          className={styles.timerButton}
          onClick={() => {
            dispatch({ type: "increment", time: 10 });
          }}
          disabled={state.timeLeft >= 12 * 60}
        >
          +10
        </button>
      </div>
    </div>
  );
}

export function useTimer() {
  const [state, dispatch] = useReducer(timerReducer, {
    show: false,
    startedTime: null,
    timeLeft: 30,
  });

  return {
    Timer: () => state.show && <Timer state={state} dispatch={dispatch} />,
    showTimer: state.show,
    setTimer: (time: number, start?: boolean) => {
      dispatch({ type: "set", time });
      dispatch({ type: "show" });
      if (start) {
        dispatch({ type: "start" });
      }
    },
    hideTimer: () => dispatch({ type: "hide" }),
  };
}

function timerReducer(state: stateType, action: actionType) {
  switch (action.type) {
    case "show":
      return { ...state, show: true, timeLeft: action.time ?? state.timeLeft };
    case "hide":
      return {
        show: false,
        startedTime: null,
        timeLeft: 30,
      };
    case "start":
      return {
        ...state,
        startedTime: Date.now(),
      };
    case "stop":
      return {
        ...state,
        startedTime: null,
        timeLeft: getElapsed(state.startedTime, state.timeLeft),
      };
    case "set":
      return { ...state, timeLeft: action.time };
    case "increment":
      return { ...state, timeLeft: state.timeLeft + action.time };
    case "decrement":
      return { ...state, timeLeft: state.timeLeft - action.time };
  }
}

function getElapsed(startedTime: number | null, timeLeft: number) {
  return startedTime
    ? timeLeft - Math.floor((Date.now() - startedTime) / 1000)
    : timeLeft;
}

type stateType = {
  show: boolean;
  startedTime: number | null;
  timeLeft: number;
};

type actionType =
  | {
      type: "hide" | "start" | "stop";
    }
  | { type: "set" | "increment" | "decrement"; time: number }
  | { type: "show"; time?: number };
