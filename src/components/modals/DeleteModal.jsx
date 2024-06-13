import React, { useState } from "react";
import PropTypes from "prop-types";
import { Typography, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export function DeleteModal({ handleDelete, handleClose }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className={`bg-white ${window.innerWidth < 640 ? 'w-[300px] h-[190px] gap-2 ' : 'w-[500px] h-[260px] space-y-4'} flex flex-col items-center justify-center p-1 border border-gray-200 rounded-md shadow-md relative`}>
                {/* <IconButton onClick={handleClose} className="absolute left-56">
                    <CloseIcon />
                </IconButton> */}
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
                    sx={{ mb: { xs: 1, md: 0 } }}
                >
                    <span className="font-bold">Confirm deletion</span>
                </Typography>
                <Typography className={` w-[468px] text-[#131523] text-center ${window.innerWidth < 640 ? 'hidden' : ''}`}>
                    Are you sure you want to delete the selected items?
                </Typography>
                <div className="space-x-4">
                    <Button
                        variant="contained"
                        color="error"
                        className="rounded bg-red-500 text-white"
                        onClick={handleDelete}
                        size="medium"
                    >
                        Delete
                    </Button>
                    <Button
                        variant="contained"
                        className="rounded"
                        onClick={handleClose}
                        size="medium"
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
