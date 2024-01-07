

export type T_UsersInitialType = {
users:UserBody[]
}

export type UserBody = {
    id:string,
    name:string,
    follow:boolean
}
let initialState:T_UsersInitialType = {
    users: [
        {id: crypto.randomUUID(), name: "Addick", follow: true},
        {id: crypto.randomUUID(), name: "Muschi", follow: true},
        {id: crypto.randomUUID(), name: "Duck", follow: false},
        {id: crypto.randomUUID(), name: "Aka", follow: false},
        {id: crypto.randomUUID(), name: "Kaka", follow: true}
    ]
}
export const UsersReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "CHANGE_FOLLOW":
        return {...state,
            users:state.users.map(user => user.id === action.userID ? {...user, follow:action.follow} : user )}
        default:
            return state
    }

}

type ActionType = changeFollowACType
type changeFollowACType = ReturnType<typeof changeFollowAC>
export const changeFollowAC = (userID:string, follow:boolean) =>{
    return {
        type:"CHANGE_FOLLOW",
        follow,
        userID
    }as const
}