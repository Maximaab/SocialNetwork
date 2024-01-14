import {connect} from "react-redux";
import Users from "./Users";
import {AppDispatch, RootState} from "../data/redux/store";
import {changeFollowAC, setNewUsersAC, T_UsersInitialType, UserBody} from "../data/reducer/usersReducer";
import React from "react";
import axios from "axios";

type UsersPropsType = {
    changeFollowStatus:(userID:number, follow:boolean)=>void,
    users:UserBody[]
    setUsersFromServer:(usersData:UserBody[],totalCount:number | null,
                        error:string | null)=>void

}
class SuperUserContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get<T_UsersInitialType>("https://social-network.samuraijs.com/api/1.0/users").then((res)=>{
            this.props.setUsersFromServer(res.data.items,res.data.totalCount,res.data.error)
        })
    }
    render() {
        return <Users {...this.props}/>;
    }
}

const MyStateToProps = (state:RootState) => {
  return {users: state.UsersReducer?.items}
}
const MyDispatchToProps = (dispatch:AppDispatch) => {
  return {
      changeFollowStatus (userID:number, follow:boolean) {
          dispatch(changeFollowAC(userID,follow))
      },
      setUsersFromServer (usersData:UserBody[],totalCount:number | null,
                          error:string | null) {
          dispatch(setNewUsersAC(usersData,totalCount,error))
      }
  }
}

export const UserContainer = connect(MyStateToProps,MyDispatchToProps)(SuperUserContainer)