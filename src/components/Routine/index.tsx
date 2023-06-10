import { useState } from "react";
import styles from "./Routine.module.css";

const workout = [
  {
    name: "Warm-Up",
    sets: 1,
    exercises: [
      { name: "Yuri's Shoulder Band Warmup", reps: [5, 10] },
      { name: "Squat Sky Reaches", reps: [5, 10] },
      { name: "GMB Wrist Prep", reps: [10] },
      { name: "Deadbugs", reps: [10] },
      { name: "Arch Hang", reps: [30], type: "time" },
      { name: "Parallel Bar Support Hold", reps: [30], type: "time" },
      { name: "Bulgarian Split Squat", reps: [10] },
    ],
  },

  {
    name: "Pair 1",
    sets: 3,
    rest: 90,
    exercises: [
      { name: "Pull-up", reps: [5, 8] },
      { name: "Partial ROM Pistol Squat", reps: [5, 8] },
    ],
  },

  {
    name: "Pair 2",
    sets: 3,
    rest: 90,
    exercises: [
      { name: "Parrallel Bar Dip", reps: [5, 8] },
      { name: "Beginner Harop Curl", reps: [5, 8] },
    ],
  },

  {
    name: "Pair 3",
    sets: 3,
    rest: 90,
    exercises: [
      { name: "Incline Row", reps: [5, 8] },
      { name: "Push-Up", reps: [5, 8] },
    ],
  },

  {
    name: "Core triplet",
    sets: 3,
    rest: 60,
    exercises: [
      { name: "Tucked Hanging Leg Raise", reps: [8, 12] },
      { name: "Copenhagen Plank", reps: [15, 30], type: "time" },
      { name: "Hyper Extension", reps: [8, 12] },
    ],
  },
];

export function Routine() {
  const [started, setStarted] = useState(false);

  return (
    <>
      <div className={styles.routine}>
        {workout.map(({ name, exercises }) => (
          <div className={styles.group}>
            <h3 className={styles.title}>{name}</h3>
            {exercises.map(({ name, reps, type }) => {
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
