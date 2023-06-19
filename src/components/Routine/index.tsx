import styles from "./Routine.module.css";
import { Link } from "react-router-dom";
import { Title } from "../Title";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../models/db";
import { ExerciseInfo } from "./ExerciseInfo";

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
          <div className={styles.group} key={pair}>
            <h3 className={styles.title}>{pair}</h3>
            {exercises.map(({ progression, exercise }) => (
              <ExerciseInfo
                progression={progression}
                exercise={exercise}
                routine={routine.id}
                pair={pair}
                key={progression + exercise}
              />
            ))}
          </div>
        ))}
      </div>

      <Link className={styles.start} to="/workout/recommended-routine">
        Start Workout
      </Link>
    </>
  );
}
