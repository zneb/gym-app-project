import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar/index";

export function Root() {
  return (
    <>
      <Outlet />
      <Navbar />
    </>
  );
}
