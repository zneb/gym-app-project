import styles from "./Workout.module.css";
import { Title } from "../Title";
import { useRef } from "react";
import { Exercise } from "./Exercise";
import { Timer } from "./Timer";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../models/db";

export function Workout() {
  const routine = useLiveQuery(() =>
    db.routines.where({ id: "recommended-routine" }).first()
  );

  const currentWorkoutRef = useRef(createWorkout("recommended-routine"));

  if (!routine) {
    return null;
  }

  const { name, workout } = routine;

  return (
    <>
      <Title left={<Timer />}>{name}</Title>
      <div className={styles.routine}>
        {workout.map(({ name: pair, sets, exercises }) => {
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
                      key={progression + exercise + set}
                    />
                  ))}
                </div>
              ))}
            </div>
          );
        })}
        <button
          className={styles.end}
          onClick={() => console.log(currentWorkoutRef.current)}
        >
          End Workout
        </button>
      </div>
    </>
  );
}

function createWorkout(id: string) {
  return {
    id,
    exercises: [] as {
      progression: string;
      exercise: string;
      reps: number;
      time: Date;
    }[],
  };
}
