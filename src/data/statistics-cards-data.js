import {
  CheckCircleIcon,
  CalendarDaysIcon,
  ChartBarIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

export const statisticsCardsData = [
  {
    color: "gray",
    icon: ChartBarIcon,
    title: "Total KPIs",
    value: "1234",
    footer: {
      color: "text-green-500",
      value: "+55%",
      label: "than last week",
    },
  },
  {
    color: "gray",
    icon: CheckCircleIcon,
    title: "Done",
    value: "1056",
    footer: {
      color: "text-green-500",
      value: "+3%",
      label: "than last month",
    },
  },
  {
    color: "gray",
    icon: ClockIcon,
    title: "Spending Hours",
    value: "3,462",
    footer: {
      color: "text-red-500",
      value: "-2%",
      label: "than last week",
    },
  },
  {
    color: "gray",
    icon: CalendarDaysIcon,
    title: "Day streak",
    value: "52",
    footer: {
      color: "text-green-500",
      value: "+5%",
      label: "than last record",
    },
  },
];

export default statisticsCardsData;
