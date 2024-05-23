import { chartsConfig } from "@/configs";
import { Typography } from "@material-tailwind/react";
import { Select } from "antd";
const websiteViewsChart = {
    type: "donut",
    series: [32, 8],
    options: {
        colors: ["#1E5EFF", "#81BDED"],
        plotOptions: {
            pie: {
                startAngle: 0,
                endAngle: 360,
                donut: {
                    labels: {
                        // value?: {
                        //   show?: boolean
                        //   fontSize?: string
                        //   fontFamily?: string
                        //   fontWeight?: string | number
                        //   color?: string
                        //   offsetY?: number
                        //   formatter?(val: string): string
                        // }
                        // total?: {
                        //   show?: boolean
                        //   showAlways?: boolean
                        //   fontFamily?: string
                        //   fontWeight?: string | number
                        //   fontSize?: string
                        //   label?: string
                        //   color?: string
                        //   formatter?(w: any): string
                        // }
                    },
                },
            },
        },
        dataLabels: {
            enabled: false,
        },
        labels: ["Done", "In Progress"],
        legend: {
            show: false,
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200,
                    },
                    legend: {
                        position: "bottom",
                    },
                },
            },
        ],
    },
};

const dailySalesChart = {
    type: "area",
    height: 300,
    series: [
        {
            name: "Yesterday",
            data: [1, 1, 3, 3, 4, 4, 4, 5, 7],
        },
        {
            name: "Today",
            data: [1, 2, 2, 3, 3, 5, 7, 8, 9],
        },
    ],
    options: {
        ...chartsConfig,
        colors: ["#4FD99F", "#4379EE"],
        fill: {
            colors: ["#4FD99F", "#4379EE"],
            type: "gradient",
            gradient: {
                shade: "light",
                type: "vertical",
                shadeIntensity: 0,
                opacityFrom: 0.7,
                opacityTo: 0.2,
                stops: [0, 100],
            },
        },
        legend: {
            position: "top",
            horizontalAlign: "right",
        },
        stroke: {
            lineCap: "round",
        },
        // markers: {
        //     size: 10,
        // },
        xaxis: {
            ...chartsConfig.xaxis,
            categories: [
                "00:00",
                "03:00",
                "06:00",
                "09:00",
                "12:00",
                "15:00",
                "18:00",
                "21:00",
                "24:00",
            ],
        },
        yaxis: {
            min: 0,
            max: 10,
            seriesName: "Sales",
            tickAmount: 5,
            labels: {
                show: true,
                align: "right",
                minWidth: 0,
                maxWidth: 160,
                offsetX: 0,
                offsetY: 0,
                rotate: 0,
                // formatter: (value) => {
                //     return value + "%";
                // },
            },
        },
    },
};

const completedTaskChart = {
    type: "line",
    height: 220,
    series: [
        {
            name: "Sales",
            data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
        },
    ],
    options: {
        ...chartsConfig,
        colors: ["#388e3c"],
        stroke: {
            lineCap: "round",
        },
        markers: {
            size: 5,
        },
        xaxis: {
            ...chartsConfig.xaxis,
            categories: [
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
        },
    },
};
const completedTasksChart = {
    ...completedTaskChart,
    series: [
        {
            name: "Tasks",
            data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
        },
    ],
};

export const statisticsChartsData = [
    {
        color: "white",
        title: "KPIs Over Time",
        description: "",
        footer: "updated 4 min ago",
        chart: dailySalesChart,
        children: {
            header: (
                <>
                    <div className="absolute right-0 top-0">
                        <Select
                            style={{
                                minWidth: "120px",
                                fontSize: "14px",
                                textAlign: "end",
                            }}
                            variant="borderless"
                            defaultValue={0}
                            options={[
                                { value: 0, label: <span>All time</span> },
                                { value: 1, label: <span>Last 24 Hours</span> },
                                { value: 2, label: <span>Last 7 Days</span> },
                                { value: 3, label: <span>Last 30 Days</span> },
                            ]}
                        />
                    </div>
                </>
            ),
            body: (
                <>
                    <div className="flex absolute top-4 left-6  mb-0">
                        <div className="gap-2">
                            <Typography className="text-[20px] font-bold text-[#131523]">
                                {dailySalesChart.series[0].data.reduce(
                                    (a, b) => a + b,
                                    0,
                                )}
                            </Typography>
                            <Typography className="text-[14px] text-[#5A607F] ">
                                KPIs Today
                            </Typography>
                        </div>
                        <div className="gap-2 ml-16">
                            <Typography className="text-[20px] font-bold text-[#131523]">
                                {dailySalesChart.series[1].data.reduce(
                                    (a, b) => a + b,
                                    0,
                                )}
                            </Typography>
                            <Typography className="text-[14px] text-[#5A607F]">
                                KPIs Yesterday
                            </Typography>
                        </div>
                    </div>
                </>
            ),
        },
    },
    {
        color: "white",
        title: "Statistic",
        description: "",
        footer: "campaign sent 2 days ago",
        chart: websiteViewsChart,
        children: {
            header: <></>,
            body: (
                <div className="grid grid-cols-2 pb-6 mb-6 border-b-2">
                    <div className="pr-6">
                        <Typography className="text-[20px] font-bold text-[#131523]">
                            {dailySalesChart.series[0].data.reduce(
                                (a, b) => a + b,
                                0,
                            )}
                        </Typography>
                        <Typography className="text-[14px] text-[#5A607F]">
                            KPIs done
                        </Typography>
                    </div>
                    <div className="border-l border-[#C9CDD9] pl-6">
                        <Typography className="text-[20px] font-bold text-[#131523]">
                            {dailySalesChart.series[1].data.reduce(
                                (a, b) => a + b,
                                0,
                            )}
                        </Typography>
                        <Typography className="text-[14px] text-[#5A607F]">
                            KPIs total
                        </Typography>
                    </div>
                </div>
            ),
        },
    },
];

export default statisticsChartsData;
