import React from "react";
import {Profile_api} from "../../../API/profile_api";
import {AppDispatch, RootState} from "../../data/redux/store";
import {ProfileInfo} from "./ProfileInfo";
import {setUserInfoAC, T_Profile_Info} from "../../data/reducer/profileReducer";
import {connect} from "react-redux";
import {withRouterHoc} from "../../../hoc/WithRouterHoc";

export type T_ProfileContainerType = {
    profileInfo: T_Profile_Info | null,
    setUserInfoAC: (userInfo: T_Profile_Info) => void
    id?: string
}
class ProfileInfoContainer extends React.Component<T_ProfileContainerType> {
    componentDidMount() {

        this.props.id &&
        Profile_api.getUsers(+(this.props.id)).then((res) => {
            this.props.setUserInfoAC(res.data)
        })

    }

    render() {
        return <div>
            <ProfileInfo {...this.props}/>
        </div>;
    }
}
const MapStateToProps = (state: RootState) => {
    return state.ProfileReducer
}
const MapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        setUserInfoAC: (userInfo: T_Profile_Info) => dispatch(setUserInfoAC(userInfo))
    }
}

const WithRouter = withRouterHoc(ProfileInfoContainer)
export default connect(MapStateToProps, MapDispatchToProps)(WithRouter)