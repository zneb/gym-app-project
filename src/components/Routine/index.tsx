import { useState } from "react";
import styles from "./Routine.module.css";
import { getDatabase } from "../../assets/database";

const workout = [
  {
    name: "Warm-Up",
    sets: 1,
    exercises: [
      {
        progression: "Yuri's Shoulder Band Warmup",
        exercise: "Yuri's Shoulder Band Warmup",
      },
      { progression: "Squat Sky Reaches", exercise: "Squat Sky Reaches" },
      { progression: "GMB Wrist Prep", exercise: "GMB Wrist Prep" },
      { progression: "Deadbugs", exercise: "Deadbugs" },
      { progression: "Arch Hang", exercise: "Arch Hang" },
      {
        progression: "Parallel Bar Support Hold",
        exercise: "Parallel Bar Support Hold",
      },
      {
        progression: "Bulgarian Split Squat",
        exercise: "Bulgarian Split Squat",
      },
    ],
  },

  {
    name: "Pair 1",
    sets: 3,
    rest: 90,
    exercises: [
      {
        progression: "Pull-up Progression",
        exercise: "Scapular Pull",
      },
      {
        progression: "Squat Progression",
        exercise: "Assisted Squat",
      },
    ],
  },

  {
    name: "Pair 2",
    sets: 3,
    rest: 90,
    exercises: [
      {
        progression: "Dip Progression",
        exercise: "Parallel Bar Support Hold",
      },
      {
        progression: "Hinge Progression",
        exercise: "Romanian Deadlift",
      },
    ],
  },

  {
    name: "Pair 3",
    sets: 3,
    rest: 90,
    exercises: [
      {
        progression: "Row Progression",
        exercise: "Vertical Row",
      },
      {
        progression: "Push-Up Progression",
        exercise: "Vertical Push-up",
      },
    ],
  },

  {
    name: "Core triplet",
    sets: 3,
    rest: 60,
    exercises: [
      {
        progression: "Anti-extension Progression",
        exercise: "Plank",
      },
      {
        progression: "Anti-rotation Progression",
        exercise: "Banded Pallof Press",
      },
      {
        progression: "Extension Progression",
        exercise: "Reverse Hyperextension",
      },
    ],
  },
];

export function Routine() {
  const [started, setStarted] = useState(false);
  const { getExercise } = getDatabase();

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
                <div className={styles.exercise}>
                  <span>{name}</span>
                  <span>{repCount}</span>
                </div>
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
