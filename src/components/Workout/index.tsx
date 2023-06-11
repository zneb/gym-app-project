import styles from "./Workout.module.css";
import { database } from "../../assets/database";
import { Link, useLocation } from "react-router-dom";
import { Title } from "../Title";
import { FaCheck } from "react-icons/fa";
import { useEffect, useState } from "react";

export function Workout() {
  const [data, setData] =
    useState<Awaited<ReturnType<typeof database.getRoutine>>>();
  const location = useLocation();

  const [currentWorkout, setCurrentWorkout] = useState(
    database.createWorkout("rr")
  );

  useEffect(() => {
    database
      .getRoutine(database.getRoutines()[0].id)
      .then((routine) => setData(routine));
  }, [location.pathname]);

  if (!data) {
    return null;
  }

  const { name, workout } = data;

  return (
    <>
      <Title>{name}</Title>
      <div className={styles.routine}>
        {workout.map(({ name: pair, exercises }) => (
          <div className={styles.group}>
            <h3 className={styles.title}>{pair}</h3>
            {exercises.map(({ progression, exercise }) => {
              const progressionData = database.getProgression(progression);
              const exerciseData = database.getExercise(progression, exercise);

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
                  <span>{name}</span>

                  <div className={styles.reps}>
                    <input
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      value={reps[reps.length - 1]}
                    />
                    <button
                      onClick={() => {
                        setCurrentWorkout((oldWorkout) => {
                          oldWorkout.exercises.push({
                            progression,
                            exercise,
                            reps: 10,
                            time: new Date(),
                          });

                          return { ...oldWorkout };
                        });
                      }}
                    >
                      <FaCheck />
                    </button>
                  </div>
                </>
              );

              return <div className={styles.exercise}>{content}</div>;
            })}
          </div>
        ))}
        <Link className={styles.end} to="/workout/rr">
          End Workout
        </Link>
      </div>
    </>
  );
}
