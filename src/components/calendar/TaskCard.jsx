import { Card, Typography } from "@material-tailwind/react";
import dayjs from "dayjs";
export function TaskCard({ task }) {
    return (
        <Card className="flex flex-row justify-between h-[30px] overflow-hidden py-2 px-4 rounded-[3px] bg-gradient-to-r from-[#3CCC98] to-[#1C9A6D]">
            <Typography className="text-[12px] text-white font-semibold">
                {task.name}
            </Typography>
            <Typography className="text-[12px] text-white font-semibold">
                {dayjs(task.start_date).format("MMM DD")} - {dayjs(task.end_date).format("MMM DD")}
            </Typography>
        </Card>
    );
}
