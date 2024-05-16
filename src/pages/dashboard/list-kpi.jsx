import { DropdownButton } from "@/components/buttons/DropdownButton";
import {
    Card,
    Input,
} from "@material-tailwind/react";
import { projectsTableData } from "@/data";
import { KpiTable } from "@/components/table/KpiTable";
import { Header } from "@/components/layout";
import { useEffect, useState } from "react";
export function ListKpi() {
    const [filter, setFilter] = useState("all");
    const [search, setSearch] = useState("");
    const [tableData,setTableData]=useState(projectsTableData);
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
    useEffect(() => {
        let prettyData=projectsTableData;
        if (filter === "all") {
            prettyData = projectsTableData;
        }
        else 
        prettyData=prettyData.filter((data) => {
            if (filter==="completed"&&data.completion===100) return true;
            if (filter==="incompleted"&&data.completion!==100) return true;
            return false;
        });
        prettyData=prettyData.filter((data) => {
            if (search === "") return true;
            if (data.name.toLowerCase().includes(search.toLowerCase())) return true;
            return false;
        })
        setTableData(prettyData);
    }, [filter,search]);
    return (
        <>
            <Header
                name={{ page: "List KPI", secondary: "Import", primary: "Save" }}
                onPrimary={() => {}}
                onSecondary={() => {}}
                back={true}
            />
            <Card className="mx-0 mb-6 mt-4 p-8 pb-0 border border-blue-gray-100">
                <div className="flex items-start justify-between mb-8">
                    <div className="flex gap-8 flex-wrap">
                        <div className="w-[180px]">
                            <DropdownButton name="Filter" options={options} onChosen={setFilter} />
                        </div>
                        <div className="sm:w-[350px] w-full">
                            <Input
                                label="Search KPI..."
                                onChange={handleSearch}
                                icon={
                                    <i
                                        className="fas fa-search cursor-pointer"
                                    />
                                }
                            />
                        </div>
                    </div>
                    <div
                        onClick={handleDelete}
                        className="flex items-center border cursor-pointer border-[#D7DBEC] p-2 rounded-[4px]"
                    >
                        <i className="fas fa-trash text-[#1E5EFF]" />
                    </div>
                </div>
                <KpiTable tableData={tableData} />
            </Card>
        </>
    );
}

export default ListKpi;
