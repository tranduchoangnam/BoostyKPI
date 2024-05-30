import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import Chart from "react-apexcharts";

export function StatisticsChart({
    color,
    chart,
    title,
    description,
    footer,
    children,
}) {
    return (
        <Card className="shadow-none relative h-full w-full">
            {title&&<CardHeader
                variant="gradient"
                color={color}
                floated={false}
                shadow={false}
                className="relative px-2 pt-1"
            >
                <Typography variant="h6" color="blue-gray">
                    {title}
                </Typography>
                <Typography
                    variant="small"
                    className="font-normal text-blue-gray-600"
                >
                    {description}
                </Typography>
                {children && children.header}
            </CardHeader>}
            <CardBody
                className={`px-0 pt-8 pb-0 relative grow ${
                    chart.type === "donut" && "!pt-0"
                }`}
            >
                <div className="px-6">{children && children.body}</div>
                <div className="relative flex justify-center items-center">
                    {chart.type === "donut" && (
                        <div className="absolute flex flex-col items-center justify-center left-0 top-0 w-full h-full">
                            <Typography className="text-[#1E5EFF] text-[40px] leading-[50px]">
                                32
                            </Typography>
                            <Typography className="text-[#7DA2B2] text-[15px] leading-[18px]">
                                /40
                            </Typography>
                        </div>
                    )}
                    <div className={chart.type !== "donut" && "px-1 w-full"}>
                        <Chart {...chart} />
                    </div>
                </div>
            </CardBody>
            {footer && (
                <CardFooter className="border-t max-h-[62px] border-blue-gray-50 px-6 py-5">
                    {footer}
                </CardFooter>
            )}
        </Card>
    );
}

StatisticsChart.defaultProps = {
    color: "blue",
    footer: null,
};

StatisticsChart.propTypes = {
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

StatisticsChart.displayName = "/src/widgets/charts/statistics-chart.jsx";

export default StatisticsChart;
