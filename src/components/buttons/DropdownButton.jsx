import { Select, Option } from "@material-tailwind/react";
 
export function DropdownButton({name,options}) {
  return (
    <div className="w-full">
      <Select label={name}>
        {options.map((option,index) => (
            <Option key={index} value={option.value}>{option.label}</Option>
        ))}
      </Select>
    </div>
  );
}