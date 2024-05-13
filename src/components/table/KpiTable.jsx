import { Typography, Progress } from "@material-tailwind/react";
import { PriorityButton } from "@/components/buttons/PriorityButton";
import { CommonTable } from "./CommonTable";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function KpiTable({ tableData }) {
    const naviagate=useNavigate();
    const tableHead=["Name","Deadline","Subtasks","Priority","Completion"];
    const tableHeadJsx = tableHead.map((el, index) => (
        <th
            key={el}
            className={`border-b border-blue-gray-50 py-3 px-6 text-left ${
                [2,3].includes(index) && "text-center"
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
            <td className={className+" cursor-pointer"} onClick={()=>naviagate(`/kpi/${ele.id}`)}>
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
                    {ele.deadline}
                </Typography>
            </td>
            <td className={className}>
                <Typography
                    variant="small"
                    className="text-xs text-center font-medium text-blue-gray-600"
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
            tableData={tableData}
            rowJsx={rowJsx}
            type="checkbox"
        />
    );
}