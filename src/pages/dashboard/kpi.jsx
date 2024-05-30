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
import { useEffect, useState, useMemo } from "react";
import { TagsCard } from "@/components/cards/tags-card";
import { Header } from "@/components/layout";
import { useAuth } from "@/context/AuthProvider";
import { ProgressChart } from "@/components/charts";
import { TargetAddModal } from "@/components/modals";
import { toast } from "react-toastify";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";
import { SuccessModal } from "@/components/modals";
import { useNavigate } from "react-router-dom";
export function DetailKpi() {
    const [toggleModal, setToggleModal] = useState(false);
    const [completed, setCompleted] = useState(false);
    const [form, setForm] = useState({
        name: "",
        weight: 0,
    });
    const [tableData, setTableData] = useState([]);
    const { id } = useParams();
    const [kpi, setKpi] = useState();
    const [initCompletion, setInitCompletion] = useState(0);
    const [rangeDate, setRangeDate] = useState({
        value: [],
        dateString: [],
    });
    const { RangePicker } = DatePicker;
    const auth = useAuth();
    const navigate =useNavigate();
    // const disabledDate = (current, { from }) => {
    //     if (from) {
    //         return Math.abs(current.diff(from, "days")) >= 7;
    //     }

    //     return false;
    // };
    const weightLeft = useMemo(() => {
        if (!tableData.length) return 100;
        return (
            100 -
            tableData.reduce((acc, target) => {
                return acc + (target.weight? target.weight : 0);
            }, 0)
        );
    }, [tableData]);

    useEffect(() => {
        setKpi(auth.kpi.find((el) => el.id === id));
        setInitCompletion(auth.kpi.find((el) => el.id === id).completion);
    }, [auth.kpi]);
    useEffect(() => {
        if (kpi) {
            setTableData(kpi.targets);
        }
    }, [kpi?.targets]);
    useEffect(() => {
        if (kpi) {
            setRangeDate({
                value: [],
                dateString: [kpi.plan[0], kpi.plan[1]],
            });
        }
    }, [kpi?.plan]);
    useEffect(() => {
        if (kpi) {
            setKpi({
                ...kpi,
                completion: tableData.reduce((acc, el) => {
                    return acc + (el.status === "Done" ? el.weight : 0);
                }, 0),
            });
        }
    }, [tableData]);
    useEffect(() => {
        if (kpi?.completion === 100&&initCompletion!==100) {
            setCompleted(true);
        }
    }, [kpi?.completion]);
    const handleSubmit = (event) => {
        auth.setKpi(
            auth.kpi.map((el) =>
                el.id === kpi.id
                    ? {
                          ...el,
                          targets: [
                              ...tableData,
                              {
                                  ...form,
                                  status: "In Progress",
                                  id: uuidv4(),
                              },
                          ],
                      }
                    : el,
            ),
        );
        console.log(JSON.stringify(form));
        toast.success("Target added successfully");
        setTimeout(() => {
            setToggleModal(false);
        }, 500);
    };
    const handleAdd = () => {
        if (weightLeft <= 0) {
            toast.error("Oops! Full of weight. Try to delete target.");
            return;
        }
        setToggleModal(true);
    };
    const handleDelete = () => {
        document.getElementById("delete").click();
    };
    return (
        <>
            <SuccessModal
                name={kpi?.name}
                open={completed}
                setOpen={setCompleted}
            />

            {kpi && (
                <>
                    <TargetAddModal
                        open={toggleModal}
                        setOpen={setToggleModal}
                        form={form}
                        setForm={setForm}
                        onSubmit={handleSubmit}
                        weightLeft={weightLeft}
                    />

                    <Header
                        name={{
                            page: "Detail KPI",
                            primary: "Save",
                            secondary: "Cancel",
                        }}
                        onPrimary={() => {
                            toast.success("Goal updated successfully");
                        }}
                        onSecondary={() => {
                            navigate("/kpi");
                        }}
                        back={true}
                    />
                    <div className="flex flex-col gap-4">
                        <Card className="mx-0 mb-6 py-6 px-6 shadow-none">
                            <div className="flex flex-wrap justify-center">
                                <div className="flex  items-center lg:justify-start justify-center grow min-w-[320px]">
                                    <div className="w-[200px] flex justify-center items-center">
                                        <ProgressChart
                                            value={kpi.completion || 0}
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <Typography className="text-[24px] text-[#131523] font-bold">
                                            {kpi.name}
                                        </Typography>
                                        <Typography className="text-[18px] text-[#131523]">
                                            {kpi.description}
                                        </Typography>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center gap-4 py-4">
                                    {/* <div className="max-w-[320px]">
                                        <Input
                                            type="text"
                                            label="Name"
                                            defaultValue={
                                                kpi.name || "Enter KPI name..."
                                            }
                                        />
                                    </div> */}
                                    <div className="flex gap-4 relative">
                                        <div>
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
                                                <Option value={"High"}>
                                                    High
                                                </Option>
                                                <Option value={"Medium"}>
                                                    Medium
                                                </Option>
                                                <Option value={"Low"}>
                                                    Low
                                                </Option>
                                            </Select>
                                        </div>
                                        <div>
                                            <div className="relative flex w-full max-h-[40px]">
                                                <div className="absolute z-0 flex align-center justify-center right-0 top-0 w-full h-full">
                                                    <RangePicker
                                                        id="range-picker"
                                                        value={rangeDate.value}
                                                        showTime
                                                        onChange={(
                                                            date,
                                                            dateString,
                                                        ) =>
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
                                                            .getElementById(
                                                                "range-picker",
                                                            )
                                                            .click()
                                                    }
                                                    className="relative z-10"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="max-w-[320px]">
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
                            </div>
                        </Card>
                        <Card className="mx-0 mb-6 py-6 md:px-6 px-3 pb-0 shadow-none">
                            <>
                                <div className="flex justify-between mb-2">
                                    <div className="">
                                        <Typography className="text-[16px] text-[#131523] font-bold">
                                            Targets
                                        </Typography>
                                    </div>
                                    <div className="flex gap-4">
                                        <div
                                            onClick={() => handleAdd()}
                                            className="flex items-center border cursor-pointer border-[#D7DBEC] p-2 rounded-[4px]"
                                        >
                                            <i className="fas fa-plus text-[#1E5EFF]" />
                                        </div>
                                        <div
                                            onClick={() => handleDelete()}
                                            className="flex items-center border cursor-pointer border-[#D7DBEC] p-2 rounded-[4px]"
                                        >
                                            <i className="fas fa-trash text-[#ff4444]" />
                                        </div>
                                    </div>
                                </div>
                                <TaskTable
                                    tableData={tableData}
                                    setTableData={setTableData}
                                />
                            </>
                        </Card>
                    </div>
                </>
            )}
        </>
    );
}

export default DetailKpi;
