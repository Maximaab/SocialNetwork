import React from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {pdata} from "../../data";
type T_MyPost = {
    postData: pdata[]
}
export const MyPosts = (props:T_MyPost) => {
    return (
        <div className={s.posts}>
            {props.postData.length?
                props.postData.map(post=><Post message={post.message} likecount={post.likecount}></Post>)
                :<div>Post empty</div>}


        </div>


    );
};