import { Select, Option } from "@material-tailwind/react";
import { useEffect, useState } from "react";
export function DropdownButton({name,options,onChosen}) {
  const [chosenOption, setChosenOption] = useState(options[0].value);
  useEffect(() => {
    onChosen(chosenOption);
  }, [chosenOption]);
  return (
    <div className="w-full">
      <Select label={name} value={chosenOption} onChange={(e)=>setChosenOption(e)}>
        {options.map((option,index) => (
            <Option key={index} value={option.value}>{option.label}</Option>
        ))}
      </Select>
    </div>
  );
}