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
    name: "GMB Wrist Prep",
    exercises: [{ name: "GMB Wrist Prep", reps: [10] }],
  },

  {
    name: "Deadbugs",
    exercises: [{ name: "Deadbugs", reps: [10] }],
  },

  {
    name: "Arch Hang",
    exercises: [{ name: "Arch Hang", reps: [30], type: "time" }],
  },

  {
    name: "Parallel Bar Support Hold",
    exercises: [
      { name: "Parallel Bar Support Hold", reps: [30], type: "time" },
    ],
  },

  {
    name: "Bulgarian Split Squat",
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
      { name: "Vertical Row", reps: [5, 8] },
      { name: "Incline Row", reps: [5, 8] },
      { name: "Horizontal Row", reps: [5, 8] },
      { name: "Wide Row", reps: [5, 8] },
      { name: "Weighted Inverted Row", reps: [5, 8] },
      { name: "Tuck Front Lever", reps: [5, 8] },
      { name: "Archer Row", reps: [5, 8] },
      { name: "Tuck Front Lever Pull", reps: [5, 8] },
      { name: "One Arm Row", reps: [5, 8] },
      { name: "Advanced Tuck Front Lever", reps: [5, 8] },
      { name: "Advanced Tuck Front Lever Pull", reps: [5, 8] },
      { name: "Half Straddle Front Lever", reps: [5, 8] },
      { name: "Half Straddle Front Lever Pull", reps: [5, 8] },
      { name: "Straddle Front Lever", reps: [5, 8] },
      { name: "Straddle Front Lever Pull", reps: [5, 8] },
      { name: "Half Lay Front Lever", reps: [5, 8] },
      { name: "Half Lay Front Lever Pull", reps: [5, 8] },
      { name: "Full Lay Front Lever", reps: [5, 8] },
      { name: "Full Lay Front Lever Pull", reps: [5, 8] },
    ],
    progressions: [
      [
        0,
        1,
        2,
        3,
        [4, 5, 6],
        [null, 7, 8],
        [null, 9, null],
        [null, 10, null],
        [null, 11, null],
        [null, 12, null],
        [null, 13, null],
        [null, 14, null],
        [null, 15, null],
        [null, 16, null],
        [null, 17, null],
        [null, 18, null],
      ],
    ],
  },

  {
    name: "Push-Up Progression",
    exercises: [
      { name: "Vertical Push-up", reps: [5, 8] },
      { name: "Incline Push-up", reps: [5, 8] },
      { name: "Push-Up", reps: [5, 8] },
      { name: "Diamond Push-up", reps: [5, 8] },
      { name: "Pseudo Planche Push-Up", reps: [5, 8] },
      { name: "Rings Push-Up", reps: [5, 8] },
      { name: "RTO Push-Up", reps: [5, 8] },
    ],
    progressions: [[0, 1, 2, 3, [4, 5], [null, 6]]],
  },

  {
    name: "Anti-extension Progression",
    exercises: [
      { name: "Plank", reps: [15, 30], type: "time" },
      { name: "Ring Ab Rollout", reps: [8, 12] },
      { name: "Kneeling Ab Wheel Rollout", reps: [8, 12] },
      { name: "Tucked Hanging Leg Raise", reps: [8, 12] },
      { name: "Pike Compression", reps: [8, 12] },
      { name: "Standing Ab Wheel Rollout", reps: [8, 12] },
      { name: "Pike Hanging Leg Raise", reps: [8, 12] },
      { name: "Straight Hanging Leg Raise", reps: [8, 12] },
    ],
    progressions: [
      [0, [1, 2, 3, 4], [null, 5, 6, null], [null, null, 7, null]],
    ],
  },

  {
    name: "Anti-rotation Progression",
    exercises: [
      { name: "Banded Pallof Press", reps: [8, 12] },
      { name: "Assisted Knee Copenhagen Plank", reps: [8, 12] },
      { name: "Ring Pallof Press", reps: [8, 12] },
      { name: "Knee Copenhagen Plank", reps: [8, 12] },
      { name: "Assisted Copenhagen Plank", reps: [8, 12] },
      { name: "Copenhagen Plank", reps: [8, 12] },
      { name: "Copenhagen Plank With Movement", reps: [8, 12] },
    ],
    progressions: [
      [
        [0, 1, 2],
        [null, 3, null],
        [null, 4, null],
        [null, 5, null],
        [null, 6, null],
      ],
    ],
  },

  {
    name: "Extension Progression",
    exercises: [
      { name: "Reverse Hyperextension", reps: [8, 12] },
      { name: "Arch Raise", reps: [8, 12] },
      { name: "Hyper Extension", reps: [8, 12] },
      { name: "Arch Body Hold", reps: [15, 30], type: "time" },
      { name: "Arch Body Rocks", reps: [8, 12] },
    ],
    progressions: [
      [
        [0, 1, 2],
        [null, 3, null],
        [null, 4, null],
      ],
    ],
  },
];

export const routines: { id: "rr"; name: string }[] = [
  { id: "rr", name: "Recommended Routine" },
];

export const routineData = {
  rr: {
    name: "Recommended Routine",
    workout: [
      {
        name: "Warm-Up",
        sets: 1,
        exercises: [
          {
            progression: "Yuri's Shoulder Band Warmup",
            exercise: "Yuri's Shoulder Band Warmup",
          },
          { progression: "Squat Sky Reaches", exercise: "Squat Sky Reaches" },
          { progression: "GMB Wrist Prep", exercise: "GMB Wrist Prep" },
          { progression: "Deadbugs", exercise: "Deadbugs" },
          { progression: "Arch Hang", exercise: "Arch Hang" },
          {
            progression: "Parallel Bar Support Hold",
            exercise: "Parallel Bar Support Hold",
          },
          {
            progression: "Bulgarian Split Squat",
            exercise: "Bulgarian Split Squat",
          },
        ],
      },

      {
        name: "Pair 1",
        sets: 3,
        rest: 90,
        exercises: [
          {
            progression: "Pull-up Progression",
            exercise: "Scapular Pull",
          },
          {
            progression: "Squat Progression",
            exercise: "Assisted Squat",
          },
        ],
      },

      {
        name: "Pair 2",
        sets: 3,
        rest: 90,
        exercises: [
          {
            progression: "Dip Progression",
            exercise: "Parallel Bar Support Hold",
          },
          {
            progression: "Hinge Progression",
            exercise: "Romanian Deadlift",
          },
        ],
      },

      {
        name: "Pair 3",
        sets: 3,
        rest: 90,
        exercises: [
          {
            progression: "Row Progression",
            exercise: "Vertical Row",
          },
          {
            progression: "Push-Up Progression",
            exercise: "Vertical Push-up",
          },
        ],
      },

      {
        name: "Core triplet",
        sets: 3,
        rest: 60,
        exercises: [
          {
            progression: "Anti-extension Progression",
            exercise: "Plank",
          },
          {
            progression: "Anti-rotation Progression",
            exercise: "Banded Pallof Press",
          },
          {
            progression: "Extension Progression",
            exercise: "Reverse Hyperextension",
          },
        ],
      },
    ],
  },
};
