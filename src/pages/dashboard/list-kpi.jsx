import { DropdownButton } from "@/components/buttons/DropdownButton";
import {
    Typography,
    Card,
    CardBody,
    Progress,
    Input,
} from "@material-tailwind/react";
import { projectsTableData } from "@/data";
import {KpiTable} from "@/components/table/KpiTable";

export function ListKpi() {
    const options = [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
    ];
    const tableHead=["Name","Deadline","Priority","Completion"];
    const tableData= projectsTableData;
    const handleSearch = () => {};
    const handleDelete = () => {};
    return (
        <>
            <Card className="mx-3 mb-6 mt-8 p-8 lg:mx-4 border border-blue-gray-100">
                <div className="flex items-center justify-between">
                    <div className="flex gap-8">
                        <div className="w-[180px]">
                            <DropdownButton name="Filter" options={options} />
                        </div>
                        <div className="w-[350px]">
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
                    <div className="flex items-center border cursor-pointer border-[#D7DBEC] p-2 rounded-[4px]">
                        <i
                            className="fas fa-trash text-[#1E5EFF]"
                            onClick={handleDelete}
                        />
                    </div>
                </div>
                <KpiTable tableHead={tableHead} tableData={tableData} />
            </Card>
        </>
    );
}

export default ListKpi;
