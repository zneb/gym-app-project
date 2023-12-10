import styles from "./Routine.module.css";
import { Link } from "react-router-dom";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../lib/db";

export function ExerciseInfo({
  progression,
  exercise,
  routine,
  pair,
}: {
  progression: string;
  exercise: string;
  routine: string;
  pair: string;
}) {
  const progressionData = useLiveQuery(() =>
    db.progressions.where({ id: progression }).first()
  );

  const exerciseData = useLiveQuery(() =>
    db.exercises.where({ id: exercise }).first()
  );

  if (!progressionData || !exerciseData) {
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

  return progressionData.progressions.length ? (
    <Link
      to={`/progression/${routine}/${pair}/${progression}`}
      className={styles.exercise}
    >
      {content}
    </Link>
  ) : (
    <div className={styles.exercise}>{content}</div>
  );
}
