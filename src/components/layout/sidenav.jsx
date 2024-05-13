import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
    Avatar,
    Button,
    IconButton,
    Typography,
} from "@material-tailwind/react";
import { useMaterialTailwindController, setOpenSidenav } from "@/context";
import {
    HomeIcon,
    ChartBarIcon,
    DocumentPlusIcon,
    CalendarDaysIcon,
    Cog6ToothIcon,
    ServerStackIcon,
    RectangleStackIcon,
} from "@heroicons/react/24/solid";

export function Sidenav({ brandImg, brandName }) {
    const [controller, dispatch] = useMaterialTailwindController();
    const { sidenavColor, sidenavType, openSidenav } = controller;
    const sidenavTypes = {
        dark: "bg-[#1E5EFF]",
        white: "bg-white shadow-sm",
        transparent: "bg-transparent",
    };
    const icon = {
        className: "w-5 h-5 text-inherit",
    };
    const routes = [
        {
            pages: [
                {
                    icon: <HomeIcon {...icon} />,
                    name: "dashboard",
                    path: "",
                },
                {
                    icon: <ChartBarIcon {...icon} />,
                    name: "KPIs",
                    path: "/kpi",
                },
                {
                    icon: <DocumentPlusIcon {...icon} />,
                    name: "Add KPI",
                    path: "/add-kpi",
                },
                {
                    icon: <CalendarDaysIcon {...icon} />,
                    name: "calendar",
                    path: "/calendar",
                },
                {
                    icon: <Cog6ToothIcon {...icon} />,
                    name: "settings",
                    path: "/settings",
                },
            ],
        },
        {
            title: "auth pages",
            pages: [
                {
                    icon: <ServerStackIcon {...icon} />,
                    name: "sign in",
                    path: "/sign-in",
                },
                {
                    icon: <RectangleStackIcon {...icon} />,
                    name: "sign up",
                    path: "/sign-up",
                },
            ],
        },
    ];

    return (
        <aside
            className={`${sidenavTypes[sidenavType]} ${
                openSidenav ? "translate-x-0" : "-translate-x-80"
            } fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 border border-blue-gray-100`}
        >
            <div className={`relative`}>
                <Link to="/" className="py-6 px-8 text-center">
                    <Typography
                        variant="h6"
                        color={sidenavType === "dark" ? "white" : "blue-gray"}
                    >
                        {brandName}
                    </Typography>
                </Link>
                <IconButton
                    variant="text"
                    color="white"
                    size="sm"
                    ripple={false}
                    className="absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
                    onClick={() => setOpenSidenav(dispatch, false)}
                >
                    <XMarkIcon
                        strokeWidth={2.5}
                        className="h-5 w-5 text-white"
                    />
                </IconButton>
            </div>
            <div className="mx-4">
                {routes.map(({ title, pages }, key) => (
                    <ul key={key} className="mb-4 flex flex-col gap-1">
                        {title && (
                            <li className="mx-3.5 mt-4 mb-2">
                                <Typography
                                    variant="small"
                                    color={
                                        sidenavType === "dark"
                                            ? "white"
                                            : "blue-gray"
                                    }
                                    className="font-black uppercase opacity-75"
                                >
                                    {title}
                                </Typography>
                            </li>
                        )}
                        {pages.map(({ icon, name, path }) => (
                            <li key={name}>
                                <NavLink to={`${path}`}>
                                    {({ isActive }) => (
                                        <Button
                                            variant={!isActive && "text"}
                                            className={`flex items-center rounded-[4px] gap-4 px-4 capitalize ${
                                                isActive
                                                    ? "bg-[#1E5EFF]"
                                                    : "text-[#5A607F]"
                                            }`}
                                            fullWidth
                                        >
                                            {icon}
                                            <Typography
                                                color="inherit"
                                                className="font-medium capitalize"
                                            >
                                                {name}
                                            </Typography>
                                        </Button>
                                    )}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
        </aside>
    );
}

Sidenav.defaultProps = {
    brandImg: "/img/logo-ct.png",
    brandName: "Boosty",
};

Sidenav.propTypes = {
    brandImg: PropTypes.string,
    brandName: PropTypes.string,
};

Sidenav.displayName = "/src/widgets/layout/sidnave.jsx";

export default Sidenav;
