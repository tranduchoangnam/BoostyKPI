import {Outlet } from "react-router-dom";

export function Auth() {

  return (
    <div className="relative min-h-screen w-full bg-[#F5F6FA] font-['Inter']">
      <Outlet/>
    </div>
  );
}

Auth.displayName = "/src/layout/Auth.jsx";

export default Auth;
