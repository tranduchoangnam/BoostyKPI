export const projectsTableData = [
    {
        id: 1,
        name: "AI Course",
        deadline: "24.05.2020",
        subtasks: [
            {
                name: "Python Basics",
                start_date: "2022-04-17T15:30",
                end_date: "2022-04-17T15:30",
                priority: "High",
                status: "Completed",
                reminder: {
                    status: true,
                    before_start: 0,
                    repeat: "Daily",
                    custom_time: "2022-04-17T15:30",
                    custom_date: "2022-04-17T15:30",
                },
            },
            {
                name: "Machine Learning Basics",
                start_date: "2022-04-17T15:30",
                end_date: "2022-04-17T15:30",
                priority: "Medium",
                status: "In Progress",
                reminder: {
                    status: true,
                    before_start: 0,
                    repeat: "Daily",
                    custom_time: "2022-04-17T15:30",
                    custom_date: "2022-04-17T15:30",
                },
            },
        ],
        priority: "High",
        completion: 60,
    },
    {
        id: 2,
        name: "GPA 4.0",
        deadline: "24.05.2020",
        subtasks: [
            {
                name: "Python Basics",
                start_date: "2022-04-17T15:30",
                end_date: "2022-04-17T15:30",
                priority: "High",
                status: "Completed",
                reminder: {
                    status: true,
                    before_start: "00:30:00",
                    repeat: "Daily",
                    custom_time: "2022-04-17T15:30",
                    custom_date: "2022-04-17T15:30",
                },
            },
        ],
        priority: "Medium",
        completion: 40,
    },
    {
        id: 3,
        name: "Backend Certification",
        deadline: "24.05.2020",
        subtasks: [
            {
                name: "Python Basics",
                start_date: "2022-04-17T15:30",
                end_date: "2022-04-17T15:30",
                priority: "High",
                status: "Completed",
                reminder: {
                    status: true,
                    before_start: "00:30:00",
                    repeat: "Daily",
                    custom_time: "2022-04-17T15:30",
                    custom_date: "2022-04-17T15:30",
                },
            },
        ],
        priority: "Medium",
        completion: 20,
    },
    {
        id: 4,
        name: "JLPT N2",
        deadline: "24.05.2020",
        subtasks: [
            {
                name: "Python Basics",
                start_date: "2022-04-17T15:30",
                end_date: "2022-04-17T15:30",
                priority: "High",
                status: "Completed",
                reminder: {
                    status: true,
                    before_start: "00:30:00",
                    repeat: "Daily",
                    custom_time: "2022-04-17T15:30",
                    custom_date: "2022-04-17T15:30",
                },
            },
        ],
        priority: "Low",
        completion: 80,
    },
    {
        id: 5,
        name: "Business Certification",
        deadline: "24.05.2020",
        subtasks: [
            {
                name: "Python Basics",
                start_date: "2022-04-17T15:30",
                end_date: "2022-04-17T15:30",
                priority: "High",
                status: "Completed",
                reminder: {
                    status: true,
                    before_start: "00:30:00",
                    repeat: "Daily",
                    custom_time: "2022-04-17T15:30",
                    custom_date: "2022-04-17T15:30",
                },
            },
        ],
        priority: "High",
        completion: 100,
    },
];

export default projectsTableData;
