import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AppBar } from "../AppBar/AppBar";

export const SharedLayout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<div>Ładowanie...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
