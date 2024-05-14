import { Button } from "@material-tailwind/react";
export function CommonButton({ type, onClick, children }) {
    return (
        <Button
            onClick={onClick}
            className={`${
                type === "primary"
                    ? "bg-[#1E5EFF] text-white"
                    : "bg-white text-[#1E5EFF]"
            } flex items-center gap-3 "}`}
            style={{
                borderRadius: "4px",
            }}
        >
            {children}
        </Button>
    );
}
