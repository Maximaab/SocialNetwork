

export type T_UsersInitialType = {
items:UserBody[]
    totalCount:number | null
    error:string | null
}

export type UserBody = {
    id:number,
    name:string,
    status:string | null
    photos: {
        small: string | null
        large: string | null
    }
    followed:boolean
}
let initialState:T_UsersInitialType = {
    items: [],
    totalCount:null,
    error:null
}
export const UsersReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "CHANGE_FOLLOW":
        return {...state,
            users:state.items.map(user => user.id === action.userID ? {...user, follow:action.follow} : user )}
        case "SET_USERS":
            return {...state, items: action.users}
        default:
            return state
    }

}

type ActionType = changeFollowACType | setNewUsersACType
type changeFollowACType = ReturnType<typeof changeFollowAC>
export const changeFollowAC = (userID:number, follow:boolean) =>{
    return {
        type:"CHANGE_FOLLOW",
        follow,
        userID
    }as const
}
type setNewUsersACType = ReturnType<typeof setNewUsersAC>
export const setNewUsersAC = (users:UserBody[],totalCount:number | null,
error:string | null) =>{
    return {
        type: "SET_USERS",
        users,
        totalCount,
        error
    } as const
}