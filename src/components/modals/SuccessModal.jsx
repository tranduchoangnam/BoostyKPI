import React, { useState } from "react";
import PropTypes from "prop-types";
import { Typography, Button, IconButton, Modal, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ConfettiExplosion from "react-confetti-explosion";
import { CommonModal } from "./CommonModal";
export function SuccessModal({ name, open, setOpen }) {
    return (
        <>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <div className="bg-white md:w-[524px] w-[90%] h-[416px] gap-2 flex flex-col items-center space-y-4 p-4 border border-gray-200 rounded-md shadow-md relative">
                    <ConfettiExplosion
                        force={0.8}
                        duration={3000}
                        particleCoun={250}
                        width={1600}
                        zIndex={100}
                    />

                    <CloseIcon
                        onClick={() => setOpen(false)}
                        className="absolute top-2 right-4 cursor-pointer"
                    />

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
                    <Typography className="w-[468px] text-[#131523] text-center relative">
                        You’ve achieved{" "}
                        <span className="font-bold">{name} KPI</span>
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
                        className="w-[99px] h-10 rounded mb-8"
                        onClick={() => setOpen(false)}
                    >
                        Got it!
                    </Button>
                </div>
            </Modal>
        </>
    );
}

SuccessModal.propTypes = {
    name: PropTypes.string.isRequired,
};

export default SuccessModal;
