import FullCalendar from "@fullcalendar/react";
import { KpiCard, TaskCard } from "@/components/calendar";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import { projectsTableData } from "@/data";
import { useEffect, useState } from "react";
import { Header } from "@/components/layout";
export function Calendar() {
    const [data, setData] = useState(projectsTableData);
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
    return (
        <div >
            <Header name={{ page: "Calendar" }} />
            <div className="mt-4 bg-white relative">
               
            <FullCalendar
                plugins={[resourceTimelinePlugin]}
                initialView="resourceTimelineDay"
                eventContent={renderEventContent}
                eventColor="transparent"
                resourceAreaHeaderContent="KPIs"
                resources={resources}
                resourceAreaWidth={"25%"}
                resourceLabelClassNames={["bg-white"]}
                slotLabelClassNames={["bg-white"]}
                resourceAreaHeaderClassNames={["bg-white"]}
                events={events}
                dayMaxEvents={4}
                eventMinWidth={0}
                slotMinWidth={200}
                headerToolbar={{
                    left: "prev,next today",
                    center: "title",
                    right: "resourceTimelineYear,resourceTimelineMonth,resourceTimelineWeek,resourceTimelineDay",
                }}
                views={{
                    resourceTimelineDay: {
                        slotDuration: { hours: 1 },
                    },
                    resourceTimelineWeek: {
                        slotDuration: { days: 1 },
                    },
                    resourceTimelineMonth: {
                        slotDuration: { weeks: 1 },
                    },
                    resourceTimelineYear: {
                        slotDuration: { months: 1 },
                    },
                }}
                eventOrder={(a, b) => {
                    return a.extendedProps.type >= b.extendedProps.type
                        ? 1
                        : -1;
                }}
                editable={true}
            />
            </div>
        </div>
    );
}

// a custom render function
function renderEventContent(eventInfo) {
    const type = eventInfo.event.extendedProps.type;
    return (
        <>
            <div className="bg-white w-full h-full relative">
                {type == "kpi" && (
                    <KpiCard
                        className=""
                        kpi={{
                            name: eventInfo.event.title,
                            plan: eventInfo.timeText,
                            type: eventInfo.event.extendedProps.type,
                        }}
                    />
                )}
                {type == "task" && (
                    <TaskCard
                        task={{
                            title: eventInfo.event.title,
                            plan: eventInfo.timeText,
                        }}
                    />
                )}
            </div>
        </>
    );
}

