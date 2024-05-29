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
import { TargetTypeCard } from "@/components/cards";
import { CustomizedSlider } from "@/components/inputs";
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
            <div className="flex flex-col gap-4 pt-24 items-center w-full">
                <RocketLaunchIcon className="h-24 w-24 text-[#1E5EFF]" />
                <Typography
                    id="target-name"
                    variant="h4"
                    className="text-center"
                >
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
                            console.log("enter");
                            if (!form.name) {
                                setErrors({ name: "Target name is required" });
                                return;
                            }
                            setIndex(1);
                            setTimeout(() => {
                                document
                                    .getElementById("target-scroll-0")
                                    .blur();
                                setOpenDatePicker(true);
                            }, 500);
                        }
                    }}
                />
                <CalendarDaysIcon className="h-24 w-24 text-[#1E5EFF]" />
                <Typography variant="h4" className="text-center">
                    Is there any deadline?
                </Typography>
                <Typography
                    id="target-scroll-1"
                    variant="body1"
                    className="text-center text-blue-gray-400"
                >
                    This is optional.
                </Typography>
                <Box sx={{ marginBottom: "120px" }}>
                    <DatePicker
                        open={openDatePicker}
                        onOpen={() => setOpenDatePicker(true)}
                        onClose={() => {
                            setOpenDatePicker(false);
                            setIndex(2);
                        }}
                        value={form.deadline || null}
                        onChange={(newValue) => {
                            setForm({ ...form, deadline: newValue });
                        }}
                    />
                </Box>
                <PencilSquareIcon className="h-24 w-24 text-[#1E5EFF]" />
                <Typography variant="h4" className="text-center">
                    Rate your target's weight
                </Typography>
                <Typography
                    variant="body1"
                    className="text-center text-blue-gray-400"
                    id="target-scroll-2"
                >
                    Only 20% left to reach your goal. Keep pushing!
                </Typography>
                <Box sx={{ marginBottom: "120px", marginTop: "48px" }}>
                    <CustomizedSlider
                        weight={form.weight}
                        setWeight={(e) => {
                            setForm({ ...form, weight: e });
                        }}
                        total={20}
                    />
                </Box>
                <PuzzlePieceIcon className="h-24 w-24 text-[#1E5EFF]" />
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
                <div className="mb-[100px] w-full">
                    <TargetTypeCard />
                </div>
                <div className="flex gap-8">
                    <Button
                        id="target-scroll-4"
                        variant="outlined"
                        onClick={() => setOpen(false)}
                        sx={{
                            width: "148px",
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        id="target-scroll-4"
                        variant="contained"
                        size="large"
                        sx={{
                            backgroundColor: "#1E5EFF",
                            width: "148px",
                        }}
                        onClick={() => onSubmit()}
                    >
                        Add Target
                    </Button>
                </div>
            </div>
        </CommonModal>
    );
};
