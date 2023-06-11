import { Preferences } from "@capacitor/preferences";
import { exerciseProgressions, routines, routineData } from "./data";

class Database {
  async seedDatabase() {
    for (const { id } of routines) {
      const { value } = await Preferences.get({ key: `routine.${id}` });
      if (!value) {
        const data = routineData[id];

        await Preferences.set({
          key: `routine.${id}`,
          value: JSON.stringify(data),
        });
      }
    }
  }

  async updateProgression(
    routine: "rr",
    pair: string,
    progressionName: string,
    newExercise: string
  ) {
    const { value } = await Preferences.get({
      key: `routine.${routine}`,
    });

    if (!value) {
      throw Error("Routine not found");
    }

    const data: typeof routineData.rr = JSON.parse(value);
    const exercise = data.workout
      .find(({ name }) => name === pair)
      ?.exercises.find(({ progression }) => progression === progressionName);

    if (!exercise) {
      throw Error("Exercise not found");
    }

    exercise.exercise = newExercise;

    await Preferences.set({
      key: `routine.${routine}`,
      value: JSON.stringify(data),
    });
  }

  getProgression(progressionName: string) {
    return exerciseProgressions.find(({ name }) => name === progressionName);
  }

  getExercise(progressionName: string, exerciseName: string) {
    return this.getProgression(progressionName)?.exercises.find(
      ({ name }) => name === exerciseName
    ) as
      | {
          name: string;
          reps: number[];
          type?: "time";
        }
      | undefined;
  }

  getRoutines() {
    return routines;
  }

  async getRoutine(id: "rr") {
    const { value } = await Preferences.get({
      key: `routine.${id}`,
    });

    if (!value) {
      return null;
    }
    return JSON.parse(value) as typeof routineData.rr;
  }

  createWorkout(id: "rr") {
    return {
      id,
      exercises: [] as {
        progression: string;
        exercise: string;
        reps: number;
        time: Date;
      }[],
    };
  }
}

export const database = new Database();
