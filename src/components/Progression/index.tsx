import { FaTimes } from "react-icons/fa";
import { database } from "../../assets/database";
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

  const navigate = useNavigate();

  if (progressionData === "loading") {
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
            if (typeof indexes === "string") {
              indexes = [indexes];
            }

            return (
              <div className={styles.level}>
                {indexes.map((name, index) => {
                  if (name === null) {
                    return <div className={styles.progression} />;
                  }

                  return (
                    <button
                      type="button"
                      className={styles.progression}
                      onClick={() => {
                        database
                          .updateProgression(
                            routine as any,
                            pair,
                            progression,
                            exercises[index]
                          )
                          .then(() => navigate(-1))
                          .catch((err) => alert(err));
                      }}
                    >
                      <div className={styles.icon}></div>
                      <span className={styles.name}>{exercises[index]}</span>
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
