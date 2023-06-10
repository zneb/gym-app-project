import { Outlet } from "react-router-dom";

export function EmptyRoot() {
  return (
    <div className="page">
      <Outlet />
    </div>
  );
}
