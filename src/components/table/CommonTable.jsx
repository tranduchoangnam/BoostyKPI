import {
    Typography,
    Card,
    CardBody,
    CardFooter,
    Progress,
    Input,
} from "@material-tailwind/react";
import { PriorityButton } from "@/components/buttons/PriorityButton";
import { Pagination } from "@/components/table/Pagination";
import { useState, useMemo } from "react";

export function CommonTable({ tableData, tableHeadJsx, rowJsx }) {
    const [page, setPage] = useState(1);
    const rowsPerPage = 3;
    const totalPage = Math.ceil(tableData.length / rowsPerPage);
    const visbleData = useMemo(() => {
        return tableData.slice((page - 1) * rowsPerPage, page * rowsPerPage);
    }, [page, rowsPerPage, totalPage]);
    return (
        <Card className=" xl:col-span-2 shadow-sm overflow-auto">
            <CardBody className="px-0 pt-0 h-full">
                <table className="w-full min-w-[640px] table-auto">
                    <thead>
                        <tr>{tableHeadJsx}</tr>
                    </thead>
                    <tbody>
                        {visbleData.map((ele, key) => {
                            const className = `py-3 px-5 ${
                                key === visbleData.length - 1
                                    ? ""
                                    : "border-b border-blue-gray-50"
                            }`;

                            return (
                                <tr key={page+'-'+key}>
                                    {rowJsx(ele,className)}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </CardBody>
            <CardFooter>
                <Pagination
                    page={page}
                    totalPage={totalPage}
                    onChange={setPage}
                />
            </CardFooter>
        </Card>
    );
}
