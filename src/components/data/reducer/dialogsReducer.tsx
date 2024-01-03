import {T_DialogsData} from "../data";


const initialState:T_DialogsData = {
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
}
export const DialogsReducer=(state=initialState,action:any)=>{
switch (action.type) {
    default:
        return state
}
}