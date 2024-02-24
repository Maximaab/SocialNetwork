import {axiosInstans} from "./axiosInstanc";

export const Profile_api = {
    getUsers(usersId:number) {
        return axiosInstans.get(`/profile/${usersId}`)
    }

}