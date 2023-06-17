import type { ReactNode } from "react";
import styles from "./Title.module.css";
import type { IconType } from "react-icons";

export function Title({
  children,
  left,
  button,
}: {
  children: ReactNode;
  left?: ReactNode;
  button?: { icon: IconType; action: () => void };
}) {
  return (
    <div className={styles.container}>
      {left && <div className={styles.left}>{left}</div>}
      <h2 className={styles.title}>{children}</h2>
      {button && (
        <div className={styles.right}>
          <button
            type="button"
            className={styles.button}
            onClick={button.action}
          >
            <button.icon />
          </button>
        </div>
      )}
    </div>
  );
}
