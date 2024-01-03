import {Dialogs} from "./Dialogs";
import {AppDispatch, RootState} from "../data/redux/store";
import {connect} from "react-redux";


const MyDialogsContainerProps = (state:RootState) => {
    return {
        dialogItems: state.DialogsReducer
    }
}

const DialogsContainer = connect(MyDialogsContainerProps)(Dialogs)


export default DialogsContainer;