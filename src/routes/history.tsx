import { useLiveQuery } from "dexie-react-hooks";
import { Title } from "../components/Title";
import { db } from "../models/db";

export function History() {
  const workouts = useLiveQuery(() => db.workouts.toArray());

  if (!workouts) return null;
  return (
    <>
      <Title>History</Title>
      <div className="page">
        <div style={{ overflowY: "scroll" }}>
          {workouts.map(({ date, exercises }) => (
            <div key={date}>
              <span>{date}</span>
              <div>
                {exercises.map(({ progression, exercise, count }, index) => (
                  <div key={index}>
                    <div>{progression}</div>
                    <div>{exercise}</div>
                    <div>{count}</div>
                    <br />
                  </div>
                ))}
                <br />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
