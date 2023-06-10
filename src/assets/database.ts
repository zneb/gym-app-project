export const exerciseProgressions = [
  {
    name: "Yuri's Shoulder Band Warmup",
    exercises: [{ name: "Yuri's Shoulder Band Warmup", reps: [5, 10] }],
  },
  {
    name: "Squat Sky Reaches",
    exercises: [{ name: "Squat Sky Reaches", reps: [5, 10] }],
  },
  {
    name: "Yuri's Shoulder Band Warmup",
    exercises: [{ name: "GMB Wrist Prep", reps: [10] }],
  },
  {
    name: "Yuri's Shoulder Band Warmup",
    exercises: [{ name: "Deadbugs", reps: [10] }],
  },
  {
    name: "Yuri's Shoulder Band Warmup",
    exercises: [{ name: "Arch Hang", reps: [30], type: "time" }],
  },
  {
    name: "Yuri's Shoulder Band Warmup",
    exercises: [
      { name: "Parallel Bar Support Hold", reps: [30], type: "time" },
    ],
  },
  {
    name: "Yuri's Shoulder Band Warmup",
    exercises: [{ name: "Bulgarian Split Squat", reps: [10] }],
  },

  {
    name: "Pull-up Progression",
    exercises: [
      { name: "Scapular Pull", reps: [5, 8] },
      { name: "Arch Hang", reps: [15, 30], type: "time" },
      { name: "Pull-up Negative", reps: [5, 8] },
      { name: "Pull-up", reps: [5, 8] },
      { name: "Weighted Pull-up", reps: [5, 8] },
      { name: "L-sit Pull-up", reps: [5, 8] },
      { name: "Arch Body Pull-Up", reps: [5, 8] },
      { name: "Type-writer Pull-up", reps: [5, 8] },
    ],
    progressions: [[0, 1, 2, 3, [4, 5, 6, 7]]],
  },

  {
    name: "Squat Progression",
    exercises: [
      { name: "Assisted Squat", reps: [5, 8] },
      { name: "Squat", reps: [5, 8] },
      { name: "Split Squat", reps: [5, 8] },
      { name: "Bulgerian Split Squat", reps: [5, 8] },
      { name: "Beginner Shrimp Squat", reps: [5, 8] },
      { name: "Step-up", reps: [5, 8] },
      { name: "Partial ROM Pistol Squat", reps: [5, 8] },
      { name: "Intermediate Shrimp Squat", reps: [5, 8] },
      { name: "Advanced Shrimp Squat", reps: [5, 8] },
      { name: "Advanced Shrimp Squat", reps: [5, 8] },
      { name: "Type-writer Pull-up", reps: [5, 8] },
      { name: "Weighted Shrimp Squat", reps: [5, 8] },
    ],
    progressions: [
      [0, 1, 2, 3, [4, 5, 6], [7, 8, 9], [10, null, null], [11, null, null]],
    ],
  },

  {
    name: "Dip Progression",
    exercises: [
      { name: "Parallel Bar Support Hold", reps: [15, 30], type: "time" },
      { name: "Negative Dip", reps: [5, 8] },
      { name: "Parallel Bar Dip", reps: [5, 8] },
      { name: "Weighted Dip", reps: [5, 8] },
      { name: "Ring Dip", reps: [5, 8] },
      { name: "Ring RTO Dip", reps: [5, 8] },
    ],
    progressions: [[0, 1, 2, [3, 4], [null, 5]]],
  },

  {
    name: "Hinge Progression",
    exercises: [
      { name: "Romanian Deadlift", reps: [5, 8] },
      { name: "Single Legged Deadlift", reps: [5, 8] },
      { name: "Banded Nordic Curl Negatives", reps: [5, 8] },
      { name: "Beginner Harop Curl", reps: [5, 8] },
      { name: "Glute Ham Raise", reps: [5, 8] },
      { name: "Negative Hamstring Slide", reps: [5, 8] },
      { name: "Banded Nordic Curl", reps: [5, 8] },
      { name: "Advanced Harop Curl", reps: [5, 8] },
      { name: "Hamstring Slide", reps: [5, 8] },
      { name: "Nordic Curl", reps: [5, 8] },
      { name: "Eccentric Single Leg Hamstring Slide", reps: [5, 8] },
      { name: "Single Leg Hamstring Slide", reps: [5, 8] },
    ],
    progressions: [
      [
        0,
        1,
        [2, 3, 4, 5],
        [6, 7, null, 8],
        [9, null, null, 10],
        [null, null, null, 11],
      ],
    ],
  },

  {
    name: "Row Progression",
    exercises: [
      { name: "Parallel Bar Support Hold", reps: [15, 30], type: "time" },
      { name: "Negative Dip", reps: [5, 8] },
      { name: "Parallel Bar Dip", reps: [5, 8] },
      { name: "Weighted Dip", reps: [5, 8] },
      { name: "Ring Dip", reps: [5, 8] },
      { name: "Ring RTO Dip", reps: [5, 8] },
    ],
    progressions: [[0, 1, 2, [3, 4], [null, 5]]],
  },
];

export function getDatabase() {
  return {
    getProgression: (progressionName: string) =>
      exerciseProgressions.find(({ name }) => name === progressionName),
  };
}
