import { DropdownButton } from "@/components/buttons/DropdownButton";
import {
    Typography,
    Card,
    CardBody,
    Progress,
    Input,
} from "@material-tailwind/react";
import { projectsTableData } from "@/data";
import { KpiTable } from "@/components/table/KpiTable";
import { Header } from "@/components/layout";
export function ListKpi() {
    const options = [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
    ];
    const tableData = projectsTableData;
    const handleSearch = () => {};
    const handleDelete = () => {
        document.getElementById("delete").click();
    };
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
                            <DropdownButton name="Filter" options={options} />
                        </div>
                        <div className="sm:w-[350px] w-full">
                            <Input
                                label="Search KPI..."
                                icon={
                                    <i
                                        className="fas fa-search cursor-pointer"
                                        onClick={handleSearch}
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
