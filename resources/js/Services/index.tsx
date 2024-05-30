import axios from "axios";

const baseURL = import.meta.env.VITE_APP_URL + "/api/";

const apiClient = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json",
        common: {
            "X-Requested-With": "XMLHttpRequest",
        },
    },
    timeout: 10000,
});

export default apiClient;
