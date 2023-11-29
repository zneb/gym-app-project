import { Title } from "../components/Title";
import { db } from "../models/db";

export function Settings() {
  return (
    <>
      <Title>Settings</Title>
      <button
        onClick={() => {
          if (confirm("Delete all data")) {
            db.resetData();
          }
        }}
      >
        Reset Data
      </button>
    </>
  );
}
