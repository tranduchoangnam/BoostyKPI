import { useState } from "react";
export function StatusButton({ status }) {
  const [type,setType]= useState(status);
  const handleChange=(currentType)=>{
    switch (currentType) {
      case "Done":
        setType("In Progress");
        break;
      case "In Progress":
        setType("Pending");
        break;
      default:
        setType("Done");
        break;
    }
  }
  return (
    <button
      className={`text-[14px] rounded-[4px] whitespace-nowrap py-1 px-2  min-w-[60px] last:mr-0 mr-1 ${
        type === "Pending"
          ? "bg-[#E6E9F4] text-[#5A607F]"
          : type === "In Progress"
          ? "bg-[#D9E4FF] text-[#1E5EFF]"
          : "bg-[#C4F8E2] text-[#06A561]"
      }`}
      onClick={()=>handleChange(type)}
    >
      {type}
    </button>
  );
}