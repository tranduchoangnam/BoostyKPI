import { Typography, Progress } from "@material-tailwind/react";
import {
    PriorityButton,
    StatusButton,
    ReminderButton,
} from "@/components/buttons";
import { CommonTable } from "./CommonTable";
import { useState } from "react";
import { CalendarIcon } from "@heroicons/react/24/outline";

export function TaskTable({ tableData }) {
    const tableHead = [
        "Name",
        "Start Date",
        "End Date",
        "Priority",
        "Status",
        "Reminder",
    ];
    const tableHeadJsx = tableHead.map((el, index) => (
        <th
            key={el}
            className={`border-b border-blue-gray-50 py-3 px-6 text-left ${
                [2, 3, 4, 5].includes(index) && "text-center"
            }`}
        >
            <Typography
                variant="small"
                className="text-[11px] font-medium uppercase text-blue-gray-400"
            >
                {el}
            </Typography>
        </th>
    ));

    const rowJsx = (ele, className) => (
        <>
            <td className={className}>
                <div className="flex items-center gap-4">
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold"
                    >
                        {ele.name}
                    </Typography>
                </div>
            </td>

            <td className={className}>
                <Typography
                    variant="small"
                    className="text-xs font-medium text-blue-gray-600"
                >
                    {ele.start_date}
                </Typography>
            </td>
            <td className={className}>
                <Typography
                    variant="small"
                    className="text-xs text-center font-medium text-blue-gray-600"
                >
                    {ele.end_date}
                </Typography>
            </td>
            <td className={className + " text-center"}>
                <PriorityButton priority={ele.priority} />
            </td>
            <td className={className + " text-center"}>
                <StatusButton status={ele.status} />
            </td>
            <td className={className}>
                <div className="flex justify-center">
                    <ReminderButton reminder={ele.reminder} />
                </div>
            </td>
        </>
    );
    return (
        <CommonTable
            tableHeadJsx={tableHeadJsx}
            tableData={tableData}
            rowJsx={rowJsx}
            type="checkbox"
        />
    );
}
