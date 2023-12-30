import {rerenderEntireThree} from "../index";

export type message = {
    id:string,
    messages:string,
    userID:string
}

export type dialog = {
    id:string,
    name:string
}
export type pdata = {
    message:string,
    likecount:string,
    id:string
}

export type AllDataType = {
    dialogsData:T_DialogsData
    postData:pdata[]
}
export type T_DialogsData = {
    messageData:message[]
    dialogItems:dialog[]
}

export const allData:AllDataType = {
    dialogsData: {
        messageData: [
            {id:crypto.randomUUID(),userID:"1", messages:"hi"},
            {id:crypto.randomUUID(),userID:"1", messages:"hello"},
            {id:crypto.randomUUID(),userID:"1", messages:"hey"},
            {id:crypto.randomUUID(),userID:"2", messages:"ola"},
            {id:crypto.randomUUID(),userID:"2", messages:"cu"},
            {id:crypto.randomUUID(),userID:"2", messages:"cu"},
            {id:crypto.randomUUID(),userID:"3", messages:"cu"},
            {id:crypto.randomUUID(),userID:"3", messages:"cu"},
            {id:crypto.randomUUID(),userID:"3", messages:"cu"}
        ],
        dialogItems:[
            {id:"1", name:"Max"},
            {id:"2", name:"Oleg"},
            {id:"3", name:"Marina"},
            {id:"4", name:"Dany"},
            {id:"5", name:"Alex"},
        ],
    },

    postData:[
        {id:crypto.randomUUID(),message:"title message", likecount:"5"},
        {id:crypto.randomUUID(),message:"title message", likecount:"5"},
        {id:crypto.randomUUID(),message:"title message", likecount:"5"},
        {id:crypto.randomUUID(),message:"title message", likecount:"5"},
        {id:crypto.randomUUID(),message:"title message", likecount:"5"}
    ]
}

export const addPost =()=>{
    const newPost = {id:crypto.randomUUID(),message:"URAAAAA", likecount:"0"}
    allData.postData.push(newPost)
    rerenderEntireThree()
}
