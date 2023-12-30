import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {dialog, T_DialogsData} from "../data";

type NavbarType = {
    dialogData:dialog[]
}

export const Navbar = (props:NavbarType) => {
    return (
        <nav className={s.nav}>
            <div >
                <NavLink className={({isActive})=>isActive ? s.item_active : s.item} to={"/profile"}>Profile</NavLink>
            </div>
            <div >
                <NavLink className={({isActive})=>isActive ? s.item_active : s.item} to={`/messages/${props.dialogData[0]}`}>Messages</NavLink>
            </div>
            <div >
                <NavLink className={({isActive})=>isActive ? s.item_active : s.item} to={"/news"}>News</NavLink>
            </div>
            <div >
                <NavLink className={({isActive})=>isActive ? s.item_active : s.item} to={"/music"}>Music</NavLink>
            </div>
            <div >
                <NavLink className={({isActive})=>isActive ? s.item_active : s.item} to={"/settings"}>Settings</NavLink>
            </div>
        </nav>
    );
};

