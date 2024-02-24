import React from "react";
import {T_ProfileContainerType} from "./ProfileInfoContainer";

export class ProfileInfo extends React.Component <T_ProfileContainerType>{

    render() {
    return <div id="ProfileInfo">
        <img src={this.props.profileInfo?.photos.large}></img>
        <span>{this.props.profileInfo?.fullName}</span>
        <span>{this.props.profileInfo?.lookingForAJobDescription}</span>
    </div>

}
}