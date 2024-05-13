import {Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export function Auth() {

  return (
    <div className="relative min-h-screen w-full bg-[#F5F6FA] font-['Inter']">
      <ToastContainer />
      <Outlet/>
    </div>
  );
}

Auth.displayName = "/src/layout/Auth.jsx";

export default Auth;
