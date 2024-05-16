import { useLocation, Link, useNavigate } from "react-router-dom";
import {
    Navbar,
    Typography,
    Button,
    IconButton,
    Breadcrumbs,
    Input,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
} from "@material-tailwind/react";
import {
    UserCircleIcon,
    Cog6ToothIcon,
    BellIcon,
    ClockIcon,
    CreditCardIcon,
    Bars3Icon,
} from "@heroicons/react/24/solid";
import {
    useMaterialTailwindController,
    setOpenConfigurator,
    setOpenSidenav,
} from "@/context";
import { useAuth } from "@/context/AuthProvider";
import {
    ArrowLeftIcon,
    ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
export function DashboardNavbar() {
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
            className={`rounded-xl fixed inset-0 z-50 border-b-2 transition-all h-[68px] !px-4 bg-white ${
                fixedNavbar
                    ? "sticky top-4 z-40 py-3 shadow-md shadow-blue-gray-500/5"
                    : "px-0 py-1"
            }`}
            fullWidth
            blurred={fixedNavbar}
        >
            <div className="flex h-full justify-between gap-6">
                <div className="flex items-center h-full">
                    <IconButton
                        variant="text"
                        color="blue-gray"
                        className="grid"
                        onClick={() => setOpenSidenav(dispatch, !openSidenav)}
                    >
                        <Bars3Icon
                            strokeWidth={3}
                            className="h-6 w-6 text-blue-gray-500"
                        />
                    </IconButton>
                </div>
                <div className="flex items-center h-full">
                    <Menu>
                        <MenuHandler>
                            <IconButton variant="text" color="blue-gray">
                                <BellIcon className="h-5 w-5 text-blue-gray-500" />
                            </IconButton>
                        </MenuHandler>
                        <MenuList className="w-max border-0">
                            <MenuItem className="flex items-center gap-3">
                                <Avatar
                                    src="https://demos.creative-tim.com/material-dashboard/assets/img/team-2.jpg"
                                    alt="item-1"
                                    size="sm"
                                    variant="circular"
                                />
                                <div>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="mb-1 font-normal"
                                    >
                                        <strong>New message</strong> from Laur
                                    </Typography>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="flex items-center gap-1 text-xs font-normal opacity-60"
                                    >
                                        <ClockIcon className="h-3.5 w-3.5" /> 13
                                        minutes ago
                                    </Typography>
                                </div>
                            </MenuItem>
                            <MenuItem className="flex items-center gap-4">
                                <Avatar
                                    src="https://demos.creative-tim.com/material-dashboard/assets/img/small-logos/logo-spotify.svg"
                                    alt="item-1"
                                    size="sm"
                                    variant="circular"
                                />
                                <div>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="mb-1 font-normal"
                                    >
                                        <strong>New album</strong> by Travis
                                        Scott
                                    </Typography>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="flex items-center gap-1 text-xs font-normal opacity-60"
                                    >
                                        <ClockIcon className="h-3.5 w-3.5" /> 1
                                        day ago
                                    </Typography>
                                </div>
                            </MenuItem>
                            <MenuItem className="flex items-center gap-4">
                                <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-tr from-blue-gray-800 to-blue-gray-900">
                                    <CreditCardIcon className="h-4 w-4 text-white" />
                                </div>
                                <div>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="mb-1 font-normal"
                                    >
                                        Payment successfully completed
                                    </Typography>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="flex items-center gap-1 text-xs font-normal opacity-60"
                                    >
                                        <ClockIcon className="h-3.5 w-3.5" /> 2
                                        days ago
                                    </Typography>
                                </div>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                    <Menu>
                        <MenuHandler>
                            <div>
                                <Button
                                    variant="text"
                                    color="blue-gray"
                                    className="hidden items-center gap-2 px-4 xl:flex normal-case"
                                >
                                    {auth.user ? (
                                        <div className="rounded-full p-2 bg-[#123454]">
                                            <img
                                                src={auth.user.photo}
                                                className="h-5 w-5 text-blue-gray-500"
                                            />
                                        </div>
                                    ) : (
                                        <UserCircleIcon className="h-5 w-5 text-blue-gray-500" />
                                    )}
                                    {auth.user
                                        ? auth.user.first_name +
                                          " " +
                                          auth.user.last_name
                                        : "Sign In"}
                                </Button>
                                <IconButton
                                    variant="text"
                                    color="blue-gray"
                                    className="grid xl:hidden"
                                >
                                    {auth.user ? (
                                        <img
                                            src={auth.user.photo}
                                            className="h-5 w-5 text-blue-gray-500"
                                        />
                                    ) : (
                                        <UserCircleIcon className="h-5 w-5 text-blue-gray-500" />
                                    )}
                                </IconButton>
                            </div>
                        </MenuHandler>
                        <MenuList className="w-max border-0">
                            <MenuItem
                                className="flex items-center gap-4"
                                onClick={() => navigate("/settings")}
                            >
                                <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-tr from-blue-gray-800 to-blue-gray-900">
                                    <UserCircleIcon className="h-4 w-4 text-white" />
                                </div>
                                <div>
                                    <Typography
                                        variant="h6"
                                        color="blue-gray"
                                        className="mb-1 font-bold"
                                    >
                                        Profile Setting
                                    </Typography>
                                </div>
                            </MenuItem>
                            <MenuItem
                                className="flex items-center gap-4"
                                onClick={() => auth.logOut()}
                            >
                                <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-tr from-blue-gray-800 to-blue-gray-900">
                                    <ArrowLeftOnRectangleIcon className="h-4 w-4 text-white" />
                                </div>
                                <div>
                                    <Typography
                                        variant="h6"
                                        color="blue-gray"
                                        className="mb-1 font-bold"
                                    >
                                        Log out
                                    </Typography>
                                </div>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </div>
            </div>
        </Navbar>
    );
}

DashboardNavbar.displayName = "/src/widgets/layout/dashboard-navbar.jsx";

export default DashboardNavbar;
