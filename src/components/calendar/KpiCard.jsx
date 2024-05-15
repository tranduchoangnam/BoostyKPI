import { Card, Typography } from "@material-tailwind/react";

export function KpiCard({ kpi }) {
    return (
        <Card className="py-2 px-4 border-l-4 border-[#3CCC98] rounded-[6px]">
            <Typography className="text-[14px] text-[#2C2C2C] font-bold">
                {kpi.name}
            </Typography>
            <Typography className="text-[14px] text-[#3C98CC] font-bold">
                {kpi.plan}
            </Typography>
            <Typography className="text-[14px] text-[#979797] font-medium">
                {kpi.type}
            </Typography>
        </Card>
    );
}
