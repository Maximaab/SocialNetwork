import {connect} from "react-redux";
import Users from "./Users";
import {AppDispatch, RootState} from "../data/redux/store";
import {
    changeFollowAC,
    setNewActivePageAC,
    setNewUsersAC,
    T_UsersInitialType,
    UserBody
} from "../data/reducer/usersReducer";
import React from "react";
import axios from "axios";

export type UsersPropsType = {
    changeFollowStatus: (userID: number, follow: boolean) => void,
    users: UserBody[]
    setUsersFromServer: (usersData: UserBody[], totalCount: number, error: string | null) => void
    setNewActivePage: (pageNumber: number) => void
    activePage:number
    pageSize:number
    totalCount:number
}

class SuperUserContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get<T_UsersInitialType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.activePage}`).then((res) => {
            this.props.setUsersFromServer(res.data.items, res.data.totalCount, res.data.error)
        })
    }

    onPageChangeHandler(pageNumber: number) {
        this.props.setNewActivePage(pageNumber);
        axios.get<T_UsersInitialType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}`).then((res) => {
            this.props.setUsersFromServer(res.data.items, res.data.totalCount, res.data.error)
        })
    }

    render() {
        return <Users {...this.props} onPageChangeHandler={this.onPageChangeHandler.bind(this)} />;
    }
}

const MyStateToProps = (state: RootState) => {
    return {
        users: state.UsersReducer?.items,
        activePage: state.UsersReducer?.activePage,
        pageSize: state.UsersReducer?.pageSize,
        totalCount: state.UsersReducer?.totalCount
    }
}
const MyDispatchToProps = (dispatch: AppDispatch) => {
    return {
        changeFollowStatus(userID: number, follow: boolean) {
            dispatch(changeFollowAC(userID, follow))
        },
        setUsersFromServer(usersData: UserBody[], totalCount: number,
                           error: string | null) {
            dispatch(setNewUsersAC(usersData, totalCount, error))
        },
        setNewActivePage(pageNumber: number) {
            dispatch(setNewActivePageAC(pageNumber))
        }
    }
}

export const UserContainer = connect(MyStateToProps, MyDispatchToProps)(SuperUserContainer)