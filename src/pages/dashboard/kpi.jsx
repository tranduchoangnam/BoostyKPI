import {
    Typography,
    Card,
    Select,
    Option,
    Input,
} from "@material-tailwind/react";
import { DatePicker } from "antd";
import { projectsTableData } from "@/data";
import { TaskTable } from "@/components/table/TaskTable";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { TagsCard } from "@/components/cards/tags-card";
import { Header } from "@/components/layout";
import {useAuth} from "@/context/AuthProvider";
export function DetailKpi() {
    const [tableData, setTableData] = useState([]);
    const { id } = useParams();
    const [kpi, setKpi] = useState();
    const [rangeDate, setRangeDate] = useState({
        value: [],
        dateString: [],
    });
    const { RangePicker } = DatePicker;
    const auth = useAuth();
    // const disabledDate = (current, { from }) => {
    //     if (from) {
    //         return Math.abs(current.diff(from, "days")) >= 7;
    //     }

    //     return false;
    // };

    useEffect(() => {
        setKpi(auth.kpi.find((el) => el.id === id));
    }, []);
    useEffect(() => {
        if (kpi) {
            setTableData(kpi.subtasks);
            setRangeDate({
                value: [],
                dateString: [kpi.plan[0], kpi.plan[1]],
            });
        }
    }, [kpi]);
    const handleDelete = () => {
        document.getElementById("delete").click();
    };
    return (
        <>
            {kpi && (
                <>
                    <Header
                        name={{
                            page: "Detail KPI",
                            primary: "Save",
                            secondary: "Cancel",
                        }}
                        onPrimary={() => {}}
                        onSecondary={() => {}}
                        back={true}
                    />
                    <div className="grid grid-cols-1 mt-4 md:grid-cols-3 gap-4">
                        <Card className="mx-0 mb-6 py-6 px-4 pb-0 border border-blue-gray-100 md:col-span-2 col-span-1">
                            <>
                                <div className="flex justify-between">
                                    <div className="">
                                        <Typography className="text-[24px] text-[#131523] font-bold">
                                            {kpi.name}
                                        </Typography>
                                        <Typography className="text-[16px] text-[#131523] font-bold">
                                            Tasks
                                        </Typography>
                                    </div>
                                    <div>
                                        <div
                                            onClick={() => handleDelete()}
                                            className="flex items-center border cursor-pointer border-[#D7DBEC] p-2 rounded-[4px]"
                                        >
                                            <i className="fas fa-trash text-[#1E5EFF]" />
                                        </div>
                                    </div>
                                </div>
                                <TaskTable tableData={tableData} setTableData={setTableData}/>
                            </>
                        </Card>
                        <div>
                            <Card className="mx-0 mb-6 py-6 px-6 border border-blue-gray-100 gap-4">
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
                                    defaultValue={
                                        kpi.name || "Enter KPI name..."
                                    }
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
                                        containerProps={{
                                            className:
                                                "!w-[100px] !min-w-[100px]",
                                        }}
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
                                            value={rangeDate.value}
                                            onChange={(date, dateString) =>
                                                setRangeDate({
                                                    value: date,
                                                    dateString,
                                                })
                                            }
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
                            <TagsCard
                                tags={kpi.tags}
                                onSetTags={(tags) => {
                                    setKpi({
                                        ...kpi,
                                        tags,
                                    });
                                }}
                            />
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default DetailKpi;
