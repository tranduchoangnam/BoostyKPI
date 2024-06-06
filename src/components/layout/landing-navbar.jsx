import { useLocation, useNavigate } from "react-router-dom";
import {
    Navbar,
    IconButton,
} from "@material-tailwind/react";
import {
    UserCircleIcon,
} from "@heroicons/react/24/solid";
import {
    useMaterialTailwindController,
    setOpenSidenav,
} from "@/context";
import { useAuth } from "@/context/AuthProvider";
import { Box, Button, Typography } from "@mui/material";

export function LandingNavBar() {
    const [controller, dispatch] = useMaterialTailwindController();
    const { fixedNavbar, openSidenav } = controller;
    const { pathname } = useLocation();
    const prettyPathname = (pathname) => {
        if (pathname === "/") return "Dashboard";
        if (pathname.includes("kpi/")) return "Detail KPI";
        return pathname.replace("/", "").replace("-", " ");
    };
    const auth = useAuth();
    const navigate = useNavigate();
    const handleUserClick = () => {
        if (auth.user) {
            //TODO
        } else navigate("/auth/sign-in");
    };
    return (
        <Navbar
            color={fixedNavbar ? "white" : "transparent"}
            className={`rounded-xl fixed inset-0 z-50 border-b-2 transition-all h-[68px] !px-4 bg-white ${fixedNavbar
                ? "sticky top-4 z-40 py-3 shadow-md shadow-blue-gray-500/5"
                : "px-0 py-1"
                }`}
            fullWidth
            blurred={fixedNavbar}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 6, height: '100%', mx: { md: 5, xs: 0.5 } }}>
                <div className="flex items-center h-full">
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <img className="h-8 w-8" src="/img/logo.png" />
                        <p className="pt-2 text-[#062D5F] font-bold text-[16px]">oostyKPI</p>
                    </Box>
                </div>
                <div className="flex items-center h-full">
                    <div onClick={() => navigate("/auth/sign-up")}>
                        <Button
                            variant="contained"
                            size="medium"
                            sx={{ backgroundColor: "#1E5EFF" }}
                        >
                            Sign Up
                        </Button>
                    </div>
                </div>
            </Box>
        </Navbar>
    );
}

LandingNavBar.displayName = "/src/widgets/layout/dashboard-navbar.jsx";

export default LandingNavBar;
