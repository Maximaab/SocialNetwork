import {T_DialogsData} from "../data";


const initialState: T_DialogsData = {
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
    newValueForInput: "",
}
export const DialogsReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "CHANGE_VALUE":
            return {
                ...state,
                dialogItems: state.dialogItems,
                newValueForInput: action.message
            }
        case "ADD_MESSAGE":
            console.log(state.newValueForInput)
            let newMessage = {id: crypto.randomUUID(), userID: "1", messages: state.newValueForInput}
            return {
                ...state,
                messageData: [...state.messageData,newMessage],newValueForInput:""

            }
        default:
            return state
    }
}

type ActionType = changeNewValueACType | addNewMessageAcType
type changeNewValueACType = ReturnType<typeof changeNewValueAC>
export const changeNewValueAC = (message: string) => {
    return {
        type: "CHANGE_VALUE",
        message
    } as const
}
type addNewMessageAcType = ReturnType<typeof addNewMessageAc>
export const addNewMessageAc=()=>{
    return {
        type:"ADD_MESSAGE"

    }as const
}