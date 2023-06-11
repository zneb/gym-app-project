import styles from "./Routine.module.css";
import {
  getExercise,
  getProgression,
  getRoutine,
  getRoutines,
} from "../../assets/database";
import { Link } from "react-router-dom";
import { Title } from "../Title";
import { FaCheck } from "react-icons/fa";

export function Routine({ started }: { started?: boolean }) {
  const { name, workout } = getRoutine(getRoutines()[0].id);

  return (
    <>
      <Title>{name}</Title>
      <div className={styles.routine}>
        {workout.map(({ name, exercises }) => (
          <div className={styles.group}>
            <h3 className={styles.title}>{name}</h3>
            {exercises.map(({ progression, exercise }) => {
              const progressionData = getProgression(progression);
              const exerciseData = getExercise(progression, exercise);

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
                  {started ? (
                    <div className={styles.reps}>
                      <input
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        value={reps[reps.length - 1]}
                      />
                      <button>
                        <FaCheck />
                      </button>
                    </div>
                  ) : (
                    <span>{repCount}</span>
                  )}
                </>
              );

              return progressionData?.progressions && !started ? (
                <Link
                  to={`/progression/${progression}`}
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
      {!started && (
        <Link className={styles.start} to="/workout/rr">
          Start Workout
        </Link>
      )}
    </>
  );
}
