import React from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div className={s.posts}>
            <Post/>
            <Post/>
            <Post/>

        </div>


    );
};