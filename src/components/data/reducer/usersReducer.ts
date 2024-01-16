export type T_UsersInitialType = {
    items: UserBody[]
    totalCount: number
    error: string | null
    pageSize:number
    activePage: number
}

export type UserBody = {
    id: number,
    name: string,
    status: string | null
    photos: {
        small: string | null
        large: string | null
    }
    followed: boolean
}
let initialState: T_UsersInitialType = {
    items: [],
    totalCount: 2,
    error: null,
    pageSize:10,
    activePage: 1
}
export const UsersReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "CHANGE_FOLLOW":
            return {
                ...state,
                users: state.items.map(user => user.id === action.userID ? {...user, follow: action.follow} : user)
            }
        case "SET_USERS":
            return {...state, items: action.users, totalCount:action.totalCount}
        case "Active_Page":
            return {...state, activePage: action.pageNumber}
        default:
            return state
    }

}

type ActionType = changeFollowACType | setNewUsersACType | setNewActivePageACType
type changeFollowACType = ReturnType<typeof changeFollowAC>
export const changeFollowAC = (userID: number, follow: boolean) => {
    return {
        type: "CHANGE_FOLLOW",
        follow,
        userID
    } as const
}
type setNewUsersACType = ReturnType<typeof setNewUsersAC>
export const setNewUsersAC = (users: UserBody[], totalCount: number ,
                              error: string | null) => {
    return {
        type: "SET_USERS",
        users,
        totalCount,
        error
    } as const
}
type setNewActivePageACType = ReturnType<typeof setNewActivePageAC>
export const setNewActivePageAC=(pageNumber:number)=>{
    return {
        type:"Active_Page",
        pageNumber
    }as const
}