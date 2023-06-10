import { FaTimes } from "react-icons/fa";
import { exerciseProgressions } from "../../assets/database";
import { Title } from "../Title";
import styles from "./Progression.module.css";
import { useNavigate } from "react-router-dom";

export function Progression() {
  const navigate = useNavigate();
  const { name, exercises, progressions } = exerciseProgressions[7];

  if (!progressions) {
    throw Error("Exercise has no progressions");
  }

  return (
    <>
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
                {indexes.map((index) => (
                  <button
                    type="button"
                    className={styles.progression}
                    onClick={() => {
                      alert("changed");
                    }}
                  >
                    <div className={styles.icon}></div>
                    <span className={styles.name}>{exercises[index].name}</span>
                  </button>
                ))}
              </div>
            );
          })
        )}
      </div>
    </>
  );
}
