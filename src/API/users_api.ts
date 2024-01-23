import {axiosInstans} from "./axiosInstanc";
import {T_UsersInitialType} from "../components/data/reducer/usersReducer";

export const users_api = {
 getUsers (activePage:number) {
       return axiosInstans.get<T_UsersInitialType>(`users?page=${activePage}`)
 }

}

