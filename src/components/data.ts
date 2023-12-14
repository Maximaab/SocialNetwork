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
    likecount:string
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
            {id:"1",userID:"1", messages:"hi"},
            {id:"2",userID:"1", messages:"hello"},
            {id:"3",userID:"1", messages:"hey"},
            {id:"4",userID:"2", messages:"ola"},
            {id:"5",userID:"2", messages:"cu"},
            {id:"6",userID:"2", messages:"cu"},
            {id:"7",userID:"3", messages:"cu"},
            {id:"8",userID:"3", messages:"cu"},
            {id:"9",userID:"3", messages:"cu"}
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
        {message:"title message", likecount:"5"},
        {message:"title message", likecount:"5"},
        {message:"title message", likecount:"5"},
        {message:"title message", likecount:"5"},
        {message:"title message", likecount:"5"}
    ]
}
