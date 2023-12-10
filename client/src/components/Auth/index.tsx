import { useState } from "react";
import styles from "./Auth.module.css";
import { db } from "../../lib/db";
import { useNavigate } from "react-router-dom";

export function Auth() {
  const navigate = useNavigate();

  const [error, setError] = useState<string | null>(null);

  const [isSignup, setIsSignup] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = async () => {
    const authRes = await fetch("http://localhost:3000/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action: isSignup ? "signup" : "login",
        username: username.toLowerCase(),
        password,
      }),
    }).then((res) => res.json());

    if (authRes.success === false) {
      setError(authRes.message);
    }

    if (authRes.success === true) {
      db.userData.add(authRes.user).then(() => {
        navigate("/");
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.auth}>
        <span className={styles.title}>{isSignup ? "Sign Up" : "Log In"}</span>
        {error && <span className={styles.error}>{error}</span>}
        <input
          className={styles.input}
          placeholder="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          className={styles.input}
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button className={styles.button} onClick={submit}>
          {isSignup ? "Sign Up" : "Log In"}
        </button>
        <button className={styles.link} onClick={() => setIsSignup(!isSignup)}>
          {isSignup ? "Log in" : "Sign Up"}
        </button>
      </div>
    </div>
  );
}
