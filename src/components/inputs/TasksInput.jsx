import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { StatusButton } from "@/components/buttons";
import { XMarkIcon } from "@heroicons/react/24/solid";
export const TasksInput = ({ tasks, setTasks }) => {
    const getMaxId = (tasks) => {
        let maxId = 0;
        tasks.forEach((task) => {
            if (task.id > maxId) {
                maxId = task.id;
            }
        });
        return maxId;
    };
    const handleAddTask = () => {
        setTasks([
            ...tasks,
            {
                id: getMaxId(tasks) + 1,
                name: "New task",
                status: "In Progress",
            },
        ]);
    };
    const handleChange = (e, id) => {
        setTasks(
            tasks.map((t) =>
                t.id === id
                    ? {
                          ...t,
                          [e.target.name]: e.target.value,
                      }
                    : t,
            ),
        );
    };
    const handleDeleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };
    return (
        <>
            <div className="w-full px-8">
                <Button
                    size="small"
                    variant="contained"
                    sx={{
                        marginBottom: "16px",
                        marginLeft: "16px",
                        backgroundColor: "#1E5EFF",
                    }}
                    onClick={() => handleAddTask()}
                >
                    Add Task
                </Button>
                <Stack gap={1}>
                    {tasks &&
                        tasks.toReversed().map((task) => (
                            <Box
                                key={task.id}
                                display="grid"
                                justifyContent="between"
                                sx={{
                                    gridTemplateColumns: "1fr 1fr",
                                    backgroundColor: "#F9F9F9",
                                    paddingX: "16px",
                                    paddingY: "8px",
                                    justifyContent: "space-between",
                                }}
                            >
                                <TextField
                                    name="name"
                                    size="small"
                                    value={task.name}
                                    label="Name"
                                    sx={{
                                        columnSpan: "2",
                                    }}
                                    onChange={(e) => handleChange(e, task.id)}
                                />
                                <div className="flex items-center justify-end md:gap-4 gap-2">
                                    <StatusButton
                                        status={task.status}
                                        setStatus={(e) =>
                                            handleChange(
                                                {
                                                    target: {
                                                        name: "status",
                                                        value: e,
                                                    },
                                                },
                                                task.id,
                                            )
                                        }
                                    />
                                    <i
                                        className="fas fa-trash text-[#ff4444] cursor-pointer"
                                        onClick={() =>
                                            handleDeleteTask(task.id)
                                        }
                                    />
                                </div>
                            </Box>
                        ))}
                </Stack>
            </div>
        </>
    );
};
