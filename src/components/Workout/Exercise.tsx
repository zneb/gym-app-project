import { FaCheck } from "react-icons/fa";
import styles from "./Workout.module.css";
import { useRef, useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../models/db";
import { Workout } from "../../models/types";

export function Exercise({
  progression,
  exercise,
  currentWorkout,
  setTimer,
  rest,
}: {
  progression: string;
  exercise: string;
  currentWorkout: React.MutableRefObject<Workout>;
  setTimer(time: number, autoTick: boolean): void;
  rest: number;
}) {
  const exerciseData = useLiveQuery(() =>
    db.exercises.where({ id: exercise }).first()
  );

  const [completed, setCompleted] = useState<{
    index: number;
    exercise: Workout["exercises"][0];
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
          <div className={styles.completed}>{completed.exercise.count}</div>
        ) : (
          <>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              defaultValue={reps[reps.length - 1]}
              ref={repsRef}
              onFocus={(event) => event.target.select()}
            />
            <button
              onClick={() => {
                const currentExercise = {
                  progression,
                  exercise,
                  count:
                    parseInt(repsRef.current?.value || "0", 10) ??
                    reps[reps.length - 1],
                  time: new Date().toISOString(),
                };

                currentWorkout.current.exercises.push(currentExercise);

                setCompleted({
                  exercise: currentExercise,
                  index: currentWorkout.current.exercises.length - 1,
                });

                if (rest !== 0) {
                  setTimer(rest, true);
                }
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
