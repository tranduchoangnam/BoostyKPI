import { useState } from "react";
export function PriorityButton({ priority }) {
  const [type,setType]= useState(priority);
  const handleChange=(currentType)=>{
    switch (currentType) {
      case "High":
        setType("Medium");
        break;
      case "Medium":
        setType("Low");
        break;
      default:
        setType("High");
        break;
    }
  }
  return (
    <button
      className={`text-[14px] rounded-[4px] py-1 px-2  min-w-[60px] last:mr-0 mr-1 ${
        type === "High"
          ? "bg-[#FCD5D9] text-[#F0142F]"
          : type === "Medium"
          ? "bg-[#FFF4C9] text-[#F99600]"
          : "bg-[#C4F8E2] text-[#06A561]"
      }`}
      onClick={()=>handleChange(type)}
    >
      {type}
    </button>
  );
}