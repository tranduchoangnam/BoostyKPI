import { Typography, Progress, Option } from "@material-tailwind/react";
import {
    PriorityButton,
    StatusButton,
    ReminderButton,
} from "@/components/buttons";
import { Input } from "@material-tailwind/react";
import { CommonTable } from "./CommonTable";
import { useEffect, useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import { DatePicker, Select } from "antd";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";
import { TargetUpdateModal } from "@/components/modals/TargetUpdateModal";
export function TaskTable({ tableData, setTableData }) {
    const [open, setOpen] = useState(false);
    const [currentTarget, setCurrentTarget] = useState(null);
    const tableHead = [
        "Task Name",
        "Metric",
        "End Date",
        "Weight",
        "Status",
        "Reminder",
    ];
    const tableHeadJsx = tableHead.map((el, index) => (
        <th
            key={el}
            className={`border-b border-blue-gray-50 px-2
            } ${[0, 4].includes(index) && " !px-0"}`}
        >
            <Typography
                variant="small"
                className={`text-[14px] font-medium text-left capitalize text-[#5A607F] ${
                    [1, 2, 3, 4].includes(index) && "!text-center"
                }`}
            >
                {el}
            </Typography>
        </th>
    ));

    const rowJsx = (ele, className) => (
        <>
            <td className={className + " !pl-0 !px-2"}>
                <div className="flex items-center gap-4">
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold text-[14px]"
                        onClick={() => {
                            setOpen(true);
                            setCurrentTarget(ele);
                        }}
                    >
                        {ele.name}
                    </Typography>
                </div>
            </td>
            <td className={className + " text-center !px-2"}>
                <Typography className="text-[16px] font-medium capitalize">
                    {ele.type?.tasks &&
                        ele.type?.tasks.length +
                            " Task" +
                            (ele.type?.tasks.length > 1 ? "s" : "")}
                    {ele.type?.number &&
                        ele.type?.number.value.start +
                            " - " +
                            ele.type?.number.value.target}
                    {JSON.stringify(ele.type?.boolean) || ""}
                    {ele.type?.currency &&
                        ele.type?.currency.value.start +
                            " - " +
                            ele.type?.currency.value.target}
                </Typography>
                <Typography className="text-[14px] text-center font-bold">
                    {ele.type?.number && ele.type?.number.unit}
                    {ele.type?.currency && ele.type?.currency.unit}
                </Typography>
            </td>
            <td className={className + " text-center !px-2"}>
                <Typography
                    variant="small"
                    className="text-[14px] text-center font-medium capitalize text-blue-gray-600"
                >
                    {ele.end_date ? (
                        dayjs(ele.end_date).format("DD-MM-YYYY")
                    ) : (
                        <MinusIcon className="h-5 w-5 text-blue-gray-400 mx-auto" />
                    )}
                </Typography>
            </td>

            <td
                className={
                    className +
                    " text-center font-bold !px-2 " +
                    (ele.weight &&
                        (ele.weight <= 20
                            ? " text-green-400"
                            : ele.weight <= 50
                            ? " text-orange-400"
                            : "text-red-400"))
                }
            >
                {ele.weight ? (
                    ele.weight + "%"
                ) : (
                    <MinusIcon className="h-5 w-5 text-blue-gray-400 mx-auto" />
                )}
            </td>
            <td className={className + " text-center !px-2"}>
                <StatusButton
                    status={ele.status}
                    setStatus={(status) => {
                        setTableData(
                            tableData.map((t) =>
                                t.id === ele.id
                                    ? {
                                          ...t,
                                          status: status,
                                      }
                                    : t,
                            ),
                        );
                    }}
                />
            </td>
            <td className={className + "w-[50px] !px-2"}>
                <div className="flex justify-center">
                    <ReminderButton reminder={ele.reminder} />
                </div>
            </td>
        </>
    );
    const setTarget = (target) => {
        setTableData(tableData.map((t) => (t.id === target.id ? target : t)));
        console.log(target);
    };

    return (
        <>
            <TargetUpdateModal
                open={open}
                setOpen={setOpen}
                target={currentTarget}
                setTarget={setTarget}
            />
            <CommonTable
                tableHeadJsx={tableHeadJsx}
                setTableData={setTableData}
                tableData={tableData}
                rowJsx={rowJsx}
                type="checkbox"
            />
        </>
    );
}
