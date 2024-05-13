import { useState } from "react";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { ReminderModal } from "@/components/modals/ReminderModal";
export function ReminderButton({ reminder }) {
    const [toggle, setToggle] = useState(false);
    const [active, setActive] = useState(reminder.status);
    return (
        <>  
            {toggle && <ReminderModal reminder={reminder} status={active} onActive={setActive} onClose={setToggle}/>}
            <CalendarIcon className={`h-5 w-5 cursor-pointer ${active?"text-[#1E5EFF]":"text-[#7E84A3]"}`} onClick={()=>setToggle(!toggle)} />
        </>
    );
}
