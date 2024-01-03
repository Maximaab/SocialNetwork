import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {pdata, T_ProfilePage} from "../../data/data";
import {addPostAC, onChangePostValueAC} from "../../../helpers/action/action.type";

type T_MyPost = {
    ProfilePage: { newValueForPost: string, postData: pdata[] }
    onClickHandler: () => void
    onChangeHandler: (e:ChangeEvent<HTMLTextAreaElement>) => void
}
// type I_Props = {
//     textValue:string
// }

export class MyPosts extends React.Component<T_MyPost, any> {

    render() {
        const {ProfilePage, onClickHandler, onChangeHandler} = this.props
        return (<div>
                <textarea onChange={onChangeHandler} value={ProfilePage.newValueForPost}></textarea>
                <button onClick={onClickHandler}>Add post</button>
                <div className={s.posts}>
                    {ProfilePage.postData.length ?
                        ProfilePage.postData.map(post => <Post message={post.message}
                                                               likecount={post.likecount}></Post>)
                        : <div>Post empty</div>}
                </div>
            </div>
        );
    }
}


