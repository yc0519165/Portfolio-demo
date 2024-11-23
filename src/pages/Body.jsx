import DropdownMenu from "../components/Header";
import { Outlet } from "react-router-dom";

export const Body = () => {
  return (
    <>
      <div>
        <DropdownMenu />
        <Outlet />
      </div>
    </>
  );
};
