import { Outlet } from "react-router-dom";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { IconButton } from "@material-tailwind/react";
import {
    Sidenav,
    DashboardNavbar,
    Configurator,
    Footer,
} from "@/components/layout";
import { useMaterialTailwindController, setOpenConfigurator } from "@/context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Joyride, { STATUS } from "react-joyride";
import { Typography } from "@mui/material";
import { useState } from "react";
import { steps } from "@/data";
export function Dashboard() {
    const [controller, dispatch] = useMaterialTailwindController();
    const [stepState, setStepState] = useState({
        run: false,
        stepIndex: 0,
    });
    const { sidenavType } = controller;
    const handleJoyrideCallback = (data) => {
        const { action, index, status, type } = data;

        if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
            // Need to set our running state to false, so we can restart if we click start again.
            setStepState({ stepIndex: 0, run: false });
        } else if (type === "step:after" || type === "target:notFound") {
            setStepState({
                ...stepState,
                stepIndex: index + (action === "prev" ? -1 : 1),
            }); // Move to the next or previous step
        }
    };
    return (
        <div className="min-h-screen bg-[#F5F6FA] font-['Inter']">
            <Joyride
                callback={handleJoyrideCallback}
                continuous
                scrollToFirstStep
                showProgress
                showSkipButton
                run={stepState.run}
                steps={steps}
                stepIndex={stepState.stepIndex}
                styles={{
                    options: {
                        zIndex: 10000,
                    },
                }}
            />
            <ToastContainer limit={3} />
            <DashboardNavbar setStepState={setStepState} />
            <Sidenav />
            <div className="p-4 md:px-8 mt-[68px] xl:ml-72">
                {/* <Configurator />
        <IconButton
          size="lg"
          color="white"
          className="fixed bottom-8 right-8 z-40 rounded-full shadow-blue-gray-900/10"
          ripple={false}
          onClick={() => setOpenConfigurator(dispatch, true)}
        >
          <Cog6ToothIcon className="h-5 w-5" />
        </IconButton> */}
                <Outlet />
                {/* <div className="text-blue-gray-600">
          <Footer />
        </div> */}
            </div>
        </div>
    );
}

Dashboard.displayName = "/src/layout/dashboard.jsx";

export default Dashboard;
