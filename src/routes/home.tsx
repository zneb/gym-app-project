import { Outlet } from "react-router-dom";
import { Routine } from "../components/Routine";

export function Home() {
  return (
    <>
      <Routine />
      <Outlet />
    </>
  );
}
