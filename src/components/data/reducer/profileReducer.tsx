import {AllDataType, T_ProfilePage, T_Store} from "../data";
import {addPostAC, onChangePostValueAC} from "../../../helpers/action/action.type";

type T_AddPost = {
    type: typeof addPostAC

}
type T_OnChangePostValue = {
    type: typeof onChangePostValueAC
    defaultValue: string
}
export type ActionType = T_AddPost | T_OnChangePostValue

const initialState: T_ProfilePage = {
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
            default:
                return state
    }

}