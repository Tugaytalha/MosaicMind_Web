const axios = require("axios");
const { get } = require("firebase/database");

function getAxiosInstance(BASE_URL, headers = {}) {
    return {
        get(method, params) {
            return axios.get(`/${method}`, {
                baseURL: BASE_URL,
                headers,
                params,
            });
        },
        post(method, data) {
            return axios({
                method: "post",
                url: `/${method}`,
                baseURL: BASE_URL,
                headers,
                data,
            });
        },
    };
}

module.exports = {
    getAxiosInstance,
};
