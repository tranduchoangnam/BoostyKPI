import { Typography, Progress } from "@material-tailwind/react";
import { PriorityButton } from "@/components/buttons/PriorityButton";
import { CommonTable } from "./CommonTable";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function KpiTable({ tableData,setTableData }) {
    const naviagate=useNavigate();
    const tableHead=["Name","Plan","Subtasks","Priority","Completion"];
    const tableHeadJsx = tableHead.map((el, index) => (
        <th
            key={el}
            className={`border-b border-blue-gray-50 px-2
            } ${[0,1].includes(index) && " !px-0"}`}
        >
            <Typography
                variant="small"
                className={`text-[14px] font-medium text-left capitalize text-[#5A607F] ${
                    [1, 2, 3, 4, 5].includes(index) && "!text-center"
                }`}
            >
                {el}
            </Typography>
        </th>
    ));

    const rowJsx = (ele, className) => (
        <>
            <td className={className+" !pl-0 !px-2 cursor-pointer"} onClick={()=>naviagate(`/kpi/${ele.id}`)}>
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
                    className="text-[14px] font-medium text-blue-gray-600"
                >
                    {ele.plan[0]} - {ele.plan[1]}
                </Typography>
            </td>
            <td className={className}>
                <Typography
                    variant="small"
                    className="text-[14px] text-center font-medium text-blue-gray-600"
                >
                    {ele.subtasks.length}
                </Typography>
            </td>
            <td className={className + " text-center"}>
                <PriorityButton priority={ele.priority} />
            </td>
            <td className={className}>
                <div className="w-10/12">
                    <Typography
                        variant="small"
                        className="mb-1 block text-xs font-medium text-blue-gray-600"
                    >
                        {ele.completion}%
                    </Typography>
                    <Progress
                        value={ele.completion}
                        variant="gradient"
                        color={ele.completion === 100 ? "green" : "blue"}
                        className="h-1"
                    />
                </div>
            </td>
        </>
    );
    return (
        <CommonTable
            tableHeadJsx={tableHeadJsx}
            setTableData={setTableData}
            tableData={tableData}
            rowJsx={rowJsx}
            type="checkbox"
        />
    );
}
