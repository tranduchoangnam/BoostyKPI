import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Typography, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export function ReminderPopModal({ onClose, name, time }) {
    const [isOpen, setIsOpen] = useState(true);
    const [timeRemaining, setTimeRemaining] = useState("");

    const handleClose = () => {
        setIsOpen(false);
        onClose(false);
    };

    useEffect(() => {
        const calculateTimeRemaining = () => {
            const now = new Date();
            const reminderTime = new Date(time);
            const diff = reminderTime - now;

            if (diff <= 0) {
                setTimeRemaining("The reminder time has passed");
                return;
            }

            const hours = Math.floor(diff / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            setTimeRemaining(
                `${hours} hours, ${minutes} minutes, and ${seconds} seconds`
            );
        };

        calculateTimeRemaining();

        const intervalId = setInterval(calculateTimeRemaining, 1000);

        return () => clearInterval(intervalId);
    }, [time]);

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white w-[540px] h-[300px] flex flex-col items-center space-y-4 p-1 border border-gray-200 rounded-md shadow-md relative">
                        <IconButton
                            onClick={handleClose}
                            className="absolute left-56"
                        >
                            <CloseIcon />
                        </IconButton>
                        <div className="w-[57px] h-[57px]">
                            <img
                                src="/img/reminder.png"
                                className="w-full h-full"
                                alt="Medal"
                            />
                        </div>
                        <Typography
                            variant="h5"
                            component="div"
                            className="w-[468px] text-[#131523] text-center"
                        >
                            <span className="font-bold">It's time for {name}</span>
                        </Typography>
                        <Typography className="w-[468px] text-[#131523] text-center relative">
                            Reminder is set for {timeRemaining}
                        </Typography>
                        <Button
                            variant="contained"
                            className="w-[99px] h-10 rounded"
                            onClick={handleClose}
                        >
                            Okay!
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
}

ReminderPopModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
};

export default ReminderPopModal;
