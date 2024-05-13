import {
    Typography,
    Card,
    CardBody,
    CardFooter,
    Checkbox,
} from "@material-tailwind/react";
import { Pagination } from "@/components/table/Pagination";
import { useState, useMemo, useEffect } from "react";

export function CommonTable({ tableData, tableHeadJsx, rowJsx, type }) {
    const [page, setPage] = useState(1);
    const [checkedList, setCheckedList] = useState([]);
    const rowsPerPage = 3;
    const totalPage = Math.ceil(tableData.length / rowsPerPage);
    const visibleData = useMemo(() => {
        return tableData.slice((page - 1) * rowsPerPage, page * rowsPerPage);
    }, [page, rowsPerPage, totalPage]);
    const handleCheck = (check, index) => {
        if (index === 0) {
            setCheckedList(check ? visibleData.map((_, i) => i + 1) : []);
        } else {
            setCheckedList((prevCheckedList) =>
                check
                    ? checkedList.includes(index)
                        ? [...prevCheckedList]
                        : [...prevCheckedList, index]
                    : prevCheckedList.filter((ele) => ele !== index),
            );
        }
    };
    useEffect(() => {
        setCheckedList([]);
    }, [page, rowsPerPage, totalPage]);

    return (
        <Card className=" xl:col-span-2 shadow-none overflow-auto min-h-[540px] relative">
            <CardBody className="px-0 pt-0 h-full">
                <table className="w-full min-w-[640px] table-auto">
                    <thead>
                        <tr>
                            {type === "checkbox" && (
                                <td className="py-3 px-0 w-[24px] border-b border-blue-gray-50">
                                    <Checkbox
                                        className="hover:before:bg-[#1E5EFF]"
                                        color="blue"
                                        checked={
                                            checkedList.length ===
                                            visibleData.length
                                        }
                                        onChange={(e) =>
                                            handleCheck(e.target.checked, 0)
                                        }
                                    />
                                </td>
                            )}
                            {tableHeadJsx}
                        </tr>
                    </thead>
                    <tbody>
                        {visibleData.map((ele, key) => {
                            const className = `py-3 px-5 ${
                                key === visibleData.length - 1
                                    ? ""
                                    : "border-b border-blue-gray-50"
                            }`;

                            return (
                                <tr key={page + "-" + key}>
                                    {type === "checkbox" && (
                                        <td
                                            className={`py-3 px-0 w-[24px]${
                                                key === visibleData.length - 1
                                                    ? ""
                                                    : "border-b border-blue-gray-50"
                                            }`}
                                        >
                                            <Checkbox
                                                color="blue"
                                                className="hover:before:bg-[#1E5EFF]"
                                                checked={checkedList.includes(
                                                    key + 1,
                                                )}
                                                onChange={(e) =>
                                                    handleCheck(
                                                        e.target.checked,
                                                        key + 1,
                                                    )
                                                }
                                            />
                                        </td>
                                    )}
                                    {rowJsx(ele, className)}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </CardBody>
            <CardFooter className="flex absolute bottom-0 w-full justify-center mb-0">
                <Pagination
                    page={page}
                    totalPage={totalPage}
                    onChange={setPage}
                />
            </CardFooter>
        </Card>
    );
}
