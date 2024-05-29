import { Input, Select, Option, Switch } from "@material-tailwind/react";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import { useState } from "react";
import dayjs from "dayjs";
import { toast } from "react-toastify";
export function ReminderModal({ reminder, onSetReminder, onClose }) {
    const [reminderData, setReminderData] = useState(reminder);
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white py-4 px-8   rounded-lg relative">
                <div className="flex justify-between pt-2 pb-4 border-b">
                    <h1 className="text-[16px] font-bold">Reminder</h1>
                    <Switch
                        id="custom-switch-component"
                        ripple={false}
                        checked={reminderData.status || false}
                        onChange={(e) =>
                            setReminderData({
                                ...reminderData,
                                status: e.target.checked,
                            })
                        }
                        className="h-full w-full checked:bg-[#1E5EFF]"
                        containerProps={{
                            className: "w-11 h-6",
                        }}
                        circleProps={{
                            className: "before:hidden left-0.5 border-none",
                        }}
                    />
                </div>
                <div className="grid grid-cols-2 my-6 gap-4">
                    <Select
                        label="Before Start"
                        value={reminderData.before_start || null}
                        onChange={(e) =>
                            setReminderData({
                                ...reminderData,
                                before_start: e,
                            })
                        }
                    >
                        <Option value={0}>When start</Option>
                        <Option value={15}>15 minutes</Option>
                        <Option value={30}>30 minutes</Option>
                        <Option value={60}>1 hour</Option>
                    </Select>
                    <Select
                        label="Repeat"
                        value={reminderData.repeat || "None"}
                        onChange={(e) =>
                            setReminderData({
                                ...reminderData,
                                repeat: e,
                            })
                        }
                    >
                        <Option value={"None"}>Do not repeat</Option>
                        <Option value={"Daily"}>Daily</Option>
                        <Option value={"Weekly"}>Weekly</Option>
                        <Option value={"Monthly"}>Monthly</Option>
                    </Select>

                    <MobileTimePicker
                        label="Custome time"
                        value={dayjs(reminderData.custom_time) || null}
                        onChange={(date) =>
                            setReminderData({
                                ...reminderData,
                                custom_time: dayjs(date),
                            })
                        }
                        slotProps={{ textField: { size: "small" } }}
                    />
                    <Input
                        type="date"
                        label="Custom Date"
                        placeholder="Select time"
                        value={
                            dayjs(reminderData.custom_date).format(
                                "YYYY-MM-DD",
                            ) || null
                        }
                        onChange={(e) =>
                            setReminderData({
                                ...reminderData,
                                custom_date: e.target.value,
                            })
                        }
                    />
                </div>
                <div className="flex justify-between border-t-2 pt-4">
                    <button
                        className="bg-white text-[#F0142F] px-0 py-2 rounded-[4px] mr-4"
                        onClick={() => onClose(false)}
                    >
                        Cancel
                    </button>
                    <button
                        className="bg-[#1E5EFF] text-white px-8 py-2 rounded-[4px]"
                        onClick={() => {
                            onSetReminder({
                                status: reminderData.status || false,
                                before_start: reminderData.before_start || 0,
                                repeat: reminderData.repeat || "None",
                                custom_time: reminderData.custom_time || "",
                                custom_date: reminderData.custom_date || "",
                            });
                            onClose(false);
                            toast.success("Reminder saved successfully");
                        }}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}
