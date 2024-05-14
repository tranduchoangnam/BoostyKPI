import React from "react";
import {
    Typography,
    Card,
    CardHeader,
    CardBody,
    IconButton,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    Tooltip,
    Progress,
    CardFooter,
} from "@material-tailwind/react";
import { EllipsisVerticalIcon, ArrowUpIcon } from "@heroicons/react/24/outline";
import { StatisticsCard } from "@/components/cards";
import { StatisticsChart } from "@/components/charts";
import {
    statisticsCardsData,
    statisticsChartsData,
    projectsTableData,
    ordersOverviewData,
} from "@/data";
import { CheckCircleIcon, ClockIcon } from "@heroicons/react/24/solid";
import { PriorityButton } from "@/components/buttons/PriorityButton";
import { Header } from "@/components/layout";
export function Home() {
    return (
        <>
            <Header name={{ page: "Dashboard" }} />
            <div className="mt-4">
                <div className="mb-12 grid gap-y-6 grid-cols-2 xl:gap-x-1 xl:grid-cols-4 gap-x-4">
                    {statisticsCardsData.map(
                        ({ icon, title, footer, ...rest }) => (
                            <StatisticsCard
                                key={title}
                                {...rest}
                                title={title}
                                icon={React.createElement(icon, {
                                    className: "w-6 h-6 text-[#1E5EFF]",
                                })}
                                footer={
                                    <>
                                        <Typography className="font-normal text-blue-gray-600">
                                            <strong className={footer.color}>
                                                {footer.value}
                                            </strong>
                                            &nbsp;
                                        </Typography>
                                        <Typography
                                            variant="small"
                                            color="blue-gray-600"
                                            className="aboslute"
                                        >
                                            {footer.label}
                                        </Typography>
                                    </>
                                }
                            />
                        ),
                    )}
                </div>
                <div className="mb-6 grid grid-flow-row-dense grid-cols-2 gap-y-12 gap-x-6 md:grid-cols-7 xl:grid-cols-7">
                    {statisticsChartsData.map((props, index) => (
                        <div
                            key={props.title}
                            className={
                                index === 0
                                    ? "col-span-2 md:col-span-5"
                                    : "col-span-1 md:col-span-2"
                            }
                        >
                            <StatisticsChart
                                {...props}
                                footer={
                                    <Typography
                                        variant="small"
                                        className="flex items-center font-normal text-blue-gray-600"
                                    >
                                        <ClockIcon
                                            strokeWidth={2}
                                            className="h-4 w-4 text-blue-gray-400"
                                        />
                                        &nbsp;{props.footer}
                                    </Typography>
                                }
                            />
                        </div>
                    ))}

                    <Card className="overflow-hidden col-span-2 md:col-span-5 shadow-sm">
                        <CardHeader
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className="m-0 flex items-center justify-between p-6"
                        >
                            <div>
                                <Typography
                                    variant="h6"
                                    color="blue-gray"
                                    className="mb-1"
                                >
                                    Recent KPIs
                                </Typography>
                                <Typography
                                    variant="small"
                                    className="flex items-center gap-1 font-normal text-blue-gray-600"
                                >
                                    <CheckCircleIcon
                                        strokeWidth={3}
                                        className="h-4 w-4 text-blue-gray-200"
                                    />
                                    <strong>30 done</strong> this month
                                </Typography>
                            </div>
                            <Menu placement="left-start">
                                <MenuHandler>
                                    <IconButton
                                        size="sm"
                                        variant="text"
                                        color="blue-gray"
                                    >
                                        <EllipsisVerticalIcon
                                            strokeWidth={3}
                                            fill="currenColor"
                                            className="h-6 w-6"
                                        />
                                    </IconButton>
                                </MenuHandler>
                                <MenuList>
                                    <MenuItem>Action</MenuItem>
                                    <MenuItem>Another Action</MenuItem>
                                    <MenuItem>Something else here</MenuItem>
                                </MenuList>
                            </Menu>
                        </CardHeader>
                        <CardBody className="overflow-x-scroll px-0 pt-0 h-full">
                            <table className="w-full min-w-[640px] table-auto">
                                <thead>
                                    <tr>
                                        {[
                                            "Name",
                                            "Deadline",
                                            "Priority",
                                            "Completion",
                                        ].map((el, index) => (
                                            <th
                                                key={el}
                                                className={`border-b border-blue-gray-50 py-3 px-6 text-left ${
                                                    index === 2 && "text-center"
                                                }`}
                                            >
                                                <Typography
                                                    variant="small"
                                                    className="text-[11px] font-medium uppercase text-blue-gray-400"
                                                >
                                                    {el}
                                                </Typography>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {projectsTableData.map(
                                        (
                                            {
                                                name,
                                                deadline,
                                                priority,
                                                completion,
                                            },
                                            key,
                                        ) => {
                                            const className = `py-3 px-5 ${
                                                key ===
                                                projectsTableData.length - 1
                                                    ? ""
                                                    : "border-b border-blue-gray-50"
                                            }`;

                                            return (
                                                <tr key={key}>
                                                    <td className={className}>
                                                        <div className="flex items-center gap-4">
                                                            <Typography
                                                                variant="small"
                                                                color="blue-gray"
                                                                className="font-bold"
                                                            >
                                                                {name}
                                                            </Typography>
                                                        </div>
                                                    </td>

                                                    <td className={className}>
                                                        <Typography
                                                            variant="small"
                                                            className="text-xs font-medium text-blue-gray-600"
                                                        >
                                                            {deadline}
                                                        </Typography>
                                                    </td>
                                                    <td
                                                        className={
                                                            className +
                                                            " flex justify-center"
                                                        }
                                                    >
                                                        <PriorityButton
                                                            priority={priority}
                                                        />
                                                    </td>
                                                    <td className={className}>
                                                        <div className="w-10/12">
                                                            <Typography
                                                                variant="small"
                                                                className="mb-1 block text-xs font-medium text-blue-gray-600"
                                                            >
                                                                {completion}%
                                                            </Typography>
                                                            <Progress
                                                                value={
                                                                    completion
                                                                }
                                                                variant="gradient"
                                                                color={
                                                                    completion ===
                                                                    100
                                                                        ? "green"
                                                                        : "blue"
                                                                }
                                                                className="h-1"
                                                            />
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        },
                                    )}
                                </tbody>
                            </table>
                        </CardBody>
                    </Card>
                    <Card className="shadow-sm col-span-1 md:col-span-2">
                        <CardHeader
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className="m-0 p-6"
                        >
                            <Typography
                                variant="h6"
                                color="blue-gray"
                                className="mb-2"
                            >
                                Achievements
                            </Typography>
                            <Typography
                                variant="small"
                                className="flex items-center gap-1 font-normal text-blue-gray-600"
                            >
                                <ArrowUpIcon
                                    strokeWidth={3}
                                    className="h-3.5 w-3.5 text-green-500"
                                />
                                <strong>24%</strong> this month
                            </Typography>
                        </CardHeader>
                        <CardBody className="pt-0">
                            {ordersOverviewData.map(
                                ({ icon, color, title, description }, key) => (
                                    <div
                                        key={title}
                                        className="flex items-start gap-4 py-3"
                                    >
                                        <div
                                            className={`relative p-1 after:absolute after:-bottom-6 after:left-2/4 after:w-0.5 after:-translate-x-2/4 after:bg-blue-gray-50 after:content-[''] ${
                                                key ===
                                                ordersOverviewData.length - 1
                                                    ? "after:h-0"
                                                    : "after:h-4/6"
                                            }`}
                                        >
                                            {React.createElement(icon, {
                                                className: `!w-5 !h-5 ${color}`,
                                            })}
                                        </div>
                                        <div>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="block font-medium"
                                            >
                                                {title}
                                            </Typography>
                                            <Typography
                                                as="span"
                                                variant="small"
                                                className="text-xs font-medium text-blue-gray-500"
                                            >
                                                {description}
                                            </Typography>
                                        </div>
                                    </div>
                                ),
                            )}
                        </CardBody>
                    </Card>
                </div>
            </div>
        </>
    );
}

export default Home;
