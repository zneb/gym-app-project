import styles from "./Routine.module.css";
import { Link } from "react-router-dom";
import { Title } from "../Title";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../lib/db";
import { ExerciseInfo } from "./ExerciseInfo";
import { FaExchangeAlt } from "react-icons/fa";
import { useState } from "react";

export function Routine() {
  const [routineId, setRoutineId] = useState("recommended-routine");

  const toggleRoutine = () => {
    setRoutineId(
      routineId === "recommended-routine"
        ? "minimalist-routine"
        : "recommended-routine"
    );
  };

  const routine = useLiveQuery(
    () => db.routines.where({ id: routineId }).first(),
    [routineId]
  );

  if (!routine) {
    return null;
  }

  const { id, name, workout } = routine;

  return (
    <>
      <Title
        button={{
          icon: FaExchangeAlt,
          action: toggleRoutine,
        }}
      >
        {name}
      </Title>
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

      <Link className={styles.start} to={`/workout/${id}`}>
        Start Workout
      </Link>
    </>
  );
}
