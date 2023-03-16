import axios from "axios";

const api = axios.create({
    baseURL: "https://shop.cyberlearn.vn/api/",
});

api.interceptors.request.use((config: any) => {
    config.headers = {
        ...config.headers,
        // Authorization: localStorage.getItem("UserAdmin")
        //   ? `Bearer ${JSON.parse(localStorage.getItem("UserAdmin") || "").accessToken}`
        //   : "",
    };
    return config;
});

export default api;
