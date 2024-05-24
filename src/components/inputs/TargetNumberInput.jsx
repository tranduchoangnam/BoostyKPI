import {
    InputAdornment,
    OutlinedInput,
    InputLabel,
    FormControl,
    Select,
    MenuItem,
    FormHelperText,
} from "@mui/material";
export const TargetNumberInput = ({
    input,
    handleInputChange,
    targetType,
    inputType,
}) => {
    return (
        <FormControl
            error={
                inputType === "Target" &&
                parseInt(input[targetType].value.target) <=
                    parseInt(input[targetType].value.start)
            }
        >
            <InputLabel htmlFor="target-type">{inputType}</InputLabel>
            <OutlinedInput
                id="target-type"
                label={inputType}
                placeholder="Enter your target type"
                onChange={(e) =>
                    handleInputChange({
                        value: {
                            ...input[targetType].value,
                            [inputType.toLowerCase()]: e.target.value.replace(
                                /[^0-9]/g,
                                "",
                            ),
                        },
                    })
                }
                startAdornment={
                    targetType === "currency" && (
                        <InputAdornment position="start">
                            <FormControl>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    defaultValue="VND"
                                    variant="standard"
                                    label="Age"
                                    disableUnderline
                                    value={input[targetType].unit}
                                    onChange={(e) => {
                                        handleInputChange({
                                            unit: e.target.value,
                                        });
                                    }}
                                >
                                    <MenuItem value="VND">VND</MenuItem>
                                    <MenuItem value="USD">USD</MenuItem>
                                    <MenuItem value="YEN">YEN</MenuItem>
                                </Select>
                            </FormControl>
                        </InputAdornment>
                    )
                }
                value={input[targetType].value[inputType.toLowerCase()]}
            />
            <FormHelperText>
                {parseInt(input[targetType].value.target) <=
                    parseInt(input[targetType].value.start) &&
                    inputType === "Target" &&
                    "Target must be greater than start"}
            </FormHelperText>
        </FormControl>
    );
};
