import type { ReactNode } from "react";
import styles from "./Title.module.css";
import type { IconType } from "react-icons";

export function Title({
  children,
  button,
}: {
  children: ReactNode;
  button?: { icon: IconType; action: () => void };
}) {
  return (
    <div className={styles.container}>
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
