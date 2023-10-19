import axios from "axios"

let axiosInstance=axios.create({
    baseURL : "http://uatbenmoon.malayinfotech.com/"
})

export default axiosInstance