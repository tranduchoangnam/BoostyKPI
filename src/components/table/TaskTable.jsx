import { Typography, Progress, Option } from "@material-tailwind/react";
import {
    PriorityButton,
    StatusButton,
    ReminderButton,
} from "@/components/buttons";
import { Input } from "@material-tailwind/react";
import { CommonTable } from "./CommonTable";
import { useEffect, useState } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DatePicker, Select } from "antd";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from 'uuid';

export function TaskTable({ tableData }) {
    const [data, setData] = useState(tableData);
    const [addRowJsx, setAddRowJsx] = useState();
    const [task, setTask] = useState({
        name: null,
        start_date: {
            value: null,
            dateString: null,
        },
        end_date: {
            value: null,
            dateString: null,
        },
        priority: null,
        status: null,
        reminder: {
            status: false,
            before_start: null,
            repeat: null,
            custom_time: null,
            custom_date: null,
        },
    });
    const handleAddTask = () => {
        const formattedTask = {
            ...task,
            id: uuidv4(),
            start_date: task.start_date.dateString,
            end_date: task.end_date.dateString,
        };
        let ok = true;

        for (let key in formattedTask)
            if (formattedTask[key] === null) {
                ok = false;
                toast.error("Please fill all fields");
                break;
            }
        if (!ok) return;

        setData([...data, formattedTask]);
        setTask({
            id: null,
            name: null,
            start_date: {
                value: null,
                dateString: null,
            },
            end_date: {
                value: null,
                dateString: null,
            },
            priority: null,
            status: null,
            reminder: {
                status: false,
                before_start: null,
                repeat: null,
                custom_time: null,
                custom_date: null,
            },
        });
    };
    const tableHead = [
        "Task Name",
        "Start Date",
        "End Date",
        "Priority",
        "Status",
        "Reminder",
    ];
    const tableHeadJsx = tableHead.map((el, index) => (
        <th
            key={el}
            className={`border-b border-blue-gray-50 px-2
            } ${[0, 5].includes(index) && " !px-0"}`}
        >
            <Typography
                variant="small"
                className={`text-[11px]  text-left uppercase text-blue-gray-400 ${
                    [1, 2, 3, 4, 5].includes(index) && "!text-center"
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
                        className="font-bold"
                    >
                        {ele.name}
                    </Typography>
                </div>
            </td>

            <td className={className + " text-center !px-2"}>
                <Typography
                    variant="small"
                    className="text-xs text-center font-medium text-blue-gray-600"
                >
                    {ele.start_date}
                </Typography>
            </td>
            <td className={className + " text-center !px-2"}>
                <Typography
                    variant="small"
                    className="text-xs text-center font-medium text-blue-gray-600"
                >
                    {ele.end_date}
                </Typography>
            </td>
            <td className={className + " text-center !px-2"}>
                <PriorityButton priority={ele.priority} />
            </td>
            <td className={className + " text-center !px-2"}>
                <StatusButton status={ele.status} />
            </td>
            <td className={className + "w-[50px] !px-2"}>
                <div className="flex justify-center">
                    <ReminderButton reminder={ele.reminder} />
                </div>
            </td>
        </>
    );
    const addRowJsxData = (
        <>
            <td className="py-3 px-0 border-b border-blue-gray-50 ">
                <div className="w-12 h-12 p-1">
                    <div className="w-full h-full rounded-full hover:bg-[#E9EEFF] flex justify-center items-center cursor-pointer">
                        <PlusIcon
                            className="w-6 h-6 text-[#1E5EFF] "
                            onClick={() => handleAddTask()}
                        />
                    </div>
                </div>
            </td>
            <td className="!pl-0 !pr-2 py-4 border-b border-blue-gray-50">
                <div className="flex items-center gap-4">
                    <Input
                        value={task.name || ""}
                        onChange={(e) =>
                            setTask({ ...task, name: e.target.value })
                        }
                        type="text"
                        label="Enter Name..."
                        labelProps={{
                            className: "!text-[12px]",
                        }}
                        containerProps={{
                            className: "!w-full !min-w-[116px] h-[32px]",
                        }}
                    />
                </div>
            </td>

            <td className="relative px-1  py-4 border-b border-blue-gray-50">
                <DatePicker
                    showTime
                    className="px-1"
                    needConfirm={false}
                    maxDate={task.end_date.value}
                    value={task.start_date.value || ""}
                    onChange={(value, dateString) => {
                        setTask({
                            ...task,
                            start_date: {
                                value: value,
                                dateString: dateString,
                            },
                        });
                    }}
                />
            </td>
            <td className="relative px-1 py-4 border-b border-blue-gray-50">
                <DatePicker
                    showTime
                    className="px-1"
                    needConfirm={false}
                    minDate={task.start_date.value}
                    value={task.end_date.value || ""}
                    onChange={(value, dateString) => {
                        setTask({
                            ...task,
                            end_date: { value: value, dateString: dateString },
                        });
                    }}
                />
            </td>
            <td className="text-center px-1 py-4 border-b border-blue-gray-50">
                <Select
                    value={task.priority}
                    onChange={(e) => setTask({ ...task, priority: e })}
                    className="w-full"
                    placeholder="Priority"
                    options={[
                        { value: "Low", label: <span>Low</span> },
                        { value: "Medium", label: <span>Medium</span> },
                        { value: "High", label: <span>High</span> },
                    ]}
                />
            </td>
            <td className="text-center !px-1 py-4 border-b border-blue-gray-50">
                <Select
                    value={task.status}
                    onChange={(e) => setTask({ ...task, status: e })}
                    className="w-full"
                    placeholder="Status"
                    options={[
                        { value: "Pending", label: <span>Pending</span> },
                        {
                            value: "In Progress",
                            label: <span>In Progress</span>,
                        },
                        { value: "Done", label: <span>Done</span> },
                    ]}
                />
            </td>
            <td className=" py-4 border-b border-blue-gray-50">
                <div className="flex justify-center ">
                    <ReminderButton
                        reminder={task.reminder}
                        onSetReminder={(e) => setTask({ ...task, reminder: e })}
                    />
                </div>
            </td>
        </>
    );
    useEffect(() => {
        setAddRowJsx(addRowJsxData);
    }, [task]);
    useEffect(() => {
        setData(tableData);
    }, [tableData]);
    return (
        <>
            <CommonTable
                tableHeadJsx={tableHeadJsx}
                tableData={data}
                rowJsx={rowJsx}
                type="checkbox"
                addRowJsx={addRowJsx}
            />
        </>
    );
}
