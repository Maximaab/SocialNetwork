import axios from "axios";

export const axiosInstans = axios.create({
    baseURL:"https://social-network.samuraijs.com/api/1.0",
    withCredentials:true
})