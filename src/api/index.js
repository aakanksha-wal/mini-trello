import axios from 'axios';

const axiosApi = () => {
    const axiosInstance = axios.create({
        baseURL: 'https://minitrello.com/api',
        headers: { 'Content-Type': 'application/json' },
    })
    return axiosInstance
}

export default axiosApi;