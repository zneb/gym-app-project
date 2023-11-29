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

function populateProgressions() {
  db.progressions.bulkAdd([
    {
      id: "yuris-shoulder-band-warmup",
      name: "Yuri's Shoulder Band Warmup",
      exercises: ["yuris-shoulder-band-warmup"],
      progressions: [],
    },
    {
      id: "squat-sky-reaches",
      name: "Squat Sky Reaches",
      exercises: ["squat-sky-reaches"],
      progressions: [],
    },
    {
      id: "gmb-wrist-prep",
      name: "GMB Wrist Prep",
      exercises: ["gmb-wrist-prep"],
      progressions: [],
    },
    {
      id: "deadbugs",
      name: "Deadbugs",
      exercises: ["deadbugs"],
      progressions: [],
    },
    {
      id: "arch-hang",
      name: "Arch Hang",
      exercises: ["arch-hang"],
      progressions: [],
    },
    {
      id: "parallel-bar-support-hold",
      name: "Parallel Bar Support Hold",
      exercises: ["parallel-bar-support-hold"],
      progressions: [],
    },
    {
      id: "bulgarian-split-squat",
      name: "Bulgarian Split Squat",
      exercises: ["bulgarian-split-squat"],
      progressions: [],
    },
    {
      id: "pullup-progression",
      name: "Pull-up Progression",
      exercises: [
        "scapular-pull",
        "arch-hang",
        "pullup-negative",
        "pullup",
        "weighted-pullup",
        "lsit-pullup",
        "arch-body-pullup",
        "typewriter-pullup",
        "archer-pullup",
      ],
      progressions: [[0, 1, 2, 3, [4, 5, 6, 7], [null, null, null, 8]]],
    },
    {
      id: "squat-progression",
      name: "Squat Progression",
      exercises: [
        "assisted-squat",
        "squat",
        "split-squat",
        "bulgarian-split-squat",
        "beginner-shrimp-squat",
        "stepup",
        "partial-rom-pistol-squat",
        "intermediate-shrimp-squat",
        "advanced-shrimp-squat",
        "advanced-shrimp-squat",
        "typewriter-pullup",
        "weighted-shrimp-squat",
      ],
      progressions: [
        [0, 1, 2, 3, [4, 5, 6], [7, 8, 9], [10, null, null], [11, null, null]],
      ],
    },
    {
      id: "dip-progression",
      name: "Dip Progression",
      exercises: [
        "parallel-bar-support-hold",
        "negative-dip",
        "parallel-bar-dip",
        "weighted-dip",
        "ring-dip",
        "ring-rto-dip",
      ],
      progressions: [[0, 1, 2, [3, 4], [null, 5]]],
    },
    {
      id: "hinge-progression",
      name: "Hinge Progression",
      exercises: [
        "romanian-deadlift",
        "single-legged-deadlift",
        "banded-nordic-curl-negatives",
        "beginner-harop-curl",
        "glute-ham-raise",
        "negative-hamstring-slide",
        "banded-nordic-curl",
        "advanced-harop-curl",
        "hamstring-slide",
        "nordic-curl",
        "eccentric-single-leg-hamstring-slide",
        "single-leg-hamstring-slide",
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
      id: "row-progression",
      name: "Row Progression",
      exercises: [
        "vertical-row",
        "incline-row",
        "horizontal-row",
        "wide-row",
        "weighted-inverted-row",
        "tuck-front-lever",
        "archer-row",
        "tuck-front-lever-pull",
        "one-arm-row",
        "advanced-tuck-front-lever",
        "advanced-tuck-front-lever-pull",
        "half-straddle-front-lever",
        "half-straddle-front-lever-pull",
        "straddle-front-lever",
        "straddle-front-lever-pull",
        "half-lay-front-lever",
        "half-lay-front-lever-pull",
        "full-lay-front-lever",
        "full-lay-front-lever-pull",
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
      id: "pushup-progression",
      name: "Push-Up Progression",
      exercises: [
        "vertical-pushup",
        "incline-pushup",
        "pushup",
        "diamond-pushup",
        "pseudo-planche-pushup",
        "rings-pushup",
        "rto-pushup",
      ],
      progressions: [[0, 1, 2, 3, [4, 5], [null, 6]]],
    },
    {
      id: "antiextension-progression",
      name: "Anti-extension Progression",
      exercises: [
        "plank",
        "ring-ab-rollout",
        "kneeling-ab-wheel-rollout",
        "tucked-hanging-leg-raise",
        "pike-compression",
        "standing-ab-wheel-rollout",
        "pike-hanging-leg-raise",
        "straight-hanging-leg-raise",
      ],
      progressions: [
        [0, [1, 2, 3, 4], [null, 5, 6, null], [null, null, 7, null]],
      ],
    },
    {
      id: "antirotation-progression",
      name: "Anti-rotation Progression",
      exercises: [
        "banded-pallof-press",
        "assisted-knee-copenhagen-plank",
        "ring-pallof-press",
        "knee-copenhagen-plank",
        "assisted-copenhagen-plank",
        "copenhagen-plank",
        "copenhagen-plank-with-movement",
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
      id: "extension-progression",
      name: "Extension Progression",
      exercises: [
        "reverse-hyperextension",
        "arch-raise",
        "hyper-extension",
        "arch-body-hold",
        "arch-body-rocks",
      ],
      progressions: [
        [
          [0, 1, 2],
          [null, 3, null],
          [null, 4, null],
        ],
      ],
    },
  ]);
}

function populateRoutines() {
  db.routines.bulkAdd([
    {
      id: "recommended-routine",
      name: "Recommended Routine",
      workout: [
        {
          name: "Warm-Up",
          sets: 1,
          rest: 0,
          exercises: [
            {
              progression: "yuris-shoulder-band-warmup",
              exercise: "yuris-shoulder-band-warmup",
            },
            { progression: "squat-sky-reaches", exercise: "squat-sky-reaches" },
            { progression: "gmb-wrist-prep", exercise: "gmb-wrist-prep" },
            { progression: "deadbugs", exercise: "deadbugs" },
            { progression: "arch-hang", exercise: "arch-hang" },
            {
              progression: "parallel-bar-support-hold",
              exercise: "parallel-bar-support-hold",
            },
            {
              progression: "bulgarian-split-squat",
              exercise: "bulgarian-split-squat",
            },
          ],
        },

        {
          name: "Pair 1",
          sets: 3,
          rest: 90,
          exercises: [
            {
              progression: "pullup-progression",
              exercise: "scapular-pull",
            },
            {
              progression: "squat-progression",
              exercise: "assisted-squat",
            },
          ],
        },

        {
          name: "Pair 2",
          sets: 3,
          rest: 90,
          exercises: [
            {
              progression: "dip-progression",
              exercise: "parallel-bar-support-hold",
            },
            {
              progression: "hinge-progression",
              exercise: "romanian-deadlift",
            },
          ],
        },

        {
          name: "Pair 3",
          sets: 3,
          rest: 90,
          exercises: [
            {
              progression: "row-progression",
              exercise: "vertical-row",
            },
            {
              progression: "pushup-progression",
              exercise: "vertical-pushup",
            },
          ],
        },

        {
          name: "Core triplet",
          sets: 3,
          rest: 60,
          exercises: [
            {
              progression: "antiextension-progression",
              exercise: "plank",
            },
            {
              progression: "antirotation-progression",
              exercise: "banded-pallof-press",
            },
            {
              progression: "extension-progression",
              exercise: "reverse-hyperextension",
            },
          ],
        },
      ],
    },
  ]);

  db.routines.bulkAdd([
    {
      id: "minimalist-routine",
      name: "Minimalist Routine",
      workout: [
        {
          name: "Circuit 1",
          sets: 1,
          rest: 0,
          exercises: [
            {
              progression: "squat-progression",
              exercise: "assisted-squat",
            },
            {
              progression: "pushup-progression",
              exercise: "vertical-pushup",
            },
            {
              progression: "row-progression",
              exercise: "vertical-row",
            },
            {
              progression: "antiextension-progression",
              exercise: "plank",
            },
          ],
        },
        {
          name: "Circuit 2",
          sets: 1,
          rest: 0,
          exercises: [
            {
              progression: "squat-progression",
              exercise: "assisted-squat",
            },
            {
              progression: "pushup-progression",
              exercise: "vertical-pushup",
            },
            {
              progression: "row-progression",
              exercise: "vertical-row",
            },
            {
              progression: "antiextension-progression",
              exercise: "plank",
            },
          ],
        },
        {
          name: "Circuit 3",
          sets: 1,
          rest: 0,
          exercises: [
            {
              progression: "squat-progression",
              exercise: "assisted-squat",
            },
            {
              progression: "pushup-progression",
              exercise: "vertical-pushup",
            },
            {
              progression: "row-progression",
              exercise: "vertical-row",
            },
            {
              progression: "antiextension-progression",
              exercise: "plank",
            },
          ],
        },
        {
          name: "Circuit 4",
          sets: 1,
          rest: 0,
          exercises: [
            {
              progression: "squat-progression",
              exercise: "assisted-squat",
            },
            {
              progression: "pushup-progression",
              exercise: "vertical-pushup",
            },
            {
              progression: "row-progression",
              exercise: "vertical-row",
            },
            {
              progression: "antiextension-progression",
              exercise: "plank",
            },
          ],
        },
        {
          name: "Circuit 5",
          sets: 1,
          rest: 0,
          exercises: [
            {
              progression: "squat-progression",
              exercise: "assisted-squat",
            },
            {
              progression: "pushup-progression",
              exercise: "vertical-pushup",
            },
            {
              progression: "row-progression",
              exercise: "vertical-row",
            },
            {
              progression: "antiextension-progression",
              exercise: "plank",
            },
          ],
        },
        {
          name: "Circuit 6",
          sets: 1,
          rest: 0,
          exercises: [
            {
              progression: "squat-progression",
              exercise: "assisted-squat",
            },
            {
              progression: "pushup-progression",
              exercise: "vertical-pushup",
            },
            {
              progression: "row-progression",
              exercise: "vertical-row",
            },
            {
              progression: "antiextension-progression",
              exercise: "plank",
            },
          ],
        },
      ],
    },
  ]);
}
