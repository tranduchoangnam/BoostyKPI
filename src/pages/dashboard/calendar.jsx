import { Card, Option, Typography, Select } from "@material-tailwind/react";
import { projectsTableData } from "@/data";
import { useEffect, useState, useMemo } from "react";
import { Header } from "@/components/layout";
import dayjs from "dayjs";
import { CommonButton } from "@/components/buttons";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { FunnelIcon } from "@heroicons/react/24/outline";
import { KpiCard, TaskCard } from "@/components/calendar";
export function Calendar() {
    const [data, setData] = useState(projectsTableData);
    const [date, setDate] = useState(new Date());
    const [type, setType] = useState("year");
    const [slotWidth, setSlotWidth] = useState(170);
    const [eventHeight, setEventHeight] = useState({ kpi: 72, task: 30 });
    const [resourceHeight, setResourceHeight] = useState(197);
    const [events, setEvents] = useState([]);
    const [resources, setResources] = useState([]);
    useEffect(() => {
        let events = [];
        let resources = [];
        data.map((kpi) => {
            resources.push({
                id: kpi.id,
                title: kpi.name,
            });
            events.push({
                title: kpi.name,
                start: new Date(kpi.plan[0]),
                end: new Date(kpi.plan[1]),
                resourceId: kpi.id,
                extendedProps: {
                    type: "kpi",
                },
            });

            kpi.subtasks.map((subtask) => {
                events.push({
                    title: subtask.name,
                    start: new Date(subtask.start_date),
                    end: new Date(subtask.end_date),
                    resourceId: kpi.id,
                    extendedProps: {
                        type: "task",
                    },
                });
            });
        });
        setEvents(events);
        setResources(resources);
    }, [data]);

    const slotTemplate = {
        year: {
            slotLabels: [
                "JAN",
                "FEB",
                "MAR",
                "APR",
                "MAY",
                "JUN",
                "JUL",
                "AUG",
                "SEP",
                "OCT",
                "NOV",
                "DEC",
            ],
            subSlotLabels: ["1", "8", "15", "22"],
        },
        month: {
            slotLabels: [
                "JAN",
                "FEB",
                "MAR",
                "APR",
                "MAY",
                "JUN",
                "JUL",
                "AUG",
                "SEP",
                "OCT",
                "NOV",
                "DEC",
            ],
            subSlotLabels: ["1", "8", "15", "22"],
        },
        week: {
            slotLabels: [
                "JAN",
                "FEB",
                "MAR",
                "APR",
                "MAY",
                "JUN",
                "JUL",
                "AUG",
                "SEP",
                "OCT",
                "NOV",
                "DEC",
            ],
            subSlotLabels: ["1", "8", "15", "22"],
        },
        day: {
            slotLabels: [
                "JAN",
                "FEB",
                "MAR",
                "APR",
                "MAY",
                "JUN",
                "JUL",
                "AUG",
                "SEP",
                "OCT",
                "NOV",
                "DEC",
            ],
            subSlotLabels: ["1", "8", "15", "22"],
        },
    };
    const multiScroll = () => {
        const timelineWrapper = document.getElementById("timeline-wrapper");
        const timeline = document.querySelectorAll("[id=timelineScroll]");
        //if any of the timeline element is scroll, then scroll all the timeline elements
        timelineWrapper.addEventListener("scroll", (e) => {
            timeline.forEach((element) => {
                element.scrollLeft = e.target.scrollLeft;
                element.scrollRight = e.target.scrollRight;
            });
        });
    };
    const daysInMonth = (year, month) => new Date(year, month, 0).getDate();
    const formatedCurrentDate = useMemo(() => {
        if (type === "year") return dayjs(date).format("YYYY");
        if (type === "month") return dayjs(date).format("MMM, YYYY");
        if (type === "week") {
            const currentDay = dayjs(date).format("DD");
            if (currentDay <= 7)
                return "01-07 " + dayjs(date).format("MMM, YYYY");
            if (currentDay <= 14)
                return "08-14 " + dayjs(date).format("MMM, YYYY");
            if (currentDay <= 21)
                return "15-21 " + dayjs(date).format("MMM, YYYY");
            return (
                "22-" +
                daysInMonth(date.getFullYear, date.getMonth) +
                dayjs(date).format("MMM, YYYY")
            );
        }
    }, [date]);
    const prev = () => {
        if (type === "year") setDate(dayjs(date).subtract(1, "year"));
    };
    const next = () => {
        if (type === "year") setDate(dayjs(date).add(1, "year"));
    };
    const distance = (e) => {
        const date = new Date(e);
        const month = date.getMonth();
        const year = date.getFullYear();
        const day = date.getDate();
        const slotDistance = slotWidth * date.getMonth();
        const subSlotDistance = (slotWidth * date.getDate()) / 30;
        return slotDistance + subSlotDistance;
    };
    const taskTopDistance = (kpiIndex, subtaskIndex) => {
        return (
            kpiIndex * resourceHeight +
            eventHeight.kpi +
            8 +
            subtaskIndex * (eventHeight.task + 8)
        );
    };
    useEffect(() => {
        multiScroll();
    }, []);
    return (
        <div>
            <div className="relative">
                <Header name={{ page: "Calendar" }} />
                <div className="absolute right-0 top-0 h-full flex items-center gap-4">
                    <Typography className="text-[24px] font-bold">
                        {formatedCurrentDate}
                    </Typography>
                    <div className="flex gap-4">
                        <button onClick={prev}>
                            <ChevronLeftIcon className="w-6 h-6" />
                        </button>
                        <button onClick={next}>
                            <ChevronRightIcon className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="relative mx-0 mb-6 mt-4 bg-white h-[calc(100vh-160px)] overflow-y-auto">
                {/* Header */}
                <div className="flex sticky inset-0 z-50 bg-white">
                    <div className="w-1/4 ">
                        <div className="flex items-center justify-between px-6 py-2 h-full border-b">
                            <div className="flex items-center gap-2">
                                <FunnelIcon className="w-6 h-6" />
                                <Typography className="text-[14px] font-bold">
                                    Filter
                                </Typography>
                            </div>
                            <div>
                            <Select
                                        label="Duration"
                                        value={type}
                                        onChange={()=>{}}
                                        className="w-[100px]"
                                        containerProps={{
                                            className:
                                                "!w-[100px] !min-w-[100px]",
                                        }}
                                    >
                                        <Option value={"year"}>Year</Option>
                                        <Option value={"month"}>Month</Option>
                                        <Option value={"week"}>Week</Option>
                                    </Select>
                            </div>
                        </div>
                    </div>
                    <div className="w-3/4 relative h-[50px] overflow-hidden">
                        <div
                            id="timelineScroll"
                            className="grid grid-flow-col pb-[17px] overflow-x-scroll"
                            style={{
                                gridAutoColumns: `${slotWidth}px`,
                            }}
                        >
                            {slotTemplate[type].slotLabels.map((label) => (
                                <div
                                    key={label}
                                    className="border h-[50px] grid grid-cols-4 px-2 py-1 "
                                >
                                    <div className="col-span-4">
                                        <Typography className="font-bold text-[14px]">
                                            {label}
                                        </Typography>
                                    </div>
                                    {slotTemplate[type].subSlotLabels.map(
                                        (subLabel) => (
                                            <div className="col-span-1 text-[11px]">
                                                {subLabel}
                                            </div>
                                        ),
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Content */}
                <div id="timelineContent" className="relative">
                    {data.map((kpi, index) => (
                        <div key={index} className="flex relative">
                            {/* Resources */}
                            <div
                                key={kpi.id}
                                className="w-1/4 border py-4 px-6"
                                style={{
                                    minHeight: `${resourceHeight}px`,
                                }}
                            >
                                <Typography className="text-[14px] text-[#2C2C2C] font-bold">
                                    {kpi.name}
                                </Typography>
                                <Typography className="text-[14px] text-[#3C98CC] font-bold">
                                    {dayjs(kpi.plan[0]).format("MMM DD, YYYY")}{" "}
                                    -{" "}
                                    {dayjs(kpi.plan[1]).format("MMM DD, YYYY")}
                                </Typography>
                                <Typography className="text-[14px] text-[#979797] font-medium">
                                    {kpi.subtasks.length} subtasks
                                </Typography>
                            </div>

                            {/* Events */}
                            <div
                                className="relative w-3/4  overflow-hidden"
                                style={{
                                    height: `${resourceHeight}px`,
                                }}
                            >
                                <div
                                    id="timelineScroll"
                                    className="relative grid grid-flow-col pb-[17px] overflow-hidden"
                                    style={{
                                        gridAutoColumns: `${slotWidth}px`,
                                    }}
                                >
                                    {slotTemplate[type].slotLabels.map(
                                        (label) => (
                                            <div
                                                key={label}
                                                className="h-[120px]  grid grid-cols-4"
                                                style={{
                                                    height: `${resourceHeight}px`,
                                                }}
                                            >
                                                {slotTemplate[
                                                    type
                                                ].subSlotLabels.map(
                                                    (
                                                        subLabel,
                                                        subLabelindex,
                                                    ) => (
                                                        <div
                                                            className={`col-span-1 ${
                                                                subLabelindex ===
                                                                0
                                                                    ? "bg-[#D0DEF5]"
                                                                    : "bg-[#DEE8F9]"
                                                            } border border-[#BBD1F6]`}
                                                        ></div>
                                                    ),
                                                )}
                                            </div>
                                        ),
                                    )}
                                    <div
                                        className="absolute z-10 flex flex-col gap-2 py-2"
                                        style={{
                                            top: 0,
                                            left: distance(kpi.plan[0]),
                                            width:
                                                distance(kpi.plan[1]) -
                                                distance(kpi.plan[0]),
                                        }}
                                    >
                                        <KpiCard kpi={kpi} />
                                    </div>
                                    {kpi.subtasks.map(
                                        (subtask, subtask_index) => (
                                            <div
                                                className="absolute z-10 flex flex-col gap-2 py-2"
                                                style={{
                                                    top:
                                                        index * resourceHeight +
                                                        eventHeight.kpi +
                                                        8 +
                                                        subtask_index *
                                                            (eventHeight.task +
                                                                8),
                                                    left: distance(
                                                        subtask.start_date,
                                                    ),
                                                    width:
                                                        distance(
                                                            subtask.end_date,
                                                        ) -
                                                        distance(
                                                            subtask.start_date,
                                                        ),
                                                }}
                                            >
                                                <TaskCard task={subtask} />
                                            </div>
                                        ),
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                    <div
                        id="timeline-wrapper"
                        className="absolute inset-0 left-1/4 top-0 pb-24 z-10 h-full w-3/4 overflow-x-auto"
                    >
                        <div style={{ width: `${slotWidth * 12}px` }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
