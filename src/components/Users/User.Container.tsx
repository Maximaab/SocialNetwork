import {connect} from "react-redux";
import Users from "./Users";
import {AppDispatch, RootState} from "../data/redux/store";
import {changeFollowAC} from "../data/reducer/usersReducer";

const MyStateToProps = (state:RootState) => {
  return {users: state.UsersReducer?.users}
}
const MyDispatchToProps = (dispatch:AppDispatch) => {
  return {
      changeFollowStatus (userID:string, follow:boolean) {
          dispatch(changeFollowAC(userID,follow))
      }
  }
}

export const UserContainer = connect(MyStateToProps,MyDispatchToProps)(Users)