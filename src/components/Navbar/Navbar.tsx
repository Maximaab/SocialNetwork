import React from 'react';
import s from './Navbar.module.css';
import {Link} from "react-router-dom";



export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <Link to={"/profile"}>Profile</Link>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <Link to={"/messages"}>Messages</Link>
            </div>
            <div className={s.item}>
                <Link to={"/news"}>News</Link>
            </div>
            <div className={s.item}>
                <Link to={"/music"}>Music</Link>
            </div>
            <div className={s.item}>
                <Link to={"/settings"}>Settings</Link>
            </div>
        </nav>
    );
};

