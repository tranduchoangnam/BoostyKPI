import { Step, Typography } from "@mui/material";

const StepContent = ({ title, description }) => {
    return (
        <>
            <Typography fontWeight={700}>{title}</Typography>
            <Typography variant="small" color="blue-gray">
                {description}
            </Typography>
        </>
    );
};
export const steps = [
    {
        target: ".my-first-step",
        content: (
            <StepContent
                title="Welcome to BoostyKPI"
                description="This is a guided tour to help you get started."
            />
        ),
    },
    {
        target: ".dashboard-1",
        content: (
            <StepContent
                title="Goals Over Time Chart"
                description="This chart shows your goals over time."
            />
        ),
    },
    {
        target: ".dashboard-2",
        content: (
            <StepContent
                title="Goals Statistic Chart"
                description="This chart shows your completed and total goals."
            />
        ),
    },
    {
        target: ".dashboard-3",
        content: (
            <StepContent
                title="Recent Goals Table"
                description="This table show 5 most recent goals."
            />
        ),
    },
    {
        target: ".dashboard-4",
        content: (
            <StepContent
                title="Achievements"
                description="BoostyKPI has a hidden achievements system. Try to find them all!"
            />
        ),
    },
];
