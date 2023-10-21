import React from 'react';
import s from "./Profile.module.css"
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
            <div>
                My post
                <div>
                    New post
                </div>
            </div>
            <div className="posts">
                <div className={s.item}>
                    post 1
                </div>
                <div className={s.item}>
                    post 2
                </div>
            </div>
        </footer>
    );
};

