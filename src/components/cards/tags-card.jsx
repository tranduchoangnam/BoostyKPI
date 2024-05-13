import {
    Typography,
    Card,
    Input,
    Chip,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
export function TagsCard({ tags, onSetTags }) {
    return (
        <Card className="mx-0 mb-6 mt-8 py-6 px-6 border border-blue-gray-100 gap-4">
            <Typography className="text-[16px] text-[#131523] font-bold">
                Tags
            </Typography>
            <Input
                type="text"
                label="Add Tags"
                defaultValue=" "
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        onSetTags([...tags, e.target.value]);
                        e.target.value = "";
                    }
                }}
            />
            <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                    <div className="relative">
                        <Chip
                            key={"tag-" + index}
                            value={tag}
                            className="bg-[#E6E9F4] pr-[24px] text-[#5A607F] text-[14px] font-medium capitalize"
                        />
                        <div className="absolute right-1 top-0 flex h-full items-center">
                            <XMarkIcon
                                className="w-4 h-4 cursor-pointer"
                                onClick={() =>
                                    onSetTags(tags.filter((t) => t !== tag))
                                }
                            />
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
}
