import { DropdownButton } from "@/components/buttons/DropdownButton";
import { Card, Input } from "@material-tailwind/react";
import { KpiTable } from "@/components/table/KpiTable";
import { Header } from "@/components/layout";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthProvider";
import { toast } from "react-toastify";
import { GoalAddModal, ImportModal } from "@/components/modals";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";
import * as XLSX from 'xlsx';
import { Button } from "@material-tailwind/react";
import { CommonButton } from "@/components/buttons";

export function ListKpi() {
    const auth = useAuth();
    const [toggleModal, setToggleModal] = useState(false);
    const [toggleImportModal, setToggleImportModal] = useState(false);
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
    const handleImport = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            const data = new Uint8Array(event.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const json = XLSX.utils.sheet_to_json(sheet);
            console.log(json);

            // Convert and add imported goals to auth context
            const newGoals = json.reduce((acc, row) => {
                const goalIndex = acc.findIndex(g => g.name === row['Goal name']);
                const target = {
                    id: uuidv4(),
                    name: row['TargetName'],
                    start_date: row['Start'],
                    end_date: row['End'],
                    priority: 'Medium',
                    status: row['Status'],
                    weight: row['Weight'],
                    type: {},
                    reminder: {
                        status: false,
                        before_start: 0,
                        repeat: null,
                        custom_time: null,
                        custom_date: null
                    }
                };
    
                if (row['TargetType'] === 'Currency') {
                    target.type.currency = {
                        value: {
                            start: parseFloat(row['Start']),
                            target: parseFloat(row['End'])
                        },
                        unit: row['Metric (for currency)']
                    };
                } else if (row['TargetType'] === 'True/False') {
                    target.type.boolean = row['True/False (for true false)'] === 'TRUE'
                } else if (row['TargetType'] === 'Tasks') {
                    // Create fake data for tasks using a for loop
                    const taskCount = parseInt(row['Task number (for tasks)']);
                    target.type.tasks = [];
                    for (let i = 1; i <= taskCount; i++) {
                        target.type.tasks.push({
                            id: uuidv4(),
                            name: `Subtask ${i} for ${row['TargetName']}`,
                            status: "Pending"
                        });
                    }
                } else if (row['TargetType'] === 'Number') {
                    target.type.number = {
                        value: {
                            start: parseFloat(row['Start']),
                            target: parseFloat(row['End'])
                        },
                        unit: ''
                    };
                }
    
                if (goalIndex === -1) {
                    acc.push({
                        id: uuidv4(),
                        name: row['Goal name'],
                        description: row['Description'] || '',
                        plan: [new Date().toISOString(), dayjs(row['Deadline']).toISOString()],
                        targets: [target],
                        tags: [],
                        priority: 'Medium', // Default priority, adjust as necessary
                        completion: row['Status'] === 'Done' ? 100 : 0
                    });
                } else {
                    acc[goalIndex].targets.push(target);
                    // Adjust completion calculation based on the weight of the targets
                    acc[goalIndex].completion += target.weight;
                }
    
                return acc;
            }, []);
            auth.setKpi([...auth.kpi, ...newGoals]);
            setToggleImportModal(false);
            toast.success("Goals Imported Successfully");
        };
        reader.readAsArrayBuffer(file);
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
            <ImportModal open={toggleImportModal} setOpen={setToggleImportModal}>
                <div className="flex justify-center gap-x-4 mt-4">
                    <CommonButton 
                        type="secondary"
                        href="https://docs.google.com/spreadsheets/d/1r1FHIp5VrpBkXxvlE53Gd-j8SyvrFU6eq7PiNiJIwYI/edit#gid=0" 
                        target="_blank"
                    >
                        Get Import Template
                    </CommonButton>
                    <CommonButton
                        type="primary"
                        onClick={() => {document.getElementById("fileInput").click();}}
                    >
                        Import
                    </CommonButton>
                    <input 
                        type="file" 
                        id="fileInput" 
                        accept=".xlsx, .xls" 
                        style={{ display: 'none' }} 
                        onChange={handleImport}
                    />
                </div>
            </ImportModal>
            <Header
                name={{
                    page: "Goals",
                    secondary: "Import",
                    primary: "Add Goal",
                }}
                onPrimary={() => {
                    handleAdd();
                }}
                onSecondary={() => {
                    // document.getElementById("fileInput").click();
                    setToggleImportModal(true);
                    console.log("import");
                }}
                back={true}
            />
            {/* <input 
                type="file" 
                id="fileInput" 
                accept=".xlsx, .xls" 
                style={{ display: 'none' }} 
                onChange={handleImport}
            /> */}
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
                <KpiTable tableData={tableData} setTableData={setTableData} type="checkbox"/>
            </Card>
        </>
    );
}

export default ListKpi;
