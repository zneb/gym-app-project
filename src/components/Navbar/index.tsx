import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { FaHome, FaCalendar, FaCog } from "react-icons/fa";

export function Navbar() {
  return (
    <div className={styles.nav}>
      <Link to="/" className={`${styles.link} ${styles.active}`}>
        <FaHome />
        <span className={styles.text}>Home</span>
      </Link>
      <Link to="/history" className={styles.link}>
        <FaCalendar />
        <span className={styles.text}>History</span>
      </Link>
      <Link to="/settings" className={styles.link}>
        <FaCog />
        <span className={styles.text}>Settings</span>
      </Link>
    </div>
  );
}
