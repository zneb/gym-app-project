import { useState } from "react";
import styles from "./Auth.module.css";

export function Auth() {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.auth}>
        <span className={styles.title}>{isSignup ? "Sign Up" : "Log In"}</span>
        <span className={styles.error}>Error: error name</span>
        <input className={styles.input} placeholder="username" />
        <input className={styles.input} placeholder="password" />
        <button className={styles.button}>
          {isSignup ? "Sign Up" : "Log In"}
        </button>
        <button className={styles.link} onClick={() => setIsSignup(!isSignup)}>
          {isSignup ? "Log in" : "Sign Up"}
        </button>
      </div>
    </div>
  );
}
