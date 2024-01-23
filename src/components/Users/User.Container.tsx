import {connect} from "react-redux";

import {AppDispatch, RootState} from "../data/redux/store";
import {
    changeFollowAC, setIsFetchingAC,
    setNewActivePageAC,
    setNewUsersAC,
    T_UsersInitialType,
    UserBody
} from "../data/reducer/usersReducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";
import {users_api} from "../../API/users_api";

export type UsersPropsType = {
    changeFollowAC: (userID: number, follow: boolean) => void,
    users: UserBody[]
    setNewUsersAC: (usersData: UserBody[], totalCount: number, error: string | null) => void
    setNewActivePageAC: (pageNumber: number) => void
    activePage: number
    pageSize: number
    totalCount: number
    isFetching: boolean
    setIsFetchingAC: (status: boolean) => void
}

class SuperUserContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        users_api.getUsers(this.props.activePage).then((res) => {
            this.props.setNewUsersAC(res.data.items, res.data.totalCount, res.data.error)
        }).finally(() => {
            this.props.setIsFetchingAC(false)
        })
    }

    onPageChangeHandler(pageNumber: number) {
        this.props.setNewActivePageAC(pageNumber);
        this.props.setIsFetchingAC(true)

        users_api.getUsers(pageNumber).then((res) => {
            this.props.setNewUsersAC(res.data.items, res.data.totalCount, res.data.error)
        }).finally(() => {
            this.props.setIsFetchingAC(false)
        })
    }

    render() {
        return <Users {...this.props} onPageChangeHandler={this.onPageChangeHandler.bind(this)}/>;
    }
}

const MyStateToProps = (state: RootState) => {
    return {
        users: state.UsersReducer?.items,
        activePage: state.UsersReducer?.activePage,
        pageSize: state.UsersReducer?.pageSize,
        totalCount: state.UsersReducer?.totalCount,
        isFetching: state.UsersReducer?.isFetching
    }
}
// const MyDispatchToProps = (dispatch: AppDispatch) => {
//     return {
//         changeFollowStatus(userID: number, follow: boolean) {
//             dispatch(changeFollowAC(userID, follow))
//         },
//         setUsersFromServer(usersData: UserBody[], totalCount: number,
//                            error: string | null) {
//             dispatch(setNewUsersAC(usersData, totalCount, error))
//         },
//         setNewActivePage(pageNumber: number) {
//             dispatch(setNewActivePageAC(pageNumber))
//         },
//         setIsFetching(status: boolean) {
//             dispatch(setIsFetchingAC(status))
//         }
//     }
// }
const mapDispatch = {
    changeFollowAC,
    setNewUsersAC,
    setNewActivePageAC,
    setIsFetchingAC
}
export const UserContainer = connect(MyStateToProps, mapDispatch)(SuperUserContainer)