import { FaTimes } from "react-icons/fa";
import { Title } from "../Title";
import styles from "./Progression.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../../models/db";
import { useLiveQuery } from "dexie-react-hooks";

export function Progression() {
  const { routine, pair, progression } = useParams();
  const progressionData = useLiveQuery(
    () => db.progressions.where({ id: progression }).first(),
    [],
    "loading"
  );

  if (!progressionData || !routine || !pair || !progression) {
    throw Error("Exercise/routine doesn't exist");
  }

  const exerciseData = useLiveQuery(
    async () =>
      db.exercises.bulkGet(
        progressionData !== "loading" ? progressionData.exercises : []
      ),
    [progressionData],
    "loading"
  );

  if (!exerciseData) {
    throw Error("Exercises not found");
  }

  const navigate = useNavigate();

  if (progressionData === "loading" || exerciseData === "loading") {
    return null;
  }

  const { name, exercises, progressions } = progressionData;

  if (progressions.length === 0) {
    throw Error("Exercise has no progressions");
  }

  return (
    <div className="overlay">
      <Title
        button={{
          icon: FaTimes,
          action: () => {
            navigate(-1);
          },
        }}
      >
        {name}
      </Title>

      <div className={styles.progressions}>
        {progressions.map((paths) =>
          paths.map((indexes) => {
            if (typeof indexes === "number") {
              indexes = [indexes];
            }

            return (
              <div className={styles.level}>
                {indexes.map((index) => {
                  if (index === null) {
                    return <div className={styles.progression} />;
                  }

                  return (
                    <button
                      type="button"
                      className={styles.progression}
                      onClick={() => {
                        updateProgression(
                          routine,
                          pair,
                          progression,
                          exercises[index]
                        )
                          .then(() => navigate(-1))
                          .catch((err) => alert(err));
                      }}
                    >
                      <div className={styles.icon}></div>
                      <span className={styles.name}>
                        {exerciseData[index]?.name ?? "no exercise"}
                      </span>
                    </button>
                  );
                })}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

async function updateProgression(
  routine: string,
  pair: string,
  progressionName: string,
  newExercise: string
) {
  const data = await db.routines.where({ id: routine }).first();

  if (!data) {
    throw Error("Routine not found");
  }

  const exercise = data.workout
    .find(({ name }) => name === pair)
    ?.exercises.find(({ progression }) => progression === progressionName);

  if (!exercise) {
    throw Error("Exercise not found");
  }

  exercise.exercise = newExercise;

  await db.routines.update(routine, { workout: data.workout });
}
