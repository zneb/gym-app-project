type ExerciseId = string;
type ProgressionId = string;
type RoutineId = string;

export interface User {
  username: string;
  weight: string | null;
  height: string | null;
  sessionid: string;
}

export interface Exercise {
  id: ExerciseId;
  name: string;
  reps: number[];
  type: "reps" | "time";
}

export interface Progression {
  id: ProgressionId;
  name: string;
  exercises: ExerciseId[];
  progressions: (number | (number | null)[])[][];
}

export interface Routine {
  id: RoutineId;
  name: string;
  workout: {
    name: string;
    sets: number;
    rest: number;
    exercises: { progression: ProgressionId; exercise: ExerciseId }[];
  }[];
}

export interface Workout {
  date: string;
  routine: RoutineId;
  exercises: {
    progression: string;
    exercise: string;
    count: number;
    time: string;
  }[];
}
