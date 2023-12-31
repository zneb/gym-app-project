import styles from "./Workout.module.css";
import { useRef, useState } from "react";
import { Exercise } from "./Exercise";
import { Time } from "./Time";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../lib/db";
import { Workout } from "../../lib/types";
import { useNavigate } from "react-router";
import { BiExit } from "react-icons/bi";
import { useTimer } from "./useTimer";
import { useParams } from "react-router-dom";

export function WorkoutComponent() {
  const { name } = useParams();

  if (!name) {
    throw Error("Routine not found");
  }

  const [isExiting, setIsExiting] = useState(false);
  const { Timer, showTimer, setTimer, hideTimer } = useTimer();
  const navigate = useNavigate();
  const routine = useLiveQuery(() => db.routines.where({ id: name }).first());

  const currentWorkoutRef = useRef(createWorkout(name));

  if (!routine) {
    return null;
  }

  const endWorkout = () => {
    if (!confirm("Are you sure you want to end this workout?")) {
      return;
    }

    if (!currentWorkoutRef.current.exercises.length) {
      navigate(-1);
      return;
    }
    setIsExiting(true);
    db.workouts
      .add(currentWorkoutRef.current)
      .then(() => {
        navigate(-1);
      })
      .catch(() => setIsExiting(false));
  };

  if (!routine) {
    return null;
  }

  const { workout } = routine;

  return (
    <>
      <div className={styles.container}>
        <Time />
        <div className={styles.flex}>
          <button onClick={() => (showTimer ? hideTimer() : setTimer(30))}>
            {showTimer ? "Hide Timer" : "Set Timer"}
          </button>
          <button
            className={styles.exit}
            onClick={endWorkout}
            disabled={isExiting}
          >
            <BiExit />
          </button>
        </div>
      </div>
      <div className={styles.routine}>
        {workout.map(({ name: pair, sets, rest, exercises }) => {
          const setsArr = Array.from(Array(sets).keys());
          return (
            <div className={styles.group} key={pair}>
              <h3 className={styles.title}>{pair}</h3>
              {setsArr.map((set) => (
                <div
                  className={`${styles.set} ${
                    set + 1 === sets ? styles.last : ""
                  }`}
                >
                  {exercises.map(({ progression, exercise }) => (
                    <Exercise
                      progression={progression}
                      exercise={exercise}
                      currentWorkout={currentWorkoutRef}
                      setTimer={setTimer}
                      rest={rest}
                      key={progression + exercise + set}
                    />
                  ))}
                </div>
              ))}
            </div>
          );
        })}
        <Timer />
        <button
          className={styles.end}
          onClick={endWorkout}
          disabled={isExiting}
        >
          End Workout
        </button>
      </div>
    </>
  );
}

function createWorkout(routine: string): Workout {
  return {
    date: new Date().toISOString(),
    routine,
    exercises: [],
  };
}
