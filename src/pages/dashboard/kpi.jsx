import { DropdownButton } from "@/components/buttons/DropdownButton";
import {
    Typography,
    Card,
    CardBody,
    Progress,
    Select,
    Option,
    Input,
    DemoItem,
} from "@material-tailwind/react";
import dayjs, { Dayjs } from "dayjs";
import { DatePicker } from "antd";
import { projectsTableData } from "@/data";
import { TaskTable } from "@/components/table/TaskTable";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { textFieldClasses } from "@mui/material";

export function DetailKpi() {
    const { id } = useParams();
    const [kpi, setKpi] = useState();
    const [rangeDate, setRangeDate] = useState();
    const { RangePicker } = DatePicker;
    const disabledDate = (current, { from }) => {
        if (from) {
            return Math.abs(current.diff(from, "days")) >= 7;
        }

        return false;
    };

    useEffect(() => {
        setKpi(projectsTableData.find((el) => el.id === parseInt(id)));
    }, []);
    const handleDelete = () => {};
    return (
        <>
            {" "}
            {kpi && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="mx-0 mb-6 mt-8 py-6 px-4 pb-0 border border-blue-gray-100 md:col-span-2 col-span-1">
                        <>
                            <div className="flex justify-between">
                                <div className="mb-8">
                                    <Typography className="text-[24px] text-[#131523] font-bold">
                                        {kpi.name}
                                        <br />
                                    </Typography>
                                    <Typography className="text-[16px] text-[#131523] font-bold">
                                        Subtasks
                                    </Typography>
                                </div>
                                <div>
                                    <div className="flex items-center border cursor-pointer border-[#D7DBEC] p-2 rounded-[4px]">
                                        <i
                                            className="fas fa-trash text-[#1E5EFF]"
                                            onClick={handleDelete}
                                        />
                                    </div>
                                </div>
                            </div>
                            <TaskTable tableData={kpi.subtasks} />
                        </>
                    </Card>
                    <div>
                        <Card className="mx-0 mb-6 mt-8 py-6 px-6 border border-blue-gray-100 gap-4">
                            <div className="flex items-center justify-between">
                                <Typography className="text-[16px] text-[#131523] font-bold">
                                    Overview
                                </Typography>
                                <Typography className="text-[14px] text-[#F0142F]">
                                    Delete
                                </Typography>
                            </div>
                            <Input
                                type="text"
                                label="Name"
                                defaultValue={kpi.name || "Enter KPI name..."}
                            />
                            <div className="flex">
                                <Select
                                    label="Priority"
                                    value={kpi.priority}
                                    onChange={(e) =>
                                        setKpi({
                                            ...kpi,
                                            priority: e,
                                        })
                                    }
                                    defaultValue={kpi.priority}
                                    className="w-[100px]"
                                    containerProps={
                                        {
                                            className: "!w-[100px] !min-w-[100px]",
                                        }
                                    }
                                >
                                    <Option value={"High"}>High</Option>
                                    <Option value={"Medium"}>Medium</Option>
                                    <Option value={"Low"}>Low</Option>
                                </Select>
                            </div>
                            <div className="relative flex w-full max-w-[24rem]">
                                <div className="absolute z-0 flex align-center justify-center right-0 top-0 w-full h-full">
                                    <RangePicker
                                        id="range-picker"
                                        value={rangeDate}
                                        onChange={(date, dateString) =>
                                            setRangeDate(date)
                                        }
                                        disabledDate={disabledDate}
                                        className="border-none w-full h-full bg-transparent focus:border-none"
                                    />
                                </div>
                                <Input
                                    label="Plan"
                                    defaultValue=" "
                                    onClick={() =>
                                        document
                                            .getElementById("range-picker")
                                            .click()
                                    }
                                    className="relative z-10"
                                />
                            </div>
                        </Card>
                        <Card className="mx-0 mb-6 mt-8 py-4 px-6 pb-0 border border-blue-gray-100">
                            <Typography className="text-[16px] text-[#131523] font-bold">
                                Tags
                            </Typography>
                        </Card>
                    </div>
                </div>
            )}{" "}
        </>
    );
}

export default DetailKpi;
