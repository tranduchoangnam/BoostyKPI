import React, { useState } from "react";
import {
    Box,
    Typography,
    Radio,
    FormControlLabel,
    RadioGroup,
    TextField,
    Input,
} from "@mui/material";
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

const TargetTypeCard = () => {
    const [selectedValue, setSelectedValue] = useState("Number");

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div>
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
                }}
            >
                <Option
                    value="Number"
                    label="Number"
                    description="Any number like 1 or 2"
                    selected={selectedValue === "Number"}
                />
                <Option
                    value="TrueFalse"
                    label="True/False"
                    description="Done or not done"
                    selected={selectedValue === "TrueFalse"}
                />
                <Option
                    value="Currency"
                    label="Currency"
                    description="Show me the money"
                    selected={selectedValue === "Currency"}
                />
                <Option
                    value="Tasks"
                    label="Tasks"
                    description="Track progress of tasks"
                    selected={selectedValue === "Tasks"}
                />
            </RadioGroup>
            <div className="flex justify-center gap-8 mt-8">
            <TextField id="target-type" defaultValue={0} label="Start" placeholder="Enter your target type" />
            <TextField id="target-type2" defaultValue={0} label="Target" placeholder="Enter your target type" />
            </div>
        </div>
    );
};

export default TargetTypeCard;
