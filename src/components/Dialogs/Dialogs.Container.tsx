import {Dialogs} from "./Dialogs";
import {AppDispatch, RootState} from "../data/redux/store";
import {connect} from "react-redux";
import {addNewMessageAc, changeNewValueAC} from "../data/reducer/dialogsReducer";


const MyDialogsContainerProps = (state:RootState) => {
    return {
        dialogItems: state.DialogsReducer
    }
}
const MyDispatchToProps = (dispatch:AppDispatch) => {
  return {
      ChangeNewMessage(message:string){
          dispatch(changeNewValueAC(message))
      },
      AddNewValue(){
          dispatch(addNewMessageAc())
      }
  }
}

const DialogsContainer = connect(MyDialogsContainerProps, MyDispatchToProps)(Dialogs)


export default DialogsContainer;