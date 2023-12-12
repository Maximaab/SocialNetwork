import React from 'react';
import s from "./Profile.module.css"
import {Post} from "./MyPosts/Post/Post";
import {MyPosts} from "./MyPosts/MyPosts";
export const Profile = () => {
    return (
        <footer className={s.content}>
            <div>
                <img
                    src="https://s3.eu-central-1.amazonaws.com/aviata-blog-2.0/blog/posts/optimized/0_a10d989e346bb54487284cbe0d52d061449320a4.png.webp"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </footer>
    );
};

