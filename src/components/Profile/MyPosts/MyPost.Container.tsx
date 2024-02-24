import {ChangeEvent} from "react";
import {addPostAC, onChangePostValueAC} from "../../../helpers/action/action.type";
import {MyPosts} from "./MyPosts";
import {AppDispatch, RootState} from "../../data/redux/store";
import {connect} from "react-redux";

// type T_MyPost = {
//     ProfilePage: { newValueForPost: string, postData: pdata[] }
//     dispatch: (action: T_MainDuspatch) => void
// }

// export class MyPostContainer extends React.Component<T_MyPost, any> {
//
//     render() {
//         const {dispatch} = this.props
//         const onClickHandler = () => {
//             dispatch({type: addPostAC})
//         }
//         const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
//             dispatch({type: onChangePostValueAC, defaultValue: e.currentTarget.value})
//
//         }
//         return <MyPosts ProfilePage={this.props.ProfilePage} onClickHandler={onClickHandler}
//                         onChangeHandler={onChangeHandler}/>;
//     }
// }

const MyStatePostProps = (state: RootState) => {
    return {
        ProfilePage: state.ProfileReducer
    }
}
const mapDispatchToProps = (dispatch:AppDispatch)=>{
    return {
        onClickHandler  ()  {
            dispatch({type: addPostAC})
        },
        onChangeHandler  (e: ChangeEvent<HTMLTextAreaElement>) {
            dispatch({type: onChangePostValueAC, defaultValue: e.currentTarget.value})

        }
    }

}
const MyPostContainer = connect(MyStatePostProps,mapDispatchToProps)(MyPosts)

export default MyPostContainer