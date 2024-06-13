import { number } from "prop-types";

export const projectsTableData = [
    {
        id: "1",
        name: "AI Course",
        description: "This is a course for AI beginners.",
        plan: ["2024-01-05T10:00", "2024-04-16T16:00"],
        targets: [
            {
                id: "5",
                name: "Python Basics",
                start_date: "2024-01-05T11:00",
                end_date: "2024-03-20T14:00",
                priority: "High",
                status: "Done",
                type: {
                    tasks: [
                        {
                            id: 0,
                            name: "New task",
                            status: "In Progress",
                        },
                    ],
                },
                weight: 20,
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
                type: {
                    number: {
                        value: {
                            start: 0,
                            current: 0,
                            target: 1,
                        },
                        unit: "",
                    },
                },
                weight: 10,
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
                weight: 10,
                type: {
                    currency: {
                        value: {
                            start: 0,
                            current: 0,
                            target: 1,
                        },
                        unit: "VND",
                    },
                },
                reminder: {
                    status: true,
                    before_start: 0,
                    repeat: "Daily",
                    custom_time: "2024-05-18T14:00",
                    custom_date: "2024-05-18T14:00",
                },
            },
            {
                id: "291",
                name: "Deep Learning Basics",
                start_date: "2024-01-20T12:00",
                end_date: "2024-04-16T15:30",
                priority: "Medium",
                status: "In Progress",
                type: {
                    boolean: true,
                },
                weight: 60,
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
        completion: 20,
    },
    {
        id: "2",
        name: "GPA 4.0",
        description: "Get a GPA of 4.0 in the next semester.",
        plan: ["2024-01-22T09:00", "2024-07-02T17:00"],
        targets: [
            {
                id: "51",
                name: "Complete all assignments",
                start_date: "2024-01-22T11:00",
                end_date: "2024-06-20T14:00",
                priority: "High",
                status: "In Progress",
                type: {
                    number: {
                        value: {
                            start: 0,
                            current: 0,
                            target: 10,
                        },
                        unit: "",
                    },
                },
                weight: 40,
                reminder: {
                    status: true,
                    before_start: 0,
                    repeat: "Daily",
                    custom_time: "2024-05-15T10:00",
                    custom_date: "2024-05-15T10:00",
                },
            },
            {
                id: "91",
                name: "Achieve high scores in mid-term exams",
                start_date: "2024-03-14T12:00",
                end_date: "2024-04-14T15:30",
                priority: "High",
                status: "Done",
                type: {
                    boolean: true,
                },
                weight: 20,
                reminder: {
                    status: true,
                    before_start: 0,
                    repeat: "Daily",
                    custom_time: "2024-05-18T14:00",
                    custom_date: "2024-05-18T14:00",
                },
            },
            {
                id: "191",
                name: "Achieve high scores in final exams",
                start_date: "2024-05-20T12:00",
                end_date: "2024-07-01T15:30",
                priority: "High",
                status: "In Progress",
                weight: 30,
                type: {
                    tasks: [
                        {
                            id: 0,
                            name: "New task",
                            status: "In Progress",
                        },
                        {
                            id: 2,
                            name: "New task",
                            status: "In Progress",
                        },
                        {
                            id: 3,
                            name: "New task",
                            status: "In Progress",
                        },
                    ],
                },
                reminder: {
                    status: true,
                    before_start: 0,
                    repeat: "Daily",
                    custom_time: "2024-05-18T14:00",
                    custom_date: "2024-05-18T14:00",
                },
            },
        ],
        tags: ["4.0 GPA", "Study", "Exams"],
        priority: "Medium",
        completion: 20,
    },
    {
        id: "3",
        name: "Backend Certification",
        description: "Get a backend certification from Coursera.",
        plan: ["2024-02-22T11:00", "2024-05-10T15:00"],
        targets: [
            {
                id: "192",
                name: "Complete Deep Learning Course",
                start_date: "2024-02-22T12:00",
                end_date: "2024-04-16T15:30",
                priority: "Medium",
                status: "Done",
                weight: 20,
                type: {
                    tasks: [
                        {
                            id: 0,
                            name: "Complete Module 1",
                            status: "Pending",
                        },
                        {
                            id: 1,
                            name: "Complete Module 2",
                            status: "Pending",
                        },
                    ],
                },
                reminder: {
                    status: true,
                    before_start: 0,
                    repeat: "Daily",
                    custom_time: "2024-05-18T14:00",
                    custom_date: "2024-05-18T14:00",
                },
            },
            {
                id: "193",
                name: "Complete REST API Course",
                start_date: "2024-02-23T09:00",
                end_date: "2024-03-30T17:00",
                priority: "High",
                status: "Pending",
                weight: 20,
                type: {
                    tasks: [
                        {
                            id: 0,
                            name: "Complete Module 1",
                            status: "Pending",
                        },
                        {
                            id: 1,
                            name: "Complete Module 2",
                            status: "Pending",
                        },
                    ],
                },
                reminder: {
                    status: true,
                    before_start: 1,
                    repeat: "Weekly",
                    custom_time: "2024-02-23T09:00",
                    custom_date: "2024-02-23T09:00",
                },
            },
            {
                id: "194",
                name: "Complete Node.js Basics",
                start_date: "2024-03-31T10:00",
                end_date: "2024-05-10T14:00",
                priority: "Medium",
                status: "Pending",
                weight: 15,
                type: {
                    number: {
                        value: {
                            start: 0,
                            current: 0,
                            target: 5,
                        },
                        unit: "",
                    },
                },
                reminder: {
                    status: true,
                    before_start: 2,
                    repeat: "Weekly",
                    custom_time: "2024-03-31T10:00",
                    custom_date: "2024-03-31T10:00",
                },
            },
        ],
        tags: ["Backend", "Node.js", "REST API"],
        priority: "Medium",
        completion: 20,
    },
    {
        id: "4",
        name: "JLPT N2",
        description: "Get a JLPT N2 certification.",
        plan: ["2024-05-25T08:00", "2024-06-20T18:00"],
        targets: [
            {
                id: "193",
                name: "Complete Vocabulary Course",
                start_date: "2024-05-25T09:00",
                end_date: "2024-06-10T17:00",
                priority: "High",
                status: "Done",
                weight: 40,
                type: {
                    currency: {
                        value: {
                            start: 0,
                            current: 0,
                            target: 1,
                        },
                        unit: "VND",
                    },
                },
                reminder: {
                    status: true,
                    before_start: 0,
                    repeat: "Daily",
                    custom_time: "2024-05-18T14:00",
                    custom_date: "2024-05-18T14:00",
                },
            },
            {
                id: "194",
                name: "Complete Grammar Course",
                start_date: "2024-05-26T10:00",
                end_date: "2024-06-15T18:00",
                priority: "Medium",
                status: "In Progress",
                weight: 30,
                type: {
                    number: {
                        value: {
                            start: 0,
                            current: 0,
                            target: 1,
                        },
                        unit: "",
                    },
                },
                reminder: {
                    status: true,
                    before_start: 1,
                    repeat: "Weekly",
                    custom_time: "2024-05-26T10:00",
                    custom_date: "2024-05-26T10:00",
                },
            },
            {
                id: "195",
                name: "Complete Listening Practice",
                start_date: "2024-05-27T11:00",
                end_date: "2024-06-20T16:00",
                priority: "Low",
                status: "Pending",
                weight: 30,
                type: {
                    tasks: [
                        {
                            id: "0",
                            name: "Practice Session 1",
                            status: "Pending",
                        },
                        {
                            id: "1",
                            name: "Practice Session 2",
                            status: "Pending",
                        },
                    ],
                },
                reminder: {
                    status: true,
                    before_start: 2,
                    repeat: "Weekly",
                    custom_time: "2024-05-27T11:00",
                    custom_date: "2024-05-27T11:00",
                },
            },
        ],
        tags: ["Language Learning", "Japanese"],
        priority: "Medium",
        completion: 40,
    },
    {
        id: "5",
        name: "Business Certification",
        description: "Get a business certification from Coursera.",
        plan: ["2024-06-01T09:00", "2024-06-30T17:00"],
        targets: [
            {
                id: "194",
                name: "Complete Finance Course",
                start_date: "2024-06-01T10:00",
                end_date: "2024-06-15T15:00",
                priority: "High",
                status: "Done",
                weight: 40,
                type: {
                    currency: {
                        value: {
                            start: 0,
                            current: 100000,
                            target: 1000000,
                        },
                        unit: "VND",
                    },
                },
                reminder: {
                    status: true,
                    before_start: 0,
                    repeat: "Daily",
                    custom_time: "2024-06-01T10:00",
                    custom_date: "2024-06-01T10:00",
                },
            },
            {
                id: "195",
                name: "Complete Marketing Course",
                start_date: "2024-06-02T09:00",
                end_date: "2024-06-20T17:00",
                priority: "Medium",
                status: "Pending",
                weight: 30,
                type: {
                    tasks: [
                        {
                            id: "0",
                            name: "Complete Module 1",
                            status: "Pending",
                        },
                        {
                            id: "1",
                            name: "Complete Module 2",
                            status: "Pending",
                        },
                    ],
                },
                reminder: {
                    status: true,
                    before_start: 1,
                    repeat: "Weekly",
                    custom_time: "2024-06-02T09:00",
                    custom_date: "2024-06-02T09:00",
                },
            },
            {
                id: "196",
                name: "Complete Business Strategy Course",
                start_date: "2024-06-03T11:00",
                end_date: "2024-06-30T16:00",
                priority: "High",
                status: "Pending",
                weight: 30,
                type: {
                    number: {
                        value: {
                            start: 0,
                            current: 1,
                            target: 1,
                        },
                        unit: "",
                    },
                },
                reminder: {
                    status: true,
                    before_start: 2,
                    repeat: "Weekly",
                    custom_time: "2024-06-03T11:00",
                    custom_date: "2024-06-03T11:00",
                },
            },
        ],
        tags: ["Business", "Certification"],
        priority: "High",
        completion: 40,
    },
];

export default projectsTableData;
