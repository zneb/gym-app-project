import { useLiveQuery } from "dexie-react-hooks";
import { db } from "./db";

export function useSession() {
  const userData = useLiveQuery(
    () => db.userData.toCollection().first(),
    [],
    "loading"
  );

  return userData;
}
