import axiosInstance from "@/configs/axiosInstance";

export const getUser = async (payload) => {
    try {
        const response = await axiosInstance.get("/users",{
            headers: {
                Authorization: `Bearer ${payload.token}`,
            },
        });
        return response.data;
    } catch (err) {
        console.log("error");
    }
}
