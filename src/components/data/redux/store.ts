import {combineReducers, legacy_createStore} from "redux";
import {ProfileReducer} from "../reducer/profileReducer";
import {DialogsReducer} from "../reducer/dialogsReducer";
import {UsersReducer} from "../reducer/usersReducer";

export const rootReducer = combineReducers({
    ProfileReducer:ProfileReducer,
    DialogsReducer:DialogsReducer,
    UsersReducer:UsersReducer
})

export const ReduxStore = legacy_createStore(rootReducer)
export type RootState = ReturnType<typeof ReduxStore.getState>
export type AppDispatch = typeof ReduxStore.dispatch

// @ts-ignore
window.store = ReduxStore