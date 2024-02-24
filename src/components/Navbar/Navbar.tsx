import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {dialog, T_DialogsData} from "../data/data";

type NavbarType = {
    dialogData: dialog[]
}

export class Navbar extends React.Component<NavbarType> {
    render() {
        const {dialogData} = this.props
        const firstList = dialogData[0].id
        return <nav className={s.nav}>
            <div>
                <NavLink className={({isActive}) => isActive ? s.item_active : s.item} to={"/profile/2"}>Profile</NavLink>
            </div>
            <div>
                <NavLink className={({isActive}) => isActive ? s.item_active : s.item}
                         to={`/messages/${firstList}`}>Messages</NavLink>
            </div>
            <div>
                <NavLink className={({isActive}) => isActive ? s.item_active : s.item}
                         to={"/news"}>News</NavLink>
            </div>
            <div>
                <NavLink className={({isActive}) => isActive ? s.item_active : s.item}
                         to={"/music"}>Music</NavLink>
            </div>
            <div>
                <NavLink className={({isActive}) => isActive ? s.item_active : s.item}
                         to={"/settings"}>Settings</NavLink>
            </div>
            <div>
                <NavLink className={({isActive}) => isActive ? s.item_active : s.item}
                         to={"/users"}>Users</NavLink>
            </div>
        </nav>
    }
}

// export const Navbar = (props:NavbarType) => {
//     return (
//         <nav className={s.nav}>
//             <div >
//                 <NavLink className={({isActive})=>isActive ? s.item_active : s.item} to={"/profile"}>Profile</NavLink>
//             </div>
//             <div >
//                 <NavLink className={({isActive})=>isActive ? s.item_active : s.item} to={`/messages/${props.dialogData[0]}`}>Messages</NavLink>
//             </div>
//             <div >
//                 <NavLink className={({isActive})=>isActive ? s.item_active : s.item} to={"/news"}>News</NavLink>
//             </div>
//             <div >
//                 <NavLink className={({isActive})=>isActive ? s.item_active : s.item} to={"/music"}>Music</NavLink>
//             </div>
//             <div >
//                 <NavLink className={({isActive})=>isActive ? s.item_active : s.item} to={"/settings"}>Settings</NavLink>
//             </div>
//         </nav>
//     );
// };

