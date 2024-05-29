import * as React from "react";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

import Box from "@mui/material/Box";

const PrettoSlider = styled(Slider)({
    color: "#1E5EFF",
    height: 16,
    "& .MuiSlider-track": {
        border: "none",
    },
    "& .MuiSlider-thumb": {
        height: 36,
        width: 36,
        backgroundColor: "#fff",
        border: "2px solid currentColor",
        "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
            boxShadow: "inherit",
        },
        "&::before": {
            display: "none",
        },
    },
    "& .MuiSlider-valueLabel": {
        lineHeight: 1.2,
        fontSize: 12,
        background: "unset",
        padding: 0,
        width: 32,
        height: 32,
        borderRadius: "50% 50% 50% 0",
        backgroundColor: "#1E5EFF",
        transformOrigin: "bottom left",
        transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
        "&::before": { display: "none" },
        "&.MuiSlider-valueLabelOpen": {
            transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
        },
        "& > *": {
            transform: "rotate(45deg)",
        },
    },
});
export function CustomizedSlider({ weight, setWeight, total }) {
    return (
        <Box sx={{ width: 320 }}>
            <PrettoSlider
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                value={weight || null}
                step={5}
                max={total}
                onChange={(e, newValue) => {
                    setWeight(newValue);
                }}
            />
        </Box>
    );
}
