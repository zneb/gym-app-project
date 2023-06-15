import Dexie, { Table } from "dexie";

export class AppDB extends Dexie {
  exercises!: Table<any, number>;
  progressions!: Table<any, number>;

  constructor() {
    super("AppDB");
    this.version(1).stores({
      exercises: "++id",
      progressions: "++id",
      routines: "++id",
      workouts: "++id",
    });
  }
}

export const db = new AppDB();
