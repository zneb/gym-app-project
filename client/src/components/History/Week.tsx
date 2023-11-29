import { Workout } from "../../models/types";
import styles from "./History.module.css";

function getLastSunday() {
  const d = new Date();
  d.setDate(d.getDate() - d.getDay());
  return d;
}

function addDays(date: Date, days: number) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export function Week({ workouts }: { workouts: Workout[] }) {
  const sundayDate = getLastSunday();
  const todayDate = new Date();

  return (
    <div className={styles.week}>
      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => {
        const currentDay = addDays(sundayDate, index);

        const dayHasWorkout = workouts.some((workout) => {
          const workoutDate = new Date(workout.date);

          return (
            workoutDate.getDate() === currentDay.getDate() &&
            workoutDate.getMonth() === currentDay.getMonth() &&
            workoutDate.getFullYear() === currentDay.getFullYear()
          );
        });

        const activeClass = dayHasWorkout
          ? styles.hasworkout
          : currentDay.getDate() === todayDate.getDate()
          ? styles.today
          : "";
        return (
          <div className={styles.weekday}>
            <span className={styles.daytext}>{day}</span>
            <div className={`${styles.weeknumber} ${activeClass}`}>
              {currentDay.getDate()}
            </div>
          </div>
        );
      })}
    </div>
  );
}
