import {ActionType, ProfileReducer} from "./reducer/profileReducer";

export type message = {
    id: string,
    messages: string,
    userID: string
}

export type dialog = {
    id: string,
    name: string
}
export type pdata = {
    message: string,
    likecount: string,
    id: string
}
export type T_ProfilePage={
    newValueForPost: string,
    postData: pdata[]
}

export type AllDataType = {
    dialogsData: T_DialogsData
    ProfilePage: T_ProfilePage
}
export type T_DialogsData = {
    messageData: message[]
    dialogItems: dialog[]
}
export type T_Store = {
    _allData: AllDataType
    getData: () => AllDataType
    _callSubscriber: (state: AllDataType) => void
    subscribe: (observer: (state: AllDataType) => void) => void
    dispatch:(action:any)=>void

}
export type T_MainDuspatch = ActionType
export const Store: T_Store = {
    _allData: {
        dialogsData: {
            messageData: [
                {id: crypto.randomUUID(), userID: "1", messages: "hi"},
                {id: crypto.randomUUID(), userID: "1", messages: "hello"},
                {id: crypto.randomUUID(), userID: "1", messages: "hey"},
                {id: crypto.randomUUID(), userID: "2", messages: "ola"},
                {id: crypto.randomUUID(), userID: "2", messages: "cu"},
                {id: crypto.randomUUID(), userID: "2", messages: "cu"},
                {id: crypto.randomUUID(), userID: "3", messages: "cu"},
                {id: crypto.randomUUID(), userID: "3", messages: "cu"},
                {id: crypto.randomUUID(), userID: "3", messages: "cu"}
            ],
            dialogItems: [
                {id: "1", name: "Max"},
                {id: "2", name: "Oleg"},
                {id: "3", name: "Marina"},
                {id: "4", name: "Dany"},
                {id: "5", name: "Alex"},
            ],
        },
        ProfilePage: {
            newValueForPost: "",
            postData: [
                {id: crypto.randomUUID(), message: "title message", likecount: "5"},
                {id: crypto.randomUUID(), message: "title message", likecount: "5"},
                {id: crypto.randomUUID(), message: "title message", likecount: "5"},
                {id: crypto.randomUUID(), message: "title message", likecount: "5"},
                {id: crypto.randomUUID(), message: "title message", likecount: "5"}
            ]
        }
    },
    getData() {
        return this._allData
    },
    dispatch(action:T_MainDuspatch){

        ProfileReducer(this._allData.ProfilePage,action)
        this._callSubscriber(this._allData)
        // if(action.type === addPostAC) {
        //     const newPost = {id: crypto.randomUUID(), message: action.title, likecount: "0"}
        //     this._allData.ProfilePage.postData.push(newPost)
        //     this._allData.ProfilePage.newValueForPost = " "
        //     // rerenderEntireThree(Store.getData())
        //     this._callSubscriber(this._allData)
        // } else if (action.type === onChangePostValueAC) {
        //     this._allData.ProfilePage.newValueForPost = action.value
        // }
    },


    _callSubscriber(state: AllDataType) {

    },
    subscribe(observer: (state: AllDataType) => void) {
        this._callSubscriber = observer
    }
}
// export const allData: AllDataType = {
//     dialogsData: {
//         messageData: [
//             {id: crypto.randomUUID(), userID: "1", messages: "hi"},
//             {id: crypto.randomUUID(), userID: "1", messages: "hello"},
//             {id: crypto.randomUUID(), userID: "1", messages: "hey"},
//             {id: crypto.randomUUID(), userID: "2", messages: "ola"},
//             {id: crypto.randomUUID(), userID: "2", messages: "cu"},
//             {id: crypto.randomUUID(), userID: "2", messages: "cu"},
//             {id: crypto.randomUUID(), userID: "3", messages: "cu"},
//             {id: crypto.randomUUID(), userID: "3", messages: "cu"},
//             {id: crypto.randomUUID(), userID: "3", messages: "cu"}
//         ],
//         dialogItems: [
//             {id: "1", name: "Max"},
//             {id: "2", name: "Oleg"},
//             {id: "3", name: "Marina"},
//             {id: "4", name: "Dany"},
//             {id: "5", name: "Alex"},
//         ],
//     },
//     ProfilePage: {
//         newValueForPost: "",
//         postData: [
//             {id: crypto.randomUUID(), message: "title message", likecount: "5"},
//             {id: crypto.randomUUID(), message: "title message", likecount: "5"},
//             {id: crypto.randomUUID(), message: "title message", likecount: "5"},
//             {id: crypto.randomUUID(), message: "title message", likecount: "5"},
//             {id: crypto.randomUUID(), message: "title message", likecount: "5"}
//         ]
//     },
//
// }
//
// export const addPost = (title: string) => {
//     const newPost = {id: crypto.randomUUID(), message: title, likecount: "0"}
//     allData.ProfilePage.postData.push(newPost)
//     rerenderEntireThree()
// }
// export const onChangePostValue = (value: string) => {
//     allData.ProfilePage.newValueForPost = value
// }