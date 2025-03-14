import axios from "axios"
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const instance = axios.create({
    baseURL: `${BACKEND_URL}/api`
})

instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("accessToken")
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

export default instance