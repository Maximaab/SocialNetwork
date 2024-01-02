import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {pdata} from "../../data/data";
import {addPostAC, onChangePostValueAC} from "../../../helpers/action/action.type";

type T_MyPost = {
    ProfilePage: {newValueForPost: string,postData: pdata[]}
    dispatch:(action:any)=>void
}
type I_Props = {
    textValue:string
}

export class MyPosts extends React.Component<T_MyPost, I_Props> {
    // constructor(props:T_MyPost | Readonly<T_MyPost>) {
    //     super(props);
    //     this.state = {
    //         textValue: ""
    //     }
    // }
    render() {
        const {ProfilePage, dispatch} = this.props
        // const {textValue} = this.state
        const onClickHandler = () =>{

            dispatch({type:addPostAC, title:this.props.ProfilePage.newValueForPost})
             }
        const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) =>{

            dispatch({type:onChangePostValueAC, defaultValue:e.currentTarget.value})

        }
        return (<div>
                         <textarea  onChange={onChangeHandler} value={ProfilePage.newValueForPost}></textarea>
                         <button onClick={onClickHandler}>Add post</button>
                         <div className={s.posts}>
                             {ProfilePage.postData.length?
                                 ProfilePage.postData.map(post=><Post message={post.message} likecount={post.likecount}></Post>)
                     :<div>Post empty</div>}
             </div>
     </div>
     );
    }
}
// export const MyPosts = (props:T_MyPost) => {
//     const addPostHandler = () =>{
//         props.addPost()
//         console.log(props.addPost)
//     }
//     return (<div>
//             <textarea></textarea>
//             <button onClick={addPostHandler}>Add post</button>
//             <div className={s.posts}>
//                 {props.postData.length?
//                     props.postData.map(post=><Post message={post.message} likecount={post.likecount}></Post>)
//                     :<div>Post empty</div>}
//             </div>
//     </div>
//     );
// };