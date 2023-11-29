import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../models/db";
import styles from "./History.module.css";

export function ExerciseLog({
  exercise,
  count,
}: {
  exercise: string;
  count: number;
}) {
  const exerciseData = useLiveQuery(() =>
    db.exercises.where({ id: exercise }).first()
  );

  if (!exerciseData) return null;

  return (
    <div className={styles.exercise}>
      <span>{exerciseData.name}</span>
      <span>{count}</span>
    </div>
  );
}
