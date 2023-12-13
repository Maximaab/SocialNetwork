import React from 'react';
import s from './Navbar.module.css';
import {Link, NavLink} from "react-router-dom";



export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div >
                <NavLink className={({isActive})=>isActive ? s.item_active : s.item} to={"/profile"}>Profile</NavLink>
            </div>
            <div >
                <NavLink className={({isActive})=>isActive ? s.item_active : s.item} to={"/messages"}>Messages</NavLink>
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

