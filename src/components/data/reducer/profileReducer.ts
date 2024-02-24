import {pdata} from "../data";
import {addPostAC, onChangePostValueAC} from "../../../helpers/action/action.type";

type T_AddPost = {
    type: typeof addPostAC

}
type T_OnChangePostValue = {
    type: typeof onChangePostValueAC
    defaultValue: string
}
export type ActionType = T_AddPost | T_OnChangePostValue | setUserInfoACType
export type T_ProfilePage={
    profileInfo: T_Profile_Info | null
    newValueForPost: string,
    postData: pdata[]
}
export type T_Profile_Info ={
    aboutMe: string;
    contacts: T_ProfileContact;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    userId: number;
    photos: T_ProfileFoto;
}
 type T_ProfileContact ={
    facebook: string;
    website?: any;
    vk: string;
    twitter: string;
    instagram: string;
    youtube?: any;
    github: string;
    mainLink?: any;
}
type T_ProfileFoto = {
    small: string;
    large: string;
}

const initialState: T_ProfilePage = {
    profileInfo: null,
    newValueForPost: "",
    postData: [
        {id: crypto.randomUUID(), message: "title message", likecount: "5"},
        {id: crypto.randomUUID(), message: "title message", likecount: "5"},
        {id: crypto.randomUUID(), message: "title message", likecount: "5"},
        {id: crypto.randomUUID(), message: "title message", likecount: "5"},
        {id: crypto.randomUUID(), message: "title message", likecount: "5"}
    ]
}
export const ProfileReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "ADD_POST":
            const newPost = {id: crypto.randomUUID(), message: state.newValueForPost, likecount: "0"}
            return {...state,
                postData: [newPost,...state.postData],
                newValueForPost:""}
        case "OnChangePost_Value":
            return {...state,
                newValueForPost: action.defaultValue}
        case "SET_USER_INFI":
            return {...state, profileInfo:action.userInfo}
        default:
                return state
    }

}
type setUserInfoACType = ReturnType<typeof setUserInfoAC>
export const setUserInfoAC = (userInfo: T_Profile_Info) =>{
    return {type:"SET_USER_INFI", userInfo} as const
}