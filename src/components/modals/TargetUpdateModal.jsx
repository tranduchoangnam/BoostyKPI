import { Box, Button, Modal, Grid, Typography, TextField } from "@mui/material";
import { XMarkIcon, TrophyIcon, FireIcon } from "@heroicons/react/24/outline";
import { styled } from "@mui/material/styles";
import LinearProgress, {
    linearProgressClasses,
} from "@mui/material/LinearProgress";
import { useEffect, useMemo, useState } from "react";
import { TasksInput } from "../inputs";
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: { xs: "90%", sm: "650px" },
    height: "600px",
    bgcolor: "background.paper",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transform: "translate(-50%, -50%)",
    border: "none",
    overflow: "hidden",
};

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    width: "80%",
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor:
            theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === "light" ? "#3ccc98" : "#308fe8",
    },
}));

export function TargetUpdateModal({ open, setOpen, target, setTarget }) {
    const [currentValue, setCurrentValue] = useState(0);
    const [tasks, setTasks] = useState();
    const completion = useMemo(() => {
        return (
            (currentValue /
                (target?.type.number?.value.target ??
                    target?.type.currency?.value.target ??
                    tasks?.length ??
                    1)) *
            100
        );
    }, [currentValue, target]);
    const handleSave = () => {
        if (target?.type.tasks) {
            setTarget({
                ...target,
                type: {
                    ...target.type,
                    tasks: tasks,
                },
                status: completion >= 100 ? "Done" : "In Progress",
            });
            return;
        }
        if (target?.type.number) {
            setTarget({
                ...target,
                type: {
                    ...target.type,
                    number: {
                        ...target.type.number,
                        value: {
                            ...target.type.number.value,
                            current: currentValue,
                        },
                    },
                },
                status: completion >= 100 ? "Done" : "In Progress",
            });
            return;
        }
        if (target?.type.currency) {
            setTarget({
                ...target,
                type: {
                    ...target.type,
                    currency: {
                        ...target.type.currency,
                        value: {
                            ...target.type.currency.value,
                            current: currentValue,
                        },
                    },
                },
                status: completion >= 100 ? "Done" : "In Progress",
            });
            return;
        }
        setTarget({
            ...target,
            type: {
                boolean: currentValue === 1,
            },
            status: completion >= 100 ? "Done" : "In Progress",
        });
    };
    useEffect(() => {
        if (target) {
            const current =
                target.type.number?.value.current ??
                target.type.currency?.value.current ??
                (tasks
                    ? tasks.filter((task) => task.status === "Done").length
                    : null) ??
                1;
            setCurrentValue(current);
        }
    }, [target, tasks, open]);
    useEffect(() => {
        if (target?.type.tasks) {
            setTasks(target.type.tasks);
        }
    }, [target,open]);
    return (
        <div>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{
                    "& .MuiModal-backdrop": {
                        backgroundColor: "rgba(0, 0, 0, 0.2);",
                    },
                }}
            >
                <Box sx={style}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            width: "calc(100% + 27px)",
                            overflowY: "scroll",
                        }}
                    >
                        <Box
                            sx={{
                                position: "relative",
                                width: "100%",
                                height: "100%",
                                backgroundColor: "#00437f",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                paddingY: "32px",
                            }}
                        >
                            <Button
                                sx={{
                                    position: "absolute",
                                    right: "8px",
                                    top: "8px",
                                    width: "32px",
                                    height: "64px",
                                    padding: "0px !important",
                                    borderRadius: "9999px",
                                }}
                                onClick={() => setOpen(false)}
                            >
                                <XMarkIcon className="h-6 w-6 text-white" />
                            </Button>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: "bold",
                                    color: "#FFF",
                                    marginBottom: "16px",
                                }}
                            >
                                {target?.name}
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: "bold",
                                    color: "#FFF",
                                    marginBottom: "16px",
                                }}
                            >
                                {new Intl.NumberFormat("en-US").format(
                                    completion.toFixed(2),
                                )}
                                %
                            </Typography>
                            <BorderLinearProgress
                                variant="determinate"
                                value={Math.min(completion, 100)}
                            />

                            <Box
                                sx={{
                                    display: "flex",
                                    position: "relative",
                                    width: "100%",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "16px",
                                    color: "#FFF",
                                    fontSize: "14px",
                                    marginTop: "8px",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: "14px",
                                        width: "60px",
                                        textAlign: "right",
                                    }}
                                >
                                    Start:{" "}
                                    {new Intl.NumberFormat("en-US").format(
                                        target?.type.number?.value.start ??
                                            target?.type.currency?.value
                                                .start ??
                                            0,
                                    )}
                                </Typography>
                                <Box
                                    display="flex"
                                    sx={{
                                        position: "absolute",
                                        left: "50%",
                                        transform: "translateX(-50%)",
                                        border: "1px solid #FFF",
                                        borderRadius: "9999px",
                                        backgroundColor: "white",
                                        paddingX: "16px",
                                        paddingY: "8px",
                                        color: "#00437f",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: {
                                                xs: "14px",
                                                md: "20px",
                                            },
                                            textAlign: "center",
                                        }}
                                    >
                                        Current:{"   "}
                                        {new Intl.NumberFormat("en-US").format(
                                            currentValue,
                                        )}{" "}
                                        {target?.type.currency?.unit}
                                    </Typography>
                                </Box>
                                <Typography
                                    sx={{
                                        fontSize: "14px",
                                        maxWidth: "60px",
                                    }}
                                >
                                    Target:{" "}
                                    {new Intl.NumberFormat("en-US").format(
                                        target?.type.number?.value.target ??
                                            target?.type.currency?.value
                                                .target ??
                                            tasks?.length ??
                                            1,
                                    )}
                                </Typography>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                paddingX: "16px",
                                paddingY: "32px",
                                gap: "8px",
                            }}
                        >
                            {!target?.type.tasks ? (
                                <>
                                    <Typography
                                        sx={{
                                            fontSize: "18px",
                                            color: "#00437f",
                                        }}
                                    >
                                        Update current value
                                    </Typography>
                                    <TextField
                                        variant="standard"
                                        InputProps={{
                                            inputProps: {
                                                min: 0,
                                                max: 1000000,
                                                style: {
                                                    textAlign: "center",
                                                    color: "#00437f",
                                                },
                                            },
                                        }}
                                        value={new Intl.NumberFormat(
                                            "en-US",
                                        ).format(currentValue)}
                                        onChange={(e) =>
                                            setCurrentValue(
                                                Math.min(
                                                    parseInt(
                                                        e.target.value.replace(
                                                            /,/g,
                                                            "",
                                                        ),
                                                        10,
                                                    ) || 0,
                                                    1000000000000,
                                                ),
                                            )
                                        }
                                    />
                                </>
                            ) : (
                                <Box>
                                    <TasksInput
                                        tasks={tasks}
                                        setTasks={setTasks}
                                    />
                                </Box>
                            )}
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginTop: "24px",
                                }}
                            >
                                <Button
                                    variant="outlined"
                                    sx={{
                                        color: "#00437f",
                                        borderColor: "#00437f",
                                        marginRight: "16px",
                                    }}
                                    onClick={() => setOpen(false)}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: "#00437f",
                                        color: "#FFF",
                                    }}
                                    onClick={() => {
                                        handleSave();
                                        setOpen(false);
                                    }}
                                >
                                    Save
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
