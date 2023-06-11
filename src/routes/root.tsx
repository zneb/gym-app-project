import { Outlet, ScrollRestoration } from "react-router-dom";
import { Navbar } from "../components/Navbar/index";

export function Root() {
  return (
    <>
      <div className="page">
        <Outlet />
      </div>
      <Navbar />
    </>
  );
}
