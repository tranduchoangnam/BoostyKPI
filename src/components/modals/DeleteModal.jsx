import React, { useState } from "react";
import PropTypes from "prop-types";
import { Typography, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export function DeleteModal({ handleDelete, handleClose }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white w-[540px] h-[300px] flex flex-col items-center space-y-4 p-1 border border-gray-200 rounded-md shadow-md relative">
                        <IconButton onClick={handleClose} className="absolute left-56">
                    <CloseIcon />
                </IconButton>
                <div className="w-[57px] h-[57px]">
                    <img
                        src="/img/delete.png"
                        className="w-full h-full"
                        alt="Delete"
                    />
                </div>
                <Typography
                    variant="h5"
                    component="div"
                    className="w-[468px] text-[#131523] text-center"
                >
                    <span className="font-bold">Confirm deletion</span>
                </Typography>
                <Typography className="w-[468px] text-[#131523] text-center">
                    Are you sure you want to delete the selected items?
                </Typography>
                <div className="space-x-4">
                    <Button
                        variant="contained"
                        color="error"
                        className="w-[99px] h-10 rounded bg-red-500 text-white"
                        onClick={handleDelete}
                    >
                        Delete
                    </Button>
                    <Button
                        variant="contained"
                        className="w-[99px] h-10 rounded"
                        onClick={handleClose}
                    >
                        Cancel
                    </Button>
                </div>
            </div>
        </div>
    );
}

DeleteModal.propTypes = {
    handleDelete: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired,
};

export default DeleteModal;
