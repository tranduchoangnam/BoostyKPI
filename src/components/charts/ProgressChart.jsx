import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import Chart from "react-apexcharts";


export function ProgressChart({ value, children }) {
    const chart = {
        type: "donut",
        series: [value, 100-value],
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
    return (
        <Card className="shadow-none relative h-full">
            <CardBody
                className={`px-0 pt-8 pb-0 relative grow ${
                    chart.type === "donut" && "!pt-0"
                }`}
            >
                <div className="px-6">{children && children.body}</div>
                <div className="relative">
                    <div className="absolute flex flex-col items-center justify-center left-0 top-0 w-full h-full">
                        <Typography className="text-[#1E5EFF] text-[24px] font-bold">
                            {value}%
                        </Typography>
                    </div>
                    <div className={chart.type !== "donut" && "px-1"}>
                        <Chart {...chart} />
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}

ProgressChart.defaultProps = {
    color: "blue",
    footer: null,
};

ProgressChart.propTypes = {
    color: PropTypes.oneOf([
        "white",
        "blue-gray",
        "gray",
        "brown",
        "deep-orange",
        "orange",
        "amber",
        "yellow",
        "lime",
        "light-green",
        "green",
        "teal",
        "cyan",
        "light-blue",
        "blue",
        "indigo",
        "deep-purple",
        "purple",
        "pink",
        "red",
    ]),
    chart: PropTypes.object.isRequired,
    title: PropTypes.node.isRequired,
    description: PropTypes.node.isRequired,
    footer: PropTypes.node,
};

ProgressChart.displayName = "/src/widgets/charts/ProgressChart.jsx";

export default ProgressChart;
