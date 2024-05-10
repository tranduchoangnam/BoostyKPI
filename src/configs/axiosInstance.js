import axios from 'axios';
import { backend_url } from '@/constants/endpoint';

const axiosInstance = axios.create({
    baseURL: backend_url,
    headers: {
        accept: "application/json",
    },
});

export default axiosInstance;
