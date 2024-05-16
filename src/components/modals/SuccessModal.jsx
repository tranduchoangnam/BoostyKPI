import React, { useState } from "react";
import PropTypes from "prop-types";
import { Typography, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export function SuccessModal ({ name }) {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white w-[524px] h-[416px] flex flex-col items-center space-y-4 p-4 border border-gray-200 rounded-md shadow-md relative">
                        <IconButton onClick={handleClose} className="left-56">
                            <CloseIcon />
                        </IconButton>
                        <div className="w-[140px] h-[140px]">
                            <img src="/img/medal.png" className="w-full h-full" />
                        </div>
                        <Typography
                            variant="h5"
                            component="div"
                            className="w-[468px] text-[#131523] text-center"
                        >
                            <span className="font-bold">Congratulations</span>
                        </Typography>
                        <Typography
                            className="w-[468px] text-[#131523] text-center relative"
                        >
                            You’ve achieved <span className="font-bold">{name} KPI</span> 
                            <br />
                            <span className="relative inline-block">
                                That's great!!! Keep chasing your dream
                                <img
                                    src="/img/medal-icon.png"
                                    className="inline-block w-6 h-6 ml-4 absolute"
                                    alt="Medal Icon"
                                />
                            </span>
                        </Typography>

                        <Button
                            variant="contained"
                            className="w-[99px] h-10 rounded"
                            onClick={handleClose}
                        >
                            Got it!
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
};

SuccessModal.propTypes = {
    name: PropTypes.string.isRequired,
};

export default SuccessModal;
