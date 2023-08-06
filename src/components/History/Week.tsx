import { Workout } from "../../models/types";
import styles from "./History.module.css";

function getLastSunday() {
  const d = new Date();
  d.setDate(d.getDate() - d.getDay());
  return d;
}

export function Week({ workouts }: { workouts: Workout[] }) {
  const sundayDate = getLastSunday().getDate();

  return (
    <div className={styles.week}>
      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => {
        const dayHasWorkout = workouts.some(
          (workout) => new Date(workout.date).getDate() === sundayDate + index
        );

        return (
          <div className={styles.weekday}>
            <span className={styles.daytext}>{day}</span>
            <div
              className={`${styles.weeknumber} ${
                dayHasWorkout ? styles.hasworkout : ""
              }`}
            >
              {sundayDate + index}
            </div>
          </div>
        );
      })}
    </div>
  );
}
