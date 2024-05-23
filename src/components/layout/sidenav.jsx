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

export function Sidenav() {
    const [controller, dispatch] = useMaterialTailwindController();
    const { sidenavColor, sidenavType, openSidenav } = controller;
    const sidenavTypes = {
        dark: "bg-black",
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
                    name: "Goals",
                    path: "/kpi",
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
       
    ];

    const handleItemClick = () => {
        setOpenSidenav(dispatch, false);
    };

    return (
        <aside
            className={`${sidenavTypes[sidenavType]} ${openSidenav ? "translate-x-0" : "-translate-x-80"
                } fixed inset-0 z-50 mt-[68px] h-[calc(100vh-68px)] w-72 !bg-[#F5F6FA] transition-transform duration-300 xl:translate-x-0 border-r-2`}
        >
            <div className="m-4">
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
                                <NavLink to={`${path}`} onClick={handleItemClick}>
                                    {({ isActive }) => (
                                        <Button
                                            variant={!isActive && "text"}
                                            className={`flex items-center rounded-[4px] gap-4 px-4 capitalize ${isActive
                                                    ? "bg-[#1E5EFF]"
                                                    : "text-[#7E84A3]"
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

Sidenav.displayName = "/src/widgets/layout/sidnave.jsx";

export default Sidenav;
