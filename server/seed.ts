import { db } from "./lib/db";

async function seed() {
  await db.query(`drop table if exists exercises`);

  await db.query(`
    create table exercises
        (id text, 
        name text NOT NULL, 
        reps Integer[] NOT NULL,
        type text NOT NULL,
        primary key (id)
        );
    `);

  await db.query(`
    insert into exercises (id, name, reps, type)
    values
      ('yuris-shoulder-band-warmup', 'Yuri''s Shoulder Band Warmup', ARRAY [5, 10], 'reps'),
      ('squat-sky-reaches', 'Squat Sky Reaches', ARRAY [5, 10], 'reps'),
      ('gmb-wrist-prep', 'GMB Wrist Prep', ARRAY [10], 'reps'),
      ('deadbugs', 'Deadbugs', ARRAY [10], 'reps'),
      ('scapular-pull', 'Scapular Pull', ARRAY [5, 8], 'reps'),
      ('arch-hang', 'Arch Hang', ARRAY [15, 30], 'time' ),
      ('pullup-negative', 'Pull-up Negative', ARRAY [5, 8], 'reps'),
      ('pullup', 'Pull-up', ARRAY [5, 8], 'reps'),
      ('weighted-pullup', 'Weighted Pull-up', ARRAY [5, 8], 'reps'),
      ('lsit-pullup', 'L-sit Pull-up', ARRAY [5, 8], 'reps'),
      ('arch-body-pullup', 'Arch Body Pull-Up', ARRAY [5, 8], 'reps'),
      ('typewriter-pullup', 'Type-writer Pull-up', ARRAY [5, 8], 'reps'),
      ('archer-pullup', 'Archer Pull-up', ARRAY [5, 8], 'reps'),
      ('assisted-squat', 'Assisted Squat', ARRAY [5, 8], 'reps'),
      ('squat', 'Squat', ARRAY [5, 8], 'reps'),
      ('split-squat', 'Split Squat', ARRAY [5, 8], 'reps'),
      ('bulgarian-split-squat', 'Bulgarian Split Squat', ARRAY [5, 8], 'reps'),
      ('beginner-shrimp-squat', 'Beginner Shrimp Squat', ARRAY [5, 8], 'reps'),
      ('stepup', 'Step-up', ARRAY [5, 8], 'reps'),
      ('partial-rom-pistol-squat', 'Partial ROM Pistol Squat', ARRAY [5, 8], 'reps'),
      ('intermediate-shrimp-squat', 'Intermediate Shrimp Squat', ARRAY [5, 8], 'reps'),
      ('deep-step-up', 'Deep Step-up', ARRAY [5, 8], 'reps'),
      ('pistol-squat', 'Pistol Squat', ARRAY [5, 8], 'reps'),
      ('advanced-shrimp-squat', 'Advanced Shrimp Squat', ARRAY [5, 8], 'reps'),
      ('weighted-shrimp-squat', 'Weighted Shrimp Squat', ARRAY [5, 8], 'reps'),
      ('parallel-bar-support-hold', 'Parallel Bar Support Hold', ARRAY [15, 30], 'time'),
      ('negative-dip', 'Negative Dip', ARRAY [5, 8], 'reps'),
      ('parallel-bar-dip', 'Parallel Bar Dip', ARRAY [5, 8], 'reps'),
      ('weighted-dip', 'Weighted Dip', ARRAY [5, 8], 'reps'),
      ('ring-dip', 'Ring Dip', ARRAY [5, 8], 'reps'),
      ('ring-rto-dip', 'Ring RTO Dip', ARRAY [5, 8], 'reps'),
      ('romanian-deadlift', 'Romanian Deadlift', ARRAY [5, 8], 'reps'),
      ('single-legged-deadlift', 'Single Legged Deadlift', ARRAY [5, 8], 'reps'),
      ('banded-nordic-curl-negatives', 'Banded Nordic Curl Negatives', ARRAY [5, 8], 'reps'),
      ('beginner-harop-curl', 'Beginner Harop Curl', ARRAY [5, 8], 'reps'),
      ('glute-ham-raise', 'Glute Ham Raise', ARRAY [5, 8], 'reps'),
      ('negative-hamstring-slide', 'Negative Hamstring Slide', ARRAY [5, 8], 'reps'),
      ('banded-nordic-curl', 'Banded Nordic Curl', ARRAY [5, 8], 'reps'),
      ('advanced-harop-curl', 'Advanced Harop Curl', ARRAY [5, 8], 'reps'),
      ('hamstring-slide', 'Hamstring Slide', ARRAY [5, 8], 'reps'),
      ('nordic-curl', 'Nordic Curl', ARRAY [5, 8], 'reps'),
      ('eccentric-single-leg-hamstring-slide', 'Eccentric Single Leg Hamstring Slide', ARRAY [5, 8], 'reps'),
      ('single-leg-hamstring-slide', 'Single Leg Hamstring Slide', ARRAY [5, 8], 'reps'),
      ('vertical-row', 'Vertical Row', ARRAY [5, 8], 'reps'),
      ('incline-row', 'Incline Row', ARRAY [5, 8], 'reps'),
      ('horizontal-row', 'Horizontal Row', ARRAY [5, 8], 'reps'),
      ('wide-row', 'Wide Row', ARRAY [5, 8], 'reps'),
      ('weighted-inverted-row', 'Weighted Inverted Row', ARRAY [5, 8], 'reps'),
      ('tuck-front-lever', 'Tuck Front Lever', ARRAY [5, 8], 'reps'),
      ('archer-row', 'Archer Row', ARRAY [5, 8], 'reps'),
      ('tuck-front-lever-pull', 'Tuck Front Lever Pull', ARRAY [5, 8], 'reps'),
      ('one-arm-row', 'One Arm Row', ARRAY [5, 8], 'reps'),
      ('advanced-tuck-front-lever', 'Advanced Tuck Front Lever', ARRAY [5, 8], 'reps'),
      ('advanced-tuck-front-lever-pull', 'Advanced Tuck Front Lever Pull', ARRAY [5, 8], 'reps'),
      ('half-straddle-front-lever', 'Half Straddle Front Lever', ARRAY [5, 8], 'reps'),
      ('half-straddle-front-lever-pull', 'Half Straddle Front Lever Pull', ARRAY [5, 8], 'reps'),
      ('straddle-front-lever', 'Straddle Front Lever', ARRAY [5, 8], 'reps'),
      ('straddle-front-lever-pull', 'Straddle Front Lever Pull', ARRAY [5, 8], 'reps'),
      ('half-lay-front-lever', 'Half Lay Front Lever', ARRAY [5, 8], 'reps'),
      ('half-lay-front-lever-pull', 'Half Lay Front Lever Pull', ARRAY [5, 8], 'reps'),
      ('full-lay-front-lever', 'Full Lay Front Lever', ARRAY [5, 8], 'reps'),
      ('full-lay-front-lever-pull', 'Full Lay Front Lever Pull', ARRAY [5, 8], 'reps'),
      ('vertical-pushup', 'Vertical Push-up', ARRAY [5, 8], 'reps'),
      ('incline-pushup', 'Incline Push-up', ARRAY [5, 8], 'reps'),
      ('pushup', 'Push-Up', ARRAY [5, 8], 'reps'),
      ('diamond-pushup', 'Diamond Push-up', ARRAY [5, 8], 'reps'),
      ('pseudo-planche-pushup', 'Pseudo Planche Push-Up', ARRAY [5, 8], 'reps'),
      ('rings-pushup', 'Rings Push-Up', ARRAY [5, 8], 'reps'),
      ('rto-pushup', 'RTO Push-Up', ARRAY [5, 8], 'reps'),
      ('plank', 'Plank', ARRAY [15, 30], 'time'),
      ('ring-ab-rollout', 'Ring Ab Rollout', ARRAY [8, 12], 'reps'),
      ('kneeling-ab-wheel-rollout', 'Kneeling Ab Wheel Rollout', ARRAY [8, 12], 'reps'),
      ('tucked-hanging-leg-raise', 'Tucked Hanging Leg Raise', ARRAY [8, 12], 'reps'),
      ('pike-compression', 'Pike Compression', ARRAY [8, 12], 'reps'),
      ('standing-ab-wheel-rollout', 'Standing Ab Wheel Rollout', ARRAY [8, 12], 'reps'),
      ('pike-hanging-leg-raise', 'Pike Hanging Leg Raise', ARRAY [8, 12], 'reps'),
      ('straight-hanging-leg-raise', 'Straight Hanging Leg Raise', ARRAY [8, 12], 'reps'),
      ('banded-pallof-press', 'Banded Pallof Press', ARRAY [8, 12], 'reps'),
      ('assisted-knee-copenhagen-plank', 'Assisted Knee Copenhagen Plank', ARRAY [8, 12], 'reps'),
      ('ring-pallof-press', 'Ring Pallof Press', ARRAY [8, 12], 'reps'),
      ('knee-copenhagen-plank', 'Knee Copenhagen Plank', ARRAY [8, 12], 'reps'),
      ('assisted-copenhagen-plank', 'Assisted Copenhagen Plank', ARRAY [8, 12], 'reps'),
      ('copenhagen-plank', 'Copenhagen Plank', ARRAY [8, 12], 'reps'),
      ('copenhagen-plank-with-movement', 'Copenhagen Plank With Movement', ARRAY [8, 12], 'reps'),
      ('reverse-hyperextension', 'Reverse Hyperextension', ARRAY [8, 12], 'reps'),
      ('arch-raise', 'Arch Raise', ARRAY [8, 12], 'reps'),
      ('hyper-extension', 'Hyper Extension', ARRAY [8, 12], 'reps'),
      ('arch-body-hold', 'Arch Body Hold', ARRAY [15, 30], 'time'),
      ('arch-body-rocks', 'Arch Body Rocks', ARRAY [8, 12], 'reps');
    `);

  await db.query(`drop table if exists progressions`);

  await db.query(`
    create table progressions
        (id text, 
        name text NOT NULL, 
        exercises text[] NOT NULL,
        progressions json NOT NULL,
        primary key (id)
        );
    `);

  await db.query(`
    insert into progressions (id, name, exercises, progressions)
    values
    ('yuris-shoulder-band-warmup', 'Yuri''s Shoulder Band Warmup', ARRAY ['yuris-shoulder-band-warmup'], '[]'),
    ('squat-sky-reaches', 'Squat Sky Reaches', ARRAY ['squat-sky-reaches'], '[]'),
    ('gmb-wrist-prep', 'GMB Wrist Prep', ARRAY ['gmb-wrist-prep'], '[]'),
    ('deadbugs', 'Deadbugs', ARRAY ['deadbugs'], '[]'),
    ('arch-hang', 'Arch Hang', ARRAY ['arch-hang'], '[]'),
    ('parallel-bar-support-hold', 'Parallel Bar Support Hold', ARRAY ['parallel-bar-support-hold'], '[]'),
    ('bulgarian-split-squat', 'Bulgarian Split Squat', ARRAY ['bulgarian-split-squat'], '[]'),
    ('pullup-progression', 'Pull-up Progression', ARRAY [
        'scapular-pull',
        'arch-hang',
        'pullup-negative',
        'pullup',
        'weighted-pullup',
        'lsit-pullup',
        'arch-body-pullup',
        'typewriter-pullup',
        'archer-pullup'
      ], '[[0, 1, 2, 3, [4, 5, 6, 7], [null, null, null, 8]]]'),
    ('squat-progression', 'Squat Progression', ARRAY [
        'assisted-squat',
        'squat',
        'split-squat',
        'bulgarian-split-squat',
        'beginner-shrimp-squat',
        'stepup',
        'partial-rom-pistol-squat',
        'intermediate-shrimp-squat',
        'advanced-shrimp-squat',
        'advanced-shrimp-squat',
        'typewriter-pullup',
        'weighted-shrimp-squat'
      ], '[
        [0, 1, 2, 3, [4, 5, 6], [7, 8, 9], [10, null, null], [11, null, null]]
      ]'),
    ('dip-progression', 'Dip Progression', ARRAY [
        'parallel-bar-support-hold',
        'negative-dip',
        'parallel-bar-dip',
        'weighted-dip',
        'ring-dip',
        'ring-rto-dip'
      ], '[[0, 1, 2, [3, 4], [null, 5]]]'),
    ('hinge-progression', 'Hinge Progression', ARRAY [
        'romanian-deadlift',
        'single-legged-deadlift',
        'banded-nordic-curl-negatives',
        'beginner-harop-curl',
        'glute-ham-raise',
        'negative-hamstring-slide',
        'banded-nordic-curl',
        'advanced-harop-curl',
        'hamstring-slide',
        'nordic-curl',
        'eccentric-single-leg-hamstring-slide',
        'single-leg-hamstring-slide'
      ], '[
        [
          0,
          1,
          [2, 3, 4, 5],
          [6, 7, null, 8],
          [9, null, null, 10],
          [null, null, null, 11]
        ]
      ]'),
    ('row-progression', 'Row Progression', ARRAY [
        'vertical-row',
        'incline-row',
        'horizontal-row',
        'wide-row',
        'weighted-inverted-row',
        'tuck-front-lever',
        'archer-row',
        'tuck-front-lever-pull',
        'one-arm-row',
        'advanced-tuck-front-lever',
        'advanced-tuck-front-lever-pull',
        'half-straddle-front-lever',
        'half-straddle-front-lever-pull',
        'straddle-front-lever',
        'straddle-front-lever-pull',
        'half-lay-front-lever',
        'half-lay-front-lever-pull',
        'full-lay-front-lever',
        'full-lay-front-lever-pull'
      ], '[
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
          [null, 18, null]
        ]
      ]'),
    ('pushup-progression', 'Push-Up Progression', ARRAY [
        'vertical-pushup',
        'incline-pushup',
        'pushup',
        'diamond-pushup',
        'pseudo-planche-pushup',
        'rings-pushup',
        'rto-pushup'
      ], '[[0, 1, 2, 3, [4, 5], [null, 6]]]'),
    ('antiextension-progression', 'Anti-extension Progression', ARRAY [
        'plank',
        'ring-ab-rollout',
        'kneeling-ab-wheel-rollout',
        'tucked-hanging-leg-raise',
        'pike-compression',
        'standing-ab-wheel-rollout',
        'pike-hanging-leg-raise',
        'straight-hanging-leg-raise'
      ], '[
        [0, [1, 2, 3, 4], [null, 5, 6, null], [null, null, 7, null]]
      ]'),
    ('antirotation-progression', 'Anti-rotation Progression', ARRAY [
        'banded-pallof-press',
        'assisted-knee-copenhagen-plank',
        'ring-pallof-press',
        'knee-copenhagen-plank',
        'assisted-copenhagen-plank',
        'copenhagen-plank',
        'copenhagen-plank-with-movement'
      ], '[
        [
          [0, 1, 2],
          [null, 3, null],
          [null, 4, null],
          [null, 5, null],
          [null, 6, null]
        ]
      ]'),
    ('extension-progression', 'Extension Progression', ARRAY [
        'reverse-hyperextension',
        'arch-raise',
        'hyper-extension',
        'arch-body-hold',
        'arch-body-rocks'
      ], '[
        [
          [0, 1, 2],
          [null, 3, null],
          [null, 4, null]
        ]
      ]');
    `);

  await db.query(`drop table if exists routines`);

  await db.query(`
      create table routines
          (id text,
          name text NOT NULL,
          workout json NOT NULL
          );
      `);

  await db.query(
    `
  insert into routines (id, name, workout)
    values
    ('recommended-routine', 'Recommended Routine', '[
      {
        "name": "Warm-Up",
        "sets": 1,
        "rest": 0,
        "exercises": [
          {
            "progression": "yuris-shoulder-band-warmup",
            "exercise": "yuris-shoulder-band-warmup"
          },
          {
            "progression": "squat-sky-reaches",
            "exercise": "squat-sky-reaches"
          },
          {
            "progression": "gmb-wrist-prep",
            "exercise": "gmb-wrist-prep"
          },
          {
            "progression": "deadbugs",
            "exercise": "deadbugs"
          },
          {
            "progression": "arch-hang",
            "exercise": "arch-hang"
          },
          {
            "progression": "parallel-bar-support-hold",
            "exercise": "parallel-bar-support-hold"
          },
          {
            "progression": "bulgarian-split-squat",
            "exercise": "bulgarian-split-squat"
          }
        ]
      },
      {
        "name": "Pair 1",
        "sets": 3,
        "rest": 90,
        "exercises": [
          {
            "progression": "pullup-progression",
            "exercise": "scapular-pull"
          },
          {
            "progression": "squat-progression",
            "exercise": "assisted-squat"
          }
        ]
      },
      {
        "name": "Pair 2",
        "sets": 3,
        "rest": 90,
        "exercises": [
          {
            "progression": "dip-progression",
            "exercise": "parallel-bar-support-hold"
          },
          {
            "progression": "hinge-progression",
            "exercise": "romanian-deadlift"
          }
        ]
      },
      {
        "name": "Pair 3",
        "sets": 3,
        "rest": 90,
        "exercises": [
          {
            "progression": "row-progression",
            "exercise": "vertical-row"
          },
          {
            "progression": "pushup-progression",
            "exercise": "vertical-pushup"
          }
        ]
      },
      {
        "name": "Core triplet",
        "sets": 3,
        "rest": 60,
        "exercises": [
          {
            "progression": "antiextension-progression",
            "exercise": "plank"
          },
          {
            "progression": "antirotation-progression",
            "exercise": "banded-pallof-press"
          },
          {
            "progression": "extension-progression",
            "exercise": "reverse-hyperextension"
          }
        ]
      }
    ]'),

    ('minimalist-routine', 'Minimalist Routine', '[
      {
        "name": "Circuit 1",
        "sets": 1,
        "rest": 0,
        "exercises": [
          {
            "progression": "squat-progression",
            "exercise": "assisted-squat"
          },
          {
            "progression": "pushup-progression",
            "exercise": "vertical-pushup"
          },
          {
            "progression": "row-progression",
            "exercise": "vertical-row"
          },
          {
            "progression": "antiextension-progression",
            "exercise": "plank"
          }
        ]
      },
      {
        "name": "Circuit 2",
        "sets": 1,
        "rest": 0,
        "exercises": [
          {
            "progression": "squat-progression",
            "exercise": "assisted-squat"
          },
          {
            "progression": "pushup-progression",
            "exercise": "vertical-pushup"
          },
          {
            "progression": "row-progression",
            "exercise": "vertical-row"
          },
          {
            "progression": "antiextension-progression",
            "exercise": "plank"
          }
        ]
      },
      {
        "name": "Circuit 3",
        "sets": 1,
        "rest": 0,
        "exercises": [
          {
            "progression": "squat-progression",
            "exercise": "assisted-squat"
          },
          {
            "progression": "pushup-progression",
            "exercise": "vertical-pushup"
          },
          {
            "progression": "row-progression",
            "exercise": "vertical-row"
          },
          {
            "progression": "antiextension-progression",
            "exercise": "plank"
          }
        ]
      },
      {
        "name": "Circuit 4",
        "sets": 1,
        "rest": 0,
        "exercises": [
          {
            "progression": "squat-progression",
            "exercise": "assisted-squat"
          },
          {
            "progression": "pushup-progression",
            "exercise": "vertical-pushup"
          },
          {
            "progression": "row-progression",
            "exercise": "vertical-row"
          },
          {
            "progression": "antiextension-progression",
            "exercise": "plank"
          }
        ]
      }
    ]');
  `
  );

  await db.end();
}

seed();
