import React from 'react';
import defaultPhoto from "../assets/images/defaultPhoto.jpg"
import style from "./user.module.css"
import {UsersPropsType} from "./User.Container";
import {log} from "util";

type T_UsersPropsType = {
    onPageChangeHandler: (pageNember: number) => void
}
type T_StatusUser = {
    maxCurrentPage:number,
    minCurrentPage:number,
    step: number
}

export class Users extends React.Component<UsersPropsType & T_UsersPropsType, T_StatusUser> {
constructor(props:UsersPropsType & T_UsersPropsType) {
    super(props);
    this.state = {
        maxCurrentPage:10,
        minCurrentPage:1,
        step:5
    }
}
    render() {
        const {changeFollowAC, users, onPageChangeHandler, pageSize, totalCount} = this.props
        const pages: number[] = []
        // const pageCounter = Math.ceil(totalCount / pageSize)


        for (let i = this.state.minCurrentPage; i <= this.state.maxCurrentPage; i++) {
            pages.push(i)
        }
        const nextPageUsers = (isDirectory:boolean) => {
            if (isDirectory) {
                this.setState((state) => ({
                    minCurrentPage: state.minCurrentPage + state.step,
                    maxCurrentPage: state.maxCurrentPage + state.step
                }))
            } else {
                this.state.minCurrentPage > 5 &&
                this.setState((state) => ({
                    minCurrentPage: state.minCurrentPage - state.step,
                    maxCurrentPage: state.maxCurrentPage - state.step
                }))
            }
        }
        {
            return this.props.isFetching
                ? <img alt={"Img is not found"} src={"https://i.gifer.com/origin/6f/6f0dfbd4b59327c55630cdcd5cd21729_w200.gif"}/>
                : <div>
                    <button onClick={()=>nextPageUsers(false)}>{"<"}</button>
                    {pages.map(el => {
                        return <button onClick={() => onPageChangeHandler(el)}>{el}</button>
                    })}
                    <button onClick={()=>nextPageUsers(true)}>{">"}</button>

                    {users.map(u => (
                        <div key={u.id} className={style.user}>
                            <h3>{u.name}</h3>
                            <div>
                                <img alt={"Ninja User"} src={u.photos.large || u.photos.small || defaultPhoto}/>
                            </div>

                            {u.followed
                                ? <button onClick={() => changeFollowAC(u.id, !u.followed)}>Follow</button>
                                : <button onClick={() => changeFollowAC(u.id, !u.followed)}>Unfollow</button>}
                        </div>
                    ))}
                </div>;
        }

        }


}

