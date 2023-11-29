import { db } from "./db";

export function populate() {
  populateExercises();
  populateProgressions();
  populateRoutines();
}

function populateExercises() {
  db.exercises.bulkAdd([
    {
      id: "yuris-shoulder-band-warmup",
      name: "Yuri's Shoulder Band Warmup",
      reps: [5, 10],
      type: "reps",
    },
    {
      id: "squat-sky-reaches",
      name: "Squat Sky Reaches",
      reps: [5, 10],
      type: "reps",
    },
    { id: "gmb-wrist-prep", name: "GMB Wrist Prep", reps: [10], type: "reps" },
    { id: "deadbugs", name: "Deadbugs", reps: [10], type: "reps" },
    { id: "scapular-pull", name: "Scapular Pull", reps: [5, 8], type: "reps" },
    { id: "arch-hang", name: "Arch Hang", reps: [15, 30], type: "time" },
    {
      id: "pullup-negative",
      name: "Pull-up Negative",
      reps: [5, 8],
      type: "reps",
    },
    { id: "pullup", name: "Pull-up", reps: [5, 8], type: "reps" },
    {
      id: "weighted-pullup",
      name: "Weighted Pull-up",
      reps: [5, 8],
      type: "reps",
    },
    { id: "lsit-pullup", name: "L-sit Pull-up", reps: [5, 8], type: "reps" },
    {
      id: "arch-body-pullup",
      name: "Arch Body Pull-Up",
      reps: [5, 8],
      type: "reps",
    },
    {
      id: "typewriter-pullup",
      name: "Type-writer Pull-up",
      reps: [5, 8],
      type: "reps",
    },
    {
      id: "archer-pullup",
      name: "Archer Pull-up",
      reps: [5, 8],
      type: "reps",
    },
    {
      id: "assisted-squat",
      name: "Assisted Squat",
      reps: [5, 8],
      type: "reps",
    },
    { id: "squat", name: "Squat", reps: [5, 8], type: "reps" },
    { id: "split-squat", name: "Split Squat", reps: [5, 8], type: "reps" },
    {
      id: "bulgarian-split-squat",
      name: "Bulgarian Split Squat",
      reps: [5, 8],
      type: "reps",
    },
    {
      id: "beginner-shrimp-squat",
      name: "Beginner Shrimp Squat",
      reps: [5, 8],
      type: "reps",
    },
    { id: "stepup", name: "Step-up", reps: [5, 8], type: "reps" },
    {
      id: "partial-rom-pistol-squat",
      name: "Partial ROM Pistol Squat",
      reps: [5, 8],
      type: "reps",
    },
    {
      id: "intermediate-shrimp-squat",
      name: "Intermediate Shrimp Squat",
      reps: [5, 8],
      type: "reps",
    },
    {
      id: "deep-step-up",
      name: "Deep Step-up",
      reps: [5, 8],
      type: "reps",
    },
    {
      id: "pistol-squat",
      name: "Pistol Squat",
      reps: [5, 8],
      type: "reps",
    },
    {
      id: "advanced-shrimp-squat",
      name: "Advanced Shrimp Squat",
      reps: [5, 8],
      type: "reps",
    },
    {
      id: "weighted-shrimp-squat",
      name: "Weighted Shrimp Squat",
      reps: [5, 8],
      type: "reps",
    },
    {
      id: "parallel-bar-support-hold",
      name: "Parallel Bar Support Hold",
      reps: [15, 30],
      type: "time",
    },
    { id: "negative-dip", name: "Negative Dip", reps: [5, 8], type: "reps" },
    {
      id: "parallel-bar-dip",
      name: "Parallel Bar Dip",
      reps: [5, 8],
      type: "reps",
    },
    { id: "weighted-dip", name: "Weighted Dip", reps: [5, 8], type: "reps" },
    { id: "ring-dip", name: "Ring Dip", reps: [5, 8], type: "reps" },
    { id: "ring-rto-dip", name: "Ring RTO Dip", reps: [5, 8], type: "reps" },
    {
      id: "romanian-deadlift",
      name: "Romanian Deadlift",
      reps: [5, 8],
      type: "reps",
    },
    {
      id: "single-legged-deadlift",
      name: "Single Legged Deadlift",
      reps: [5, 8],
      type: "reps",
    },
    {
      id: "banded-nordic-curl-negatives",
      name: "Banded Nordic Curl Negatives",
      reps: [5, 8],
      type: "reps",
    },
    {
      id: "beginner-harop-curl",
      name: "Beginner Harop Curl",
      reps: [5, 8],
      type: "reps",
    },
    {
      id: "glute-ham-raise",
      name: "Glute Ham Raise",
      reps: [5, 8],
      type: "reps",
    },
    {
      id: "negative-hamstring-slide",
      name: "Negative Hamstring Slide",
      reps: [5, 8],
      type: "reps",
    },
    {
      id: "banded-nordic-curl",
      name: "Banded Nordic Curl",
      reps: [5, 8],
      type: "reps",
    },
    {
      id: "advanced-harop-curl",
      name: "Advanced Harop Curl",
      reps: [5, 8],
      type: "reps",
    },
    {
      id: "hamstring-slide",
      name: "Hamstring Slide",
      reps: [5, 8],
      type: "reps",
    },
    { id: "nordic-curl", name: "Nordic Curl", reps: [5, 8], type: "reps" },
    {
      id: "eccentric-single-leg-hamstring-slide",
      name: "Eccentric Single Leg Hamstring Slide",
      reps: [5, 8],
      type: "reps",
    },
    {
      id: "single-leg-hamstring-slide",
      name: "Single Leg Hamstring Slide",
      reps: [5, 8],
      type: "reps",
    },
    { id: "vertical-row", name: "Vertical Row", reps: [5, 8], type: "reps" },
    { id: "incline-row", name: "Incline Row", reps: [5, 8], type: "reps" },
    {
      id: "horizontal-row",
      name: "Horizontal Row",
      reps: [5, 8],
      type: "reps",
    },
    { id: "wide-row", name: "Wide Row", reps: [5, 8], type: "reps" },
    {
      id: "weighted-inverted-row",
      name: "Weighted Inverted Row",
      reps: [5, 8],
      type: "reps",
    },
    {
      id: "tuck-front-lever",
      name: "Tuck Front Lever",
      reps: [5, 8],
      type: "reps",
    },
    { id: "archer-row", name: "Archer Row", reps: [5, 8], type: "reps" },
    {
      id: "tuck-front-lever-pull",
      name: "Tuck Front Lever Pull",
      reps: [5, 8],
      type: "reps",
    },
    { id: "one-arm-row", name: "One Arm Row", reps: [5, 8], type: "reps" },
    {
      id: "advanced-tuck-front-lever",
      name: "Advanced Tuck Front Lever",
      reps: [5, 8],
      type: "reps",
    },
    {
      id: "advanced-tuck-front-lever-pull",
      name: "Advanced Tuck Front Lever Pull",
      reps: [5, 8],
      type: "reps",
    },
    {
      id: "half-straddle-front-lever",
      name: "Half Straddle Front Lever",
      reps: [5, 8],
      type: "reps",
    },
    {
      id: "half-straddle-front-lever-pull",
      name: "Half Straddle Front Lever Pull",
      reps: [5, 8],
      type: "reps",
    },
    {
      id: "straddle-front-lever",
      name: "Straddle Front Lever",
      reps: [5, 8],
      type: "reps",
    },
    {
      id: "straddle-front-lever-pull",
      name: "Straddle Front Lever Pull",
      reps: [5, 8],
      type: "reps",
    },
    {
      id: "half-lay-front-lever",
      name: "Half Lay Front Lever",
      reps: [5, 8],
      type: "reps",
    },
    {
      id: "half-lay-front-lever-pull",
      name: "Half Lay Front Lever Pull",
      reps: [5, 8],
      type: "reps",
    },
    {
      id: "full-lay-front-lever",
      name: "Full Lay Front Lever",
      reps: [5, 8],
      type: "reps",
    },
    {
      id: "full-lay-front-lever-pull",
      name: "Full Lay Front Lever Pull",
      reps: [5, 8],
      type: "reps",
    },
    {
      id: "vertical-pushup",
      name: "Vertical Push-up",
      reps: [5, 8],
      type: "reps",
    },
    {
      id: "incline-pushup",
      name: "Incline Push-up",
      reps: [5, 8],
      type: "reps",
    },
    { id: "pushup", name: "Push-Up", reps: [5, 8], type: "reps" },
    {
      id: "diamond-pushup",
      name: "Diamond Push-up",
      reps: [5, 8],
      type: "reps",
    },
    {
      id: "pseudo-planche-pushup",
      name: "Pseudo Planche Push-Up",
      reps: [5, 8],
      type: "reps",
    },
    { id: "rings-pushup", name: "Rings Push-Up", reps: [5, 8], type: "reps" },
    { id: "rto-pushup", name: "RTO Push-Up", reps: [5, 8], type: "reps" },
    { id: "plank", name: "Plank", reps: [15, 30], type: "time" },
    {
      id: "ring-ab-rollout",
      name: "Ring Ab Rollout",
      reps: [8, 12],
      type: "reps",
    },
    {
      id: "kneeling-ab-wheel-rollout",
      name: "Kneeling Ab Wheel Rollout",
      reps: [8, 12],
      type: "reps",
    },
    {
      id: "tucked-hanging-leg-raise",
      name: "Tucked Hanging Leg Raise",
      reps: [8, 12],
      type: "reps",
    },
    {
      id: "pike-compression",
      name: "Pike Compression",
      reps: [8, 12],
      type: "reps",
    },
    {
      id: "standing-ab-wheel-rollout",
      name: "Standing Ab Wheel Rollout",
      reps: [8, 12],
      type: "reps",
    },
    {
      id: "pike-hanging-leg-raise",
      name: "Pike Hanging Leg Raise",
      reps: [8, 12],
      type: "reps",
    },
    {
      id: "straight-hanging-leg-raise",
      name: "Straight Hanging Leg Raise",
      reps: [8, 12],
      type: "reps",
    },
    {
      id: "banded-pallof-press",
      name: "Banded Pallof Press",
      reps: [8, 12],
      type: "reps",
    },
    {
      id: "assisted-knee-copenhagen-plank",
      name: "Assisted Knee Copenhagen Plank",
      reps: [8, 12],
      type: "reps",
    },
    {
      id: "ring-pallof-press",
      name: "Ring Pallof Press",
      reps: [8, 12],
      type: "reps",
    },
    {
      id: "knee-copenhagen-plank",
      name: "Knee Copenhagen Plank",
      reps: [8, 12],
      type: "reps",
    },
    {
      id: "assisted-copenhagen-plank",
      name: "Assisted Copenhagen Plank",
      reps: [8, 12],
      type: "reps",
    },
    {
      id: "copenhagen-plank",
      name: "Copenhagen Plank",
      reps: [8, 12],
      type: "reps",
    },
    {
      id: "copenhagen-plank-with-movement",
      name: "Copenhagen Plank With Movement",
      reps: [8, 12],
      type: "reps",
    },
    {
      id: "reverse-hyperextension",
      name: "Reverse Hyperextension",
      reps: [8, 12],
      type: "reps",
    },
    { id: "arch-raise", name: "Arch Raise", reps: [8, 12], type: "reps" },
    {
      id: "hyper-extension",
      name: "Hyper Extension",
      reps: [8, 12],
      type: "reps",
    },
    {
      id: "arch-body-hold",
      name: "Arch Body Hold",
      reps: [15, 30],
      type: "time",
    },
    {
      id: "arch-body-rocks",
      name: "Arch Body Rocks",
      reps: [8, 12],
      type: "reps",
    },
  ]);
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
