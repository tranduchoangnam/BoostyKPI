import { Card, Typography } from "@material-tailwind/react";

export function TaskCard({ task }) {
    return (
        <Card className="flex py-2 px-4 rounded-[3px] bg-gradient-to-r from-[#3CCC98] to-[#1C9A6D]">
            <Typography className="text-[12px] text-white font-semibold">
                {task.title}
            </Typography>
            <Typography className="text-[12px] text-white font-semibold">
                {task.plan}
            </Typography>
        </Card>
    );
}