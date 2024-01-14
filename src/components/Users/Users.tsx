import React from 'react';
import {UserBody} from "../data/reducer/usersReducer";
import defaultPhoto from "../assets/images/defaultPhoto.jpg"
import style from "./user.module.css"
type UsersPropsType = {
    changeFollowStatus:(userID:number, follow:boolean)=>void,
    users:UserBody[]
    setUsersFromServer:(usersData:UserBody[],totalCount:number | null,
                        error:string | null)=>void

}
class Users extends React.Component<UsersPropsType> {

    render() {
        const {changeFollowStatus,users }= this.props

        return <div>
            {users.map(u=>(
        <div key={u.id} className={style.user}>
            <h3>{u.name}</h3>
            <div>
                <img alt={"Ninja User"} src={u.photos.large||u.photos.small||defaultPhoto}/>
            </div>

            {u.followed
                ? <button onClick={()=>changeFollowStatus(u.id, !u.followed)}>Follow</button>
                : <button onClick={()=>changeFollowStatus(u.id, !u.followed) }>Unfollow</button>}
        </div>
        ))}
        </div>;
    }
}

export default Users;