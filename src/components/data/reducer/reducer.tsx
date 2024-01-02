import {AllDataType, T_ProfilePage, T_Store} from "../data";
import {addPostAC, onChangePostValueAC} from "../../../helpers/action/action.type";

type T_AddPost = {
    type: typeof addPostAC
}
type T_OnChangePostValue = {
    type: typeof onChangePostValueAC
    defaultValue:string
}
export type ActionType = T_AddPost | T_OnChangePostValue
export const ProfileReducer = (state: T_ProfilePage, action: ActionType) => {
    switch (action.type) {
        case "ADD_POST":
            const newPost = {id: crypto.randomUUID(), message: state.newValueForPost, likecount: "0"}
            state.newValueForPost = ''
            state.postData.push(newPost)
            return state
        case "OnChangePost_Value":
            state.newValueForPost = action.defaultValue
            return state
    }
    // if (action.type === addPostAC) {
    //
    //     const newPost = {id: crypto.randomUUID(), message: state.newValueForPost, likecount: "0"}
    //     state.newValueForPost = ''
    //     state.postData.push(newPost)
    //
    //     // rerenderEntireThree(Store.getData())
    //
    // } else if (action.type === onChangePostValueAC) {
    //
    //     state.newValueForPost = action.defaultValue
    // }
}