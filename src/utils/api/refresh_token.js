import axiosInstance from "@/configs/axiosInstance";

export const getToken = async (payload) => {
    try {
        const response = await axiosInstance.get("/auth/refresh",{
            headers: {
                Authorization: `Bearer ${payload.token}`,
            },
        });
        return response.data;
    } catch (err) {
        console.log("error");
    }
}

