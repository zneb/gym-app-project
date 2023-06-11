import styles from "./Workout.module.css";
import { database } from "../../assets/database";
import { useLocation } from "react-router-dom";
import { Title } from "../Title";
import { useEffect, useRef, useState } from "react";
import { Exercise } from "./Exercise";

export function Workout() {
  const [data, setData] =
    useState<Awaited<ReturnType<typeof database.getRoutine>>>();
  const location = useLocation();

  useEffect(() => {
    database
      .getRoutine(database.getRoutines()[0].id)
      .then((routine) => setData(routine));
  }, [location.pathname]);

  const currentWorkoutRef = useRef(database.createWorkout("rr"));

  if (!data) {
    return null;
  }

  const { name, workout } = data;

  return (
    <>
      <Title>{name}</Title>
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
          onClick={() => console.log(currentWorkout)}
        >
          End Workout
        </button>
      </div>
    </>
  );
}
