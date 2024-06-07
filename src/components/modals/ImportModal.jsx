import { Button } from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export function ImportModal({ open, setOpen, children }) {
    return open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white max-w-[90%] py-4 px-8 rounded-lg relative">
                <div className="flex justify-between pt-2 pb-4 border-b">
                    <h1 className="text-[16px] font-bold">Import Goals from Excel</h1>
                    {/* <Button
                        onClick={() => setOpen(false)}
                    >
                        <XMarkIcon className="h-6 w-6" />
                    </Button> */}
                    <button
                        className="text-black text-2xl leading-none font-semibold"
                        onClick={() => setOpen(false)}
                    >
                        &times;
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
}
