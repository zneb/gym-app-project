import styles from "./Routine.module.css";
import { database } from "../../assets/database";
import { Link } from "react-router-dom";
import { Title } from "../Title";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../models/db";

export function Routine() {
  const routine = useLiveQuery(() =>
    db.routines.where({ id: "recommended-routine" }).first()
  );

  if (!routine) {
    return null;
  }

  const { name, workout } = routine;

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

                  <span>{repCount}</span>
                </>
              );

              return progressionData?.progressions ? (
                <Link
                  to={`/progression/rr/${pair}/${progression}`}
                  className={styles.exercise}
                >
                  {content}
                </Link>
              ) : (
                <div className={styles.exercise}>{content}</div>
              );
            })}
          </div>
        ))}
      </div>

      <Link className={styles.start} to="/workout/rr">
        Start Workout
      </Link>
    </>
  );
}
