import { useLiveQuery } from "dexie-react-hooks";
import { Title } from "../Title";
import { db } from "../../models/db";
import styles from "./History.module.css";
import { ExerciseLog } from "./ExerciseLog";
import { FaCaretLeft, FaCaretRight, FaTrash } from "react-icons/fa";
import { useState } from "react";
import { Week } from "./Week";

export function History() {
  const [currentWorkout, setCurrentWorkout] = useState(0);
  const workouts = useLiveQuery(() => db.workouts.reverse().toArray());

  if (!workouts?.length)
    return (
      <>
        <Title>History</Title>
        <p className={styles.empty}>No workouts</p>
      </>
    );

  const workoutData = workouts[currentWorkout];

  return (
    <>
      <Title>History</Title>
      <div className="page">
        <Week workouts={workouts.slice(-10)} />
        <div className={styles.dates}>
          <button
            onClick={() => setCurrentWorkout(currentWorkout + 1)}
            disabled={currentWorkout === workouts.length - 1}
          >
            <FaCaretLeft />
          </button>
          {new Date(workoutData.date).toLocaleString("en-CA", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
          })}
          <button
            onClick={() => setCurrentWorkout(currentWorkout - 1)}
            disabled={currentWorkout === 0}
          >
            <FaCaretRight />
          </button>
        </div>
        <div className={styles.container}>
          <div className={styles.workout} key={workoutData.date}>
            <div className={styles.top}>
              <span className={styles.date}>
                {new Date(workoutData.date).toLocaleString("en-CA", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })}{" "}
                Workout
              </span>
              <button
                className={styles.delete}
                onClick={() => {
                  if (confirm("Delete this workout?")) {
                    if (currentWorkout != 0) {
                      setCurrentWorkout(currentWorkout - 1);
                    }
                    db.workouts.where({ date: workoutData.date }).delete();
                  }
                }}
              >
                <FaTrash />
              </button>
            </div>
            <div className={styles.exercises}>
              {workoutData.exercises.map(({ exercise, count }, index) => (
                <ExerciseLog exercise={exercise} count={count} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
