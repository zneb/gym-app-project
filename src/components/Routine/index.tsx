import { useState } from "react";
import styles from "./Routine.module.css";
import { getExercise, baseWorkout } from "../../assets/database";
import { Link } from "react-router-dom";

export function Routine() {
  const [started, setStarted] = useState(false);
  const workout = [...baseWorkout];

  return (
    <>
      <div className={styles.routine}>
        {workout.map(({ name, exercises }) => (
          <div className={styles.group}>
            <h3 className={styles.title}>{name}</h3>
            {exercises.map(({ progression, exercise }) => {
              const exerciseData = getExercise(progression, exercise);

              if (!exerciseData) {
                return "failed";
              }

              const { name, reps, type } = exerciseData;

              const suffix = type === "time" ? "s" : "";
              const repCount = `${reps[0]}${suffix}${
                reps[1] ? ` - ${reps[1]}${suffix}` : ""
              }`;

              return (
                <Link
                  to={`/progression/${progression}`}
                  className={styles.exercise}
                >
                  <div className={styles.icon}></div>
                  <span>{name}</span>
                  <span>{repCount}</span>
                </Link>
              );
            })}
          </div>
        ))}
      </div>
      {!started && (
        <button
          className={styles.start}
          type="button"
          onClick={() => setStarted(true)}
        >
          Start Workout
        </button>
      )}
    </>
  );
}
