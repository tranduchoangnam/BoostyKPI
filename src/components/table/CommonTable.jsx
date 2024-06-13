import {
    Typography,
    Card,
    CardBody,
    CardFooter,
    Checkbox,
} from "@material-tailwind/react";
import { Pagination } from "@/components/table/Pagination";
import { useState, useMemo, useEffect } from "react";
export function CommonTable({
    tableData,
    setTableData,
    tableHeadJsx,
    rowJsx,
    type,
    addRowJsx,
}) {
    const [page, setPage] = useState(1);
    const [checkedList, setCheckedList] = useState([]);
    const rowsPerPage = 6;
    const totalPage = useMemo(() => {
        return Math.max(Math.ceil(tableData.length / rowsPerPage),1);
    }, [tableData, rowsPerPage]);

    const visibleData = useMemo(() => {
        const reverseData = tableData.toReversed();
        return reverseData.slice((page - 1) * rowsPerPage, page * rowsPerPage);
    }, [page, rowsPerPage, tableData]);

    const handleCheck = (check, index) => {
        if (index === 0) {
            setCheckedList(check ? visibleData.map((ele) => ele.id) : []);
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
    const handleDelete = () => {
        setTableData((prevData) =>
            prevData.filter((ele) => !checkedList.includes(ele.id)),
        );
    };

    useEffect(() => {
        setCheckedList([]);
    }, [page, rowsPerPage, totalPage]);
 
    return (
        <Card className=" xl:col-span-2 shadow-none overflow-auto min-h-[540px] relative">
            <div id="delete" onClick={() => handleDelete()}></div>
            <CardBody className="px-0 pt-0 h-full">
                <table className="w-full min-w-[640px]" cellSpacing={0}>
                    <thead>
                        <tr>
                            {type === "checkbox" && (
                                <td className=" px-0 flex justify-center border-b border-blue-gray-50">
                                    <Checkbox
                                        className="hover:before:bg-[#1E5EFF]"
                                        color="blue"
                                        checked={
                                            checkedList.length ===
                                            visibleData.length&&checkedList.length>0
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
                        <tr>{addRowJsx}</tr>
                        {visibleData.map((ele, key) => {
                            const className = `py-3 px-5 ${
                                key === visibleData.length - 1
                                    ? ""
                                    : "border-b border-blue-gray-50"
                            }`;

                            return (
                                <tr key={page + "-" + ele.id} className="hover:bg-blue-gray-50 w-full">
                                    {type === "checkbox" && (
                                        <td
                                            className={`py-3 px-0  flex justify-center ${
                                                key === visibleData.length - 1
                                                    ? ""
                                                    : "border-b border-blue-gray-50"
                                            }`}
                                        >
                                            <Checkbox
                                                color="blue"
                                                className="hover:before:bg-[#1E5EFF]"
                                                checked={checkedList.includes(
                                                    ele.id,
                                                )}
                                                onChange={(e) =>
                                                    handleCheck(
                                                        e.target.checked,
                                                        ele.id,
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
