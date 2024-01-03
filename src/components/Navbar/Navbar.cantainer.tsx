import {connect} from "react-redux";
import {Navbar} from "./Navbar";
import {RootState} from "../data/redux/store";

const mapStateToProps =(state:RootState)=>{
    return{
        dialogData:state.DialogsReducer?.dialogItems
    }
}
export const NavbarCantainer = connect (mapStateToProps)(Navbar)