import { CommonModal } from "@/components/modals/CommonModal";
import { Box, Button, Typography, Input, TextField } from "@mui/material";
import {
    CalendarDaysIcon,
    TrophyIcon,
    PencilSquareIcon,
    CursorArrowRippleIcon,
    CursorArrowRaysIcon,
    RocketLaunchIcon,
    FireIcon,
    PuzzlePieceIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TargetTypeCard from "@/components/cards/TargetTypeCard";

export const TargetAddModal = ({ open, setOpen, form, setForm, onSubmit }) => {
    const [openDatePicker, setOpenDatePicker] = useState(false);
    const [index, setIndex] = useState(0);
    const [errors, setErrors] = useState({
        name: "",
        description: "",
        deadline: "",
    });

    useEffect(() => {
        if (form.name) setErrors({ ...errors, name: "" });
        if (form.description) setErrors({ ...errors, description: "" });
        if (form.deadline) setErrors({ ...errors, deadline: "" });
    }, [form]);
    useEffect(() => {
        const e = document.getElementById(`target-scroll-${index}`);
        if (e) {
            e.scrollIntoView({ behavior: "smooth", block: "center" });
            setTimeout(() => {
                e.focus();
            }, 500);
        }
    }, [index]);
    useEffect(() => {
        setForm({
            name: "",
            deadline: "",
            description: "",
        });
        setTimeout(() => {
            const e = document.getElementById(`target-scroll-0`);
            if (e) {
                e.focus();
                console.log("focused");
            }
        }, 300);
    }, [open]);
    return (
        <CommonModal open={open} setOpen={setOpen}>
            <div className="flex flex-col gap-4 items-center">
                <RocketLaunchIcon className="h-24 w-24 text-blue-gray-400" />
                <Typography id="target-name" variant="h4" className="text-center">
                    Add a new target
                </Typography>
                <Typography
                    variant="body1"
                    className="text-center text-blue-gray-400"
                >
                    Add a new target to your list and start working on it.
                </Typography>
                <TextField
                    id="target-scroll-0"
                    variant="standard"
                    placeholder="Enter your target name"
                    sx={{ marginBottom: "120px" }}
                    value={form.name || ""}
                    error={errors ? errors.name.length > 0 : false}
                    helperText={errors.name || ""}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            if (!form.name) {
                                setErrors({ name: "Target name is required" });
                                return;
                            }
                            setIndex(1);
                        }
                    }}
                />
                <PencilSquareIcon className="h-24 w-24 text-blue-gray-400" />
                <Typography variant="h4" className="text-center">
                    Describe your target
                </Typography>
                <Typography
                    variant="body1"
                    className="text-center text-blue-gray-400"
                >
                    This is optional.
                </Typography>
                <TextField
                    variant="standard"
                    id="target-scroll-1"
                    value={form.description || ""}
                    onChange={(e) =>
                        setForm({ ...form, description: e.target.value })
                    }
                    sx={{ marginBottom: "120px" }}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            setIndex(2);
                            setTimeout(() => {
                                document.getElementById("target-scroll-1").blur();
                                setOpenDatePicker(true);
                            }, 500);
                        }
                    }}
                />
                <CalendarDaysIcon className="h-24 w-24 text-blue-gray-400" />
                <Typography
                    id="target-scroll-2"
                    variant="h4"
                    className="text-center"
                >
                    Is there any deadline?
                </Typography>
                <Typography
                    variant="body1"
                    className="text-center text-blue-gray-400"
                >
                    This is optional.
                </Typography>
                <Box sx={{ marginBottom: "120px" }}>
                    <DatePicker
                        id="target-scroll-2"
                        open={openDatePicker}
                        onOpen={() => setOpenDatePicker(true)}
                        onClose={() => {
                            setOpenDatePicker(false);
                            setIndex(3);
                        }}
                        value={form.deadline || null}
                        onChange={(newValue) => {
                            setForm({ ...form, deadline: newValue });
                        }}
                    />
                </Box>
                <PuzzlePieceIcon className="h-24 w-24 text-blue-gray-400" />
                <Typography
                    id="target-scroll-3"
                    variant="h4"
                    className="text-center"
                >
                    Type of target
                </Typography>
                <Typography
                    variant="body1"
                    className="text-center text-blue-gray-400"
                >
                    Which type of target you want to add?
                </Typography>
                <div className="mb-[100px]">
                <TargetTypeCard />
                </div>
                <Button
                    id="target-scroll-4"
                    variant="contained"
                    sx={{
                        backgroundColor: "#1E5EFF",
                    }}
                    onClick={() => onSubmit()}
                >
                    Add Target
                </Button>
            </div>
        </CommonModal>
    );
};
