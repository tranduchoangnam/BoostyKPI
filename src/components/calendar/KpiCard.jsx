import { Card, Typography } from "@material-tailwind/react";
import dayjs from "dayjs";
export function KpiCard({ kpi }) {
    return (
        <Card className="py-2 px-4 border-l-4 h-[72px] overflow-hidden border-[#3CCC98] rounded-[6px]">
            <Typography className="text-[14px] text-[#2C2C2C] font-bold">
                {kpi.name}
            </Typography>
            <Typography className="text-[14px] text-[#3C98CC] font-bold">
                {dayjs(kpi.plan[0]).format("MMM DD")} -  {dayjs(kpi.plan[1]).format("MMM DD")}
            </Typography>
            <Typography className="text-[14px] text-[#979797] font-medium">
                {kpi.type}
            </Typography>
        </Card>
    );
}
