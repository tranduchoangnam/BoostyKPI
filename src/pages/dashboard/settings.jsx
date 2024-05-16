import {
    Typography,
    Card,
    Switch,
} from "@material-tailwind/react";
import { Header } from "@/components/layout";
import { Box, Button, Divider, Grid, IconButton } from "@mui/material";
import { useState } from "react";
import { ClearIcon } from "@mui/x-date-pickers";
import { DropdownButton } from "@/components/buttons";
export function Settings() {
    const [selectedFileName, setSelectedFileName] = useState("");
    const [userInfo, setUserInfo] = useState({ file: '', firstName: "", lastName: "", email: "", phone: "" });

    const handleSave = () => {
        console.log(userInfo);
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFileName(file.name);
        setUserInfo({ ...userInfo, file: file });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value,
        });
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        setSelectedFileName(file.name);
        setUserInfo({ ...userInfo, file: file });
    };
    const handleClearFile = () => {
        setSelectedFileName("");
    };
    const languageOptions = [
        { value: "English", label: "English" },
        { value: "Vietnamese", label: "Vietnamese" },
    ];
    const timezoneOptions = [
        { value: "GMT + 7", label: "GMT + 7" },
        { value: "GMT + 0", label: "GMT + 0" },
    ]

    return (
        <>
            <Header
                name={{ page: "Settings", secondary: "Cancel", primary: "Save" }}
                onPrimary={handleSave}
                onSecondary={() => { }}
                back={true}
            />
            <Card className="mx-0 mb-6 mt-4 p-8 pb-0 border border-blue-gray-100">
                <Typography
                    variant="h5"
                    color="blue-gray"
                    lassName="mb-1"
                >
                    Profile Details
                </Typography>
                <Typography
                    variant="small"
                    color="blue-gray-600"
                    className="mb-1"
                >
                    Enter your profile information
                </Typography>
                <Box sx={{ mt: 3 }}>
                    <Typography
                        variant="small"
                        color="blue-gray-600"
                        className="mb-1"
                    >
                        Profile Image
                    </Typography>
                    <input type="file" id="fileInput" style={{ display: "none" }} onChange={handleFileChange} />
                    {/* <img src={URL.createObjectURL(file)} /> */}
                    <div
                        style={{
                            border: '2px dashed #ccc',
                            borderRadius: '5px',
                            padding: '20px',
                            textAlign: 'center',
                        }}
                        onDragOver={(e) => {
                            e.preventDefault();
                        }}
                        onDrop={handleDrop}
                    >
                        <Box sx={{ py: 3, display: 'grid', alignItems: 'center', justifyItems: 'center', gap: 1 }}>
                            <Button variant="outlined" onClick={() => document.getElementById("fileInput").click()}>Add File</Button>
                            <Typography
                                variant="small"
                                color="blue-gray-600"
                            >
                                Or drag and drop files
                            </Typography>
                            {selectedFileName && (
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <Typography variant="small" color="blue-gray-600">
                                        {selectedFileName}
                                    </Typography>
                                    <IconButton onClick={handleClearFile}>
                                        <ClearIcon fontSize="small" />
                                    </IconButton>
                                </div>
                            )}
                        </Box>
                    </div>
                </Box>
                <Box sx={{ mt: 3 }}>
                    <Grid container spacing={3} >
                        <Grid item xs={12} md={6}>
                            <Box>
                                <Typography
                                    variant="small"
                                    color="blue-gray-600"
                                    className="mb-1"
                                >
                                    First Name
                                </Typography>
                                <input type="text" name="firstName" value={userInfo?.firstName} className="w-full border border-blue-gray-200 p-2 rounded" onChange={handleChange} />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box>
                                <Typography
                                    variant="small"
                                    color="blue-gray-600"
                                    className="mb-1"
                                >
                                    Last Name
                                </Typography>
                                <input type="text" name="lastName" value={userInfo?.lastName} className="w-full border border-blue-gray-200 p-2 rounded" onChange={handleChange} />
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} sx={{ mt: 1 }}>
                        <Grid item xs={12} md={6}>
                            <Box>
                                <Typography
                                    variant="small"
                                    color="blue-gray-600"
                                    className="mb-1"
                                >
                                    Email Address
                                </Typography>
                                <input type="email" name="email" value={userInfo?.email} className="w-full border border-blue-gray-200 p-2 rounded" onChange={handleChange} />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box>
                                <Typography
                                    variant="small"
                                    color="blue-gray-600"
                                    className="mb-1"
                                >
                                    Phone Number
                                </Typography>
                                <input type="tel" name="phone" value={userInfo?.phone} className="w-full border border-blue-gray-200 p-2 rounded" onChange={handleChange} />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Divider sx={{ mt: 5 }} />
                <Grid container spacing={3} sx={{ mt: 1 }}>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Typography
                                variant="h5"
                                color="blue-gray"
                                className="mb-1"
                            >
                                Notification
                            </Typography>
                            <Switch
                                id="custom-switch-component"
                                className="h-full w-full checked:bg-[#1E5EFF]"
                                containerProps={{
                                    className: "w-11 h-6",
                                }}
                                circleProps={{
                                    className: "before:hidden left-0.5 border-none",
                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                    </Grid>
                </Grid>
                <Box sx={{ mt: 3, mb: 5 }}>
                    <Typography
                        variant="h5"
                        color="blue-gray"
                        lassName="mb-1"
                    >
                        Regional Settings
                    </Typography>
                    <Typography
                        variant="small"
                        color="blue-gray-600"
                        className="mb-1"
                    >
                        Set your language and timezone
                    </Typography>
                    <Grid container spacing={3} sx={{ mt: 1 }}>
                        <Grid item xs={12} md={6}>
                            <DropdownButton name="Language" options={languageOptions} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <DropdownButton name="Timezone" options={timezoneOptions} />
                        </Grid>
                    </Grid>
                </Box>
            </Card>
        </>
    );
}

export default Settings;