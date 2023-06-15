type ExerciseId = string;
type ProgressionId = string;
type RoutineId = string;
type WorkoutId = string;

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
  progressions: (string | (string | null)[])[][];
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
  id: WorkoutId;
  routine: RoutineId;
  exercises: {
    progression: string;
    exercise: string;
    reps: number;
    time: Date;
  }[];
}