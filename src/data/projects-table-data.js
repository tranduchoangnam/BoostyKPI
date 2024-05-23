export const projectsTableData = [
    {
        id: "1",
        name: "AI Course",
        description: "This is a course for AI beginners.",
        plan: ["2024-01-05T10:00", "2024-04-16T16:00"],
        subtasks: [
            {
                id: "5",
                name: "Python Basics",
                start_date: "2024-01-05T11:00",
                end_date: "2024-03-20T14:00",
                priority: "High",
                status: "Done",
                reminder: {
                    status: true,
                    before_start: 0,
                    repeat: "Daily",
                    custom_time: "2024-05-15T10:00",
                    custom_date: "2024-05-15T10:00",
                },
            },
            {
                id: "9",
                name: "Machine Learning Basics",
                start_date: "2024-01-14T12:00",
                end_date: "2024-04-03T15:30",
                priority: "Medium",
                status: "In Progress",
                reminder: {
                    status: true,
                    before_start: 0,
                    repeat: "Daily",
                    custom_time: "2024-05-18T14:00",
                    custom_date: "2024-05-18T14:00",
                },
            },
            {
                id: "19",
                name: "Deep Learning Basics",
                start_date: "2024-01-20T12:00",
                end_date: "2024-04-16T15:30",
                priority: "Medium",
                status: "In Progress",
                reminder: {
                    status: true,
                    before_start: 0,
                    repeat: "Daily",
                    custom_time: "2024-05-18T14:00",
                    custom_date: "2024-05-18T14:00",
                },
            },
        ],
        tags: ["AI", "Machine Learning"],
        priority: "High",
        completion: 60,
    },
    {
        id: "2",
        name: "GPA 4.0",
        description: "Get a GPA of 4.0 in the next semester.",
        plan: ["2024-01-22T09:00", "2024-05-02T17:00"],
        subtasks: [
            {
                id: "1",
                name: "Python Basics",
                start_date: "2024-01-25T10:00",
                end_date: "2024-02-25T12:00",
                priority: "High",
                status: "Done",
                reminder: {
                    status: true,
                    before_start: "00:30:00",
                    repeat: "Daily",
                    custom_time: "2024-05-21T10:00",
                    custom_date: "2024-05-21T10:00",
                },
            },
        ],
        tags: ["Machine Learning"],
        priority: "Medium",
        completion: 40,
    },
    {
        id: "3",
        name: "Backend Certification",
        description: "Get a backend certification from Coursera.",
        plan: ["2024-02-22T11:00", "2024-05-10T15:00"],
        subtasks: [
            {
                id: "2",
                name: "Python Basics",
                start_date: "2024-02-23T09:00",
                end_date: "2024-03-23T11:00",
                priority: "High",
                status: "Done",
                reminder: {
                    status: true,
                    before_start: "00:30:00",
                    repeat: "Daily",
                    custom_time: "2024-05-23T09:00",
                    custom_date: "2024-05-23T09:00",
                },
            },
        ],
        tags: ["AI", "Machine Learning"],
        priority: "Medium",
        completion: 20,
    },
    {
        id: "4",
        name: "JLPT N2",
        description: "Get a JLPT N2 certification.",
        plan: ["2024-05-25T08:00", "2024-06-20T18:00"],
        subtasks: [
            {
                id: "4",
                name: "Python Basics",
                start_date: "2024-05-26T14:00",
                end_date: "2024-05-26T16:00",
                priority: "High",
                status: "Done",
                reminder: {
                    status: true,
                    before_start: "00:30:00",
                    repeat: "Daily",
                    custom_time: "2024-05-26T14:00",
                    custom_date: "2024-05-26T14:00",
                },
            },
        ],
        tags: ["AI", "Machine Learning"],
        priority: "Low",
        completion: 80,
    },
    {
        id: "5",
        name: "Business Certification",
        description: "Get a business certification from Coursera.",
        plan: ["2024-06-01T09:00", "2024-06-30T17:00"],
        subtasks: [
            {
                id: "7",
                name: "Python Basics",
                start_date: "2024-06-02T10:00",
                end_date: "2024-06-02T12:00",
                priority: "High",
                status: "Done",
                reminder: {
                    status: true,
                    before_start: "00:30:00",
                    repeat: "Daily",
                    custom_time: "2024-06-02T10:00",
                    custom_date: "2024-06-02T10:00",
                },
            },
        ],
        tags: ["AI", "Machine Learning"],
        priority: "High",
        completion: 100,
    },
];

export default projectsTableData;
