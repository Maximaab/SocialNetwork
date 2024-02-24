import React from 'react';
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {pdata} from "../data/data";
import MyPostContainer from "./MyPosts/MyPost.Container";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";




export class Profile extends React.Component<any> {
    render() {
        const {} = this.props
        return <footer className={s.content}>
            <ProfileInfoContainer/>
            {/*<div>*/}
            {/*    <img*/}
            {/*        src="https://s3.eu-central-1.amazonaws.com/aviata-blog-2.0/blog/posts/optimized/0_a10d989e346bb54487284cbe0d52d061449320a4.png.webp"/>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    ava + description*/}
            {/*</div>*/}
            <MyPostContainer />
        </footer>
    }
}

// export const Profile = (props:T_Profile) => {
//     return (
//         <footer className={s.content}>
//             <div>
//                 <img
//                     src="https://s3.eu-central-1.amazonaws.com/aviata-blog-2.0/blog/posts/optimized/0_a10d989e346bb54487284cbe0d52d061449320a4.png.webp"/>
//             </div>
//             <div>
//                 ava + description
//             </div>
//             <MyPosts postData={props.postData} addPost={props.addPost}/>
//         </footer>
//     );
// }


