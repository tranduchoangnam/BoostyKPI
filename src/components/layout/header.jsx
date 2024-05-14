import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { CommonButton } from "@/components/buttons";
import { Typography } from "@material-tailwind/react";
export function Header({ name, onPrimary, onSecondary, back }) {
    const navigate = useNavigate();
    return (
        <div className="flex justify-between">
            <div>
                {back && (
                    <Typography
                        className="text-[14px] text-[#5A607F] flex cursor-pointer"
                        onClick={() => navigate(-1)}
                    >
                        <ArrowLeftIcon className="h-5 w-5 text-blue-gray-500 mr-1" />
                        Back
                    </Typography>
                )}
                <Typography className="text-[24px] font-bold text-[#131523] mt-2 uppercase">
                    {name.page}
                </Typography>
            </div>
            <div className="flex items-center gap-4">
                {onSecondary && (
                    <CommonButton type="secondary" onClick={onSecondary}>
                        {name.secondary}
                    </CommonButton>
                )}
                {onPrimary && (
                    <CommonButton type="primary" onClick={onPrimary}>
                        {name.primary}
                    </CommonButton>
                )}
            </div>
        </div>
    );
}
