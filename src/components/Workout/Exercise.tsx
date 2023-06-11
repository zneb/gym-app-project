import { FaCheck } from "react-icons/fa";
import { database } from "../../assets/database";
import styles from "./Workout.module.css";
import { useRef, useState } from "react";

export function Exercise({
  progression,
  exercise,
  currentWorkout,
}: {
  progression: string;
  exercise: string;
  currentWorkout: React.MutableRefObject<{
    id: "rr";
    exercises: {
      progression: string;
      exercise: string;
      reps: number;
      time: Date;
    }[];
  }>;
}) {
  const progressionData = database.getProgression(progression);
  const exerciseData = database.getExercise(progression, exercise);

  const [completed, setCompleted] = useState<{
    index: number;
    exercise: {
      progression: string;
      exercise: string;
      reps: number;
      time: Date;
    };
  } | null>(null);

  const repsRef = useRef<HTMLInputElement | null>(null);
  if (!exerciseData) {
    return "failed";
  }

  const { name, reps, type } = exerciseData;

  const suffix = type === "time" ? "s" : "";
  const repCount = `${reps[0]}${suffix}${
    reps[1] ? ` - ${reps[1]}${suffix}` : ""
  }`;

  const content = (
    <>
      <div className={styles.icon}></div>
      <div className={styles.left}>
        <span className={styles.name}>{name}</span>
        <span className={styles.rep}>{repCount}</span>
      </div>

      <div className={styles.reps}>
        {completed ? (
          <div className={styles.completed}>{completed.exercise.reps}</div>
        ) : (
          <>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              defaultValue={reps[reps.length - 1]}
              ref={repsRef}
            />
            <button
              onClick={() => {
                const currentExercise = {
                  progression,
                  exercise,
                  reps:
                    parseInt(repsRef.current?.value || "0", 10) ??
                    reps[reps.length - 1],
                  time: new Date(),
                };

                currentWorkout.current.exercises.push(currentExercise);

                setCompleted({
                  exercise: currentExercise,
                  index: currentWorkout.current.exercises.length - 1,
                });
              }}
            >
              <FaCheck />
            </button>
          </>
        )}
      </div>
    </>
  );

  return <div className={styles.exercise}>{content}</div>;
}
