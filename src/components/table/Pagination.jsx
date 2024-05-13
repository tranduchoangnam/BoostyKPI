import React, { useEffect } from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export function Pagination({ page, totalPage, onChange }) {
    const [active, setActive] = React.useState(page);

    const getItemProps = (index) => ({
        variant: active === index ? "filled" : "text",
        className: active === index ? "bg-[#ECF2FF] text-[#1E5EFF]" : "",
        onClick: () => setActive(index),
    });

    const next = () => {
        if (active === totalPage) return;

        setActive(active + 1);
    };

    const prev = () => {
        if (active === 1) return;

        setActive(active - 1);
    };
    useEffect(() => {
        onChange(active);
    }, [active]);

    return (
        <div className="flex items-center gap-4 mb-0">
            <Button
                variant="text"
                className="flex items-center gap-2"
                onClick={prev}
                disabled={active === 1}
            >
                <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> 
            </Button>
            <div className="flex items-center gap-2">
                {Array.from({ length: totalPage }, (_, i) => i + 1).map(
                    (index) => (
                        <IconButton key={index} {...getItemProps(index)}>
                            {index}
                        </IconButton>
                    ),
                )}
            </div>
            <Button
                variant="text"
                className="flex items-center gap-2"
                onClick={next}
                disabled={active === totalPage}
            >
                <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
            </Button>
        </div>
    );
}
