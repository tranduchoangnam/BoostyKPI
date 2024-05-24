import React, { useState } from "react";
import {
    Box,
    Typography,
    Radio,
    FormControlLabel,
    RadioGroup,
    TextField,
    Input,
    InputAdornment,
    OutlinedInput,
    InputLabel,
    FormControl,
    Select,
    MenuItem,
} from "@mui/material";
import { TargetNumberInput, TasksInput } from "@/components/inputs";
import { styled } from "@mui/system";
const StyledFormControlLabel = styled(FormControlLabel)(
    ({ theme, selected }) => ({
        position: "relative",
        margin: "10px",
        padding: "16px",
        border: selected ? "2px solid #1E5EFF" : "transparent",
        transition: "background 0.3s",
        textAlign: "center",
        borderBottom: "none",
        width: "140px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        "& .MuiTypography-h6": {
            fontSize: "1rem",
            fontWeight: "bold",
        },
        "& .MuiTypography-body2": {
            fontSize: "0.875rem",
            color: "#6B7280",
        },
        "&::before, &::after": {
            content: '""',
            position: "absolute",
            top: "5px",
            height: "100%",
            width: "50%",
            borderBottom: "2px solid transparent",
            zIndex: 1,
        },
        "&::before": {
            left: 0,
            transform: "skew(0, 9deg)",
            borderBottomColor: selected ? "#1E5EFF" : "transparent",
        },
        "&::after": {
            right: 0,
            transform: "skew(0, -9deg)",
            borderBottomColor: selected ? "#1E5EFF" : "transparent",
        },
        "& .content": {
            position: "relative",
            zIndex: 2,
            padding: "20px",
            background: selected ? "rgba(99, 102, 241, 0.1)" : "transparent",
            transition: "background 0.3s",
        },
    }),
);

const Option = ({ value, label, description, selected, onChange }) => (
    <StyledFormControlLabel
        value={value}
        control={<Radio />}
        label={
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                }}
            >
                <Typography variant="h6">{label}</Typography>
                <Typography variant="body2">{description}</Typography>
            </Box>
        }
        selected={selected}
        onChange={onChange}
    />
);

export const TargetTypeCard = () => {
    const [selectedValue, setSelectedValue] = useState("Number");
    const [input, setInput] = useState({
        number: {
            value: {
                start: 0,
                target: 1,
            },
            unit: "VND",
        },
        boolean: {
            value: false,
        },
        currency: {
            value: {
                start: 0,
                target: 1,
            },
            unit: "VND",
        },
        tasks: [
            {   
                id: 0,
                name: "New task",
                status: "In Progress",
            },
        ],
    });
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleInputChange = (e) => {
        setInput({
            ...input,
            [selectedValue.toLowerCase()]: {
                ...input[selectedValue.toLowerCase()],
                ...e,
            },
        });
    };
    const handleTasksChange = (tasks) => {
        setInput({
            ...input,
            tasks,
        });
    };

    return (
        <>
            <RadioGroup
                row
                value={selectedValue}
                onChange={handleChange}
                sx={{
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: {
                        md: "repeat(4, 1fr)",
                        xs: "repeat(2, 1fr)",
                    },
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <div className="flex justify-center items-center">
                    <Option
                        value="Number"
                        label="Number"
                        description="Any number like 1 or 2"
                        selected={selectedValue === "Number"}
                    />
                </div>
                <div className="flex justify-center items-center">
                    <Option
                        value="TrueFalse"
                        label="True/False"
                        description="Done or not done"
                        selected={selectedValue === "TrueFalse"}
                    />
                </div>
                <div className="flex justify-center items-center">
                    <Option
                        value="Currency"
                        label="Currency"
                        description="Show me the money"
                        selected={selectedValue === "Currency"}
                    />
                </div>
                <div className="flex justify-center items-center">
                    <Option
                        value="Tasks"
                        label="Tasks"
                        description="Track progress of tasks"
                        selected={selectedValue === "Tasks"}
                    />
                </div>
            </RadioGroup>
            <div className="grid grid-cols-2 justify-center md:gap-16 gap-4 mt-8 w-full">
                {(selectedValue === "Number" ||
                    selectedValue === "Currency") && (
                    <>
                        <TargetNumberInput
                            input={input}
                            handleInputChange={handleInputChange}
                            targetType={selectedValue.toLowerCase()}
                            inputType="Start"
                        />
                        <TargetNumberInput
                            input={input}
                            handleInputChange={handleInputChange}
                            targetType={selectedValue.toLowerCase()}
                            inputType="Target"
                        />
                    </>
                )}
            </div>
            <div className="flex justify-center items-center w-full">
                {selectedValue === "Tasks" && (
                    <TasksInput
                        tasks={input.tasks}
                        setTasks={handleTasksChange}
                    />
                )}
            </div>
        </>
    );
};
