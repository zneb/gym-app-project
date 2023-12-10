import { useState } from "react";
import { db } from "../../lib/db";
import type { User } from "../../lib/types";
import { Title } from "../Title";
import styles from "./User.module.css";

export function User({ userData }: { userData: User }) {
  const [message, setMessage] = useState<string | null>(null);
  const [weight, setWeight] = useState<string | undefined>(
    userData.weight || undefined
  );
  const [height, setHeight] = useState<string | undefined>(
    userData.height || undefined
  );

  const updateData = async () => {
    const updateRes = await fetch("http://localhost:3000/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sessionid: userData.sessionid,
        weight: !isNaN(Number(weight)) ? Number(weight) : undefined,
        height: !isNaN(Number(height)) ? Number(height) : undefined,
      }),
    }).then((res) => res.json());

    if (!updateRes.success) {
      setMessage(updateRes.message);
    }

    if (updateRes.success) {
      db.userData
        .toCollection()
        .modify({ weight: updateRes.weight, height: updateRes.height });

      setMessage(updateRes.message);

      setWeight(updateRes.weight);
      setHeight(updateRes.height);
    }
  };

  return (
    <>
      <Title>User</Title>
      <div className={styles.info}>
        {message}
        <span className={styles.username}>{userData.username}</span>

        <label className={styles.label}>Weight</label>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter weight"
          value={weight}
          inputMode="numeric"
          onChange={(e) => setWeight(e.target.value)}
        />
        <label className={styles.label}>Height</label>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter Height"
          value={height}
          inputMode="numeric"
          onChange={(e) => setHeight(e.target.value)}
        />
        <button onClick={updateData}>Update Measurments</button>

        <button
          onClick={() => {
            db.userData.clear();
          }}
        >
          Log out
        </button>

        <button
          onClick={() => {
            if (confirm("Delete all data")) {
              db.resetData();
            }
          }}
        >
          Reset DB
        </button>
      </div>
    </>
  );
}
