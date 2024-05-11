import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";
import PropTypes from "prop-types";

export function StatisticsCard({ color, icon, title, value, footer }) {
    return (
        <Card className="border-none grid grid-cols-5 rounded-none shadow-none relative">
            <CardBody className="p-4 text-left col-span-3">
                <Typography variant="h4" color="blue-gray">
                    {value}
                </Typography>
                <Typography
                    variant="small"
                    className="font-normal text-blue-gray-600"
                >
                    {title}
                </Typography>
                {footer && <Typography className="mt-4">{footer}</Typography>}
            </CardBody>
            <div className="flex justify-center items-center col-span-2">
                <div className=" bg-[#ECF2FF] rounded-full grid h-12 w-12 place-items-center">
                    {icon}
                </div>
            </div>
        </Card>
    );
}

StatisticsCard.defaultProps = {
    color: "blue",
    footer: null,
};

StatisticsCard.propTypes = {
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
    icon: PropTypes.node.isRequired,
    title: PropTypes.node.isRequired,
    value: PropTypes.node.isRequired,
    footer: PropTypes.node,
};

StatisticsCard.displayName = "/src/widgets/cards/statistics-card.jsx";

export default StatisticsCard;
