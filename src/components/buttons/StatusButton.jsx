export const StatusButton= ({status, setStatus} )=> {
    const handleChange = (currentStatus) => {
        switch (currentStatus) {
            case "Done":
                setStatus("In Progress");
                break;
            case "In Progress":
                setStatus("Pending");
                break;
            default:
                setStatus("Done");
                break;
        }
    };
    return (
        <button
            className={`text-[14px] rounded-[4px] whitespace-nowrap py-1 px-2  min-w-[60px] last:mr-0 mr-1 ${
                status === "Pending"
                    ? "bg-[#E6E9F4] text-[#5A607F]"
                    : status === "In Progress"
                    ? "bg-[#D9E4FF] text-[#1E5EFF]"
                    : "bg-[#C4F8E2] text-[#06A561]"
            }`}
            onClick={() => handleChange(status)}
        >
            {status}
        </button>
    );
}
