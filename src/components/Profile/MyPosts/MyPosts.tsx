import React from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {addPost, pdata} from "../../data";
type T_MyPost = {
    postData: pdata[]
    addPost:()=>void
}

export class MyPosts extends React.Component<T_MyPost> {
    render() {
        const {postData, addPost} = this.props
        return (<div>
                         <textarea></textarea>
                         <button onClick={addPost}>Add post</button>
                         <div className={s.posts}>
                             {postData.length?
                     postData.map(post=><Post message={post.message} likecount={post.likecount}></Post>)
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