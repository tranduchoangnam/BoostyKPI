import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { XMarkIcon, TrophyIcon, FireIcon } from "@heroicons/react/24/outline";
const style = {
    position: "absolute",
    top: {xs:"50%", md:"0"},
    left:  {xs:"50%", md:"0"},
    width: { xs: "90%", md: "800px" },
    bgcolor: "background.paper",
    height: {xs:"90%",md:"100%"},
    padding: "64px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflowY: "scroll",
    transform: {xs:"translate(-50%, -50%)", md:"none"},
    borderRadius: {xs:"16px", md:"0"},
};


export function CommonModal({ open, setOpen, children }) {
    return (
        <div>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {children}
                    <Button
                        sx={{
                            position: "absolute",
                            right: "8px",
                            top: "8px",
                            width: "32px",
                            height: "64px",
                            padding: "0px !important",
                            borderRadius: "9999px",
                        }}
                        onClick={() => setOpen(false)}
                    >
                        <XMarkIcon className="h-6 w-6" />
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}
