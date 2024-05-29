import { DropdownButton } from "@/components/buttons/DropdownButton";
import { Card, Input } from "@material-tailwind/react";
import { KpiTable } from "@/components/table/KpiTable";
import { Header } from "@/components/layout";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthProvider";
import { toast } from "react-toastify";
import { CommonButton } from "@/components/buttons";
import { GoalAddModal } from "@/components/modals";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";
export function ListKpi() {
    const auth = useAuth();
    const [toggleModal, setToggleModal] = useState(false);
    const [form, setForm] = useState({
        name: "",
        deadline: "",
        description: "",
    });
    const [filter, setFilter] = useState("all");
    const [search, setSearch] = useState("");
    const [tableData, setTableData] = useState([]);
    const options = [
        { value: "all", label: "All" },
        { value: "completed", label: "Completed" },
        { value: "incompleted", label: "Incompleted" },
    ];
    const handleSearch = (e) => {
        setSearch(e.target.value);
    };
    const handleDelete = () => {
        document.getElementById("delete").click();
    };
    const handleAdd = () => {
        setToggleModal(true);
    };
    const handleSubmit = () => {
        auth.setKpi([
            ...auth.kpi,
            {
                name: form.name,
                description: form.description,
                priority: "Low",
                tags: [],
                plan: [new Date().toDateString(), dayjs(form.deadline).toDate().toDateString()],
                targets: [],
                completion: 0,
                id: uuidv4(),
            },
        ]);
        setTimeout(() => {
            toast.success("Goal Added Successfully");
            setToggleModal(false);
        }, 500);
    };
    useEffect(() => {
        let prettyData = auth.kpi;
        if (filter === "all") {
            prettyData = auth.kpi;
        } else
            prettyData = prettyData.filter((data) => {
                if (filter === "completed" && data.completion === 100)
                    return true;
                if (filter === "incompleted" && data.completion !== 100)
                    return true;
                return false;
            });
        prettyData = prettyData.filter((data) => {
            if (search === "") return true;
            if (data.name.toLowerCase().includes(search.toLowerCase()))
                return true;
            return false;
        });
        setTableData(prettyData);
    }, [filter, search]);
    useEffect(() => {
        setTableData(auth.kpi);
    }, [auth.kpi]);

    return (
        <>
            <GoalAddModal
                open={toggleModal}
                setOpen={setToggleModal}
                form={form}
                setForm={setForm}
                onSubmit={() => handleSubmit()}
            />
            <Header
                name={{
                    page: "Goals",
                    secondary: "Import",
                    primary: "Add Goal",
                }}
                onPrimary={() => {
                    handleAdd();
                }}
                onSecondary={() => {}}
                back={true}
            />
            <Card className="mx-0 mb-6 mt-4 md:p-8 p-4 pb-0 border border-blue-gray-100">
                <div className="flex items-start justify-between mb-8">
                    <div className="flex md:gap-8 gap-4 flex-wrap items-center">
                        <div className="w-[180px]">
                            <DropdownButton
                                name="Filter"
                                options={options}
                                onChosen={setFilter}
                            />
                        </div>
                        <div className="sm:w-[350px] w-full">
                            <Input
                                label="Search KPI..."
                                onChange={handleSearch}
                                icon={
                                    <i className="fas fa-search cursor-pointer" />
                                }
                            />
                        </div>
                    </div>
                    <div
                        onClick={handleDelete}
                        className="flex items-center border cursor-pointer border-[#D7DBEC] p-2 rounded-[4px]"
                    >
                        <i className="fas fa-trash text-[#ff4444]" />
                    </div>
                </div>
                <KpiTable tableData={tableData} setTableData={setTableData} />
            </Card>
        </>
    );
}

export default ListKpi;
