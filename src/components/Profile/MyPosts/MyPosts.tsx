import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {pdata} from "../../data";

type T_MyPost = {
    ProfilePage: {newValueForPost: string,postData: pdata[]}
    addPost:(value:string)=>void
    onChangePostValue:(value:string)=>void
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
        const {ProfilePage, addPost, onChangePostValue} = this.props
        // const {textValue} = this.state
        const onClickHandler = () =>{
            addPost(ProfilePage.newValueForPost)
            // this.setState({textValue: " "})
        }
        const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) =>{
            onChangePostValue(e.currentTarget.value)
        }
        return (<div>
                         <textarea  onChange={onChangeHandler}></textarea>
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