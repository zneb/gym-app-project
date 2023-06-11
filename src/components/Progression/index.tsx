import { FaTimes } from "react-icons/fa";
import { exerciseProgressions, getProgression } from "../../assets/database";
import { Title } from "../Title";
import styles from "./Progression.module.css";
import { useNavigate, useParams } from "react-router-dom";

export function Progression() {
  const { name: nameParam } = useParams();
  const progression = getProgression(nameParam || "");

  if (!progression) {
    throw Error("Exercise doesn't exist");
  }

  const navigate = useNavigate();
  const { name, exercises, progressions } = progression;

  if (!progressions) {
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
                        alert("changed");
                      }}
                    >
                      <div className={styles.icon}></div>
                      <span className={styles.name}>
                        {exercises[index].name}
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
