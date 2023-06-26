import Dexie, { Table } from "dexie";
import { Exercise, Progression, Routine, Workout } from "./types";
import { populate } from "./populate";

export class AppDB extends Dexie {
  exercises!: Table<Exercise, string>;
  progressions!: Table<Progression, string>;
  routines!: Table<Routine, string>;
  workouts!: Table<Workout, string>;

  constructor() {
    super("AppDB");
    this.version(2).stores({
      exercises: "id",
      progressions: "id",
      routines: "id",
      workouts: "date",
    });
  }

  resetData() {
    db.delete();
    location.reload();
  }
}

export const db = new AppDB();

db.on("populate", populate);
