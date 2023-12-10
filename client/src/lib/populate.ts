import { db } from "./db";

export function populate() {
  populateExercises();
  populateProgressions();
  populateRoutines();
}

async function populateExercises() {
  const exercises = await fetch("http://localhost:3000/exercises").then((res) =>
    res.json()
  );

  db.exercises.bulkAdd(exercises);
}

async function populateProgressions() {
  const progressions = await fetch("http://localhost:3000/progressions").then(
    (res) => res.json()
  );

  db.progressions.bulkAdd(progressions);
}

async function populateRoutines() {
  const routines = await fetch("http://localhost:3000/routines").then((res) =>
    res.json()
  );

  db.routines.bulkAdd(routines);
}
