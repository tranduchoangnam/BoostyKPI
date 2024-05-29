import { useState } from "react";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { ReminderModal } from "@/components/modals/ReminderModal";
export function ReminderButton({ reminder, onSetReminder }) {
    const [toggle, setToggle] = useState(false);
    const [reminderData, setReminderData] = useState(reminder);
    return (
        <>  
            {toggle && <ReminderModal reminder={reminderData} onSetReminder={setReminderData} onClose={setToggle}/>}
            <CalendarIcon className={`h-5 w-5 cursor-pointer ${reminderData?.status?"text-[#1E5EFF]":"text-[#7E84A3]"}`} onClick={()=>setToggle(!toggle)} />
        </>
    );
}
