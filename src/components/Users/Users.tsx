import React from 'react';
import {T_UsersInitialType, UserBody} from "../data/reducer/usersReducer";

type UsersPropsType = {
    changeFollowStatus:(userID:string, follow:boolean)=>void,
    users:UserBody[]
}
class Users extends React.Component<UsersPropsType> {

    render() {
        const {changeFollowStatus,users }= this.props

        return <div>
            {users.map(u=>(
        <div key={u.id}>
            <h3>{u.name}</h3>
            {u.follow
                ? <button onClick={()=>changeFollowStatus(u.id, !u.follow)}>Follow</button>
                : <button onClick={()=>changeFollowStatus(u.id, !u.follow) }>Unfollow</button>}
        </div>
        ))}
        </div>;
    }
}

export default Users;