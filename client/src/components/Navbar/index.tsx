import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import { FaHome, FaCalendar, FaUser } from "react-icons/fa";

export function Navbar() {
  const location = useLocation();

  return (
    <div className={styles.nav}>
      <Link
        to="/"
        className={`${styles.link} ${
          location.pathname === "/" ? styles.active : null
        }`}
      >
        <FaHome />
        <span className={styles.text}>Home</span>
      </Link>
      <Link
        to="/history"
        className={`${styles.link} ${
          location.pathname === "/history" ? styles.active : null
        }`}
      >
        <FaCalendar />
        <span className={styles.text}>History</span>
      </Link>
      <Link
        to="/user"
        className={`${styles.link} ${
          location.pathname === "/user" ? styles.active : null
        }`}
      >
        <FaUser />
        <span className={styles.text}>User</span>
      </Link>
    </div>
  );
}
