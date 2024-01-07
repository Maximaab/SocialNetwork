import React, {ChangeEvent} from 'react';
import s from "./Dialog.module.css"
import {NavLink, useParams} from "react-router-dom";
import {T_DialogsData} from "../data/data";

type T_DialogType = {
    id: string
    name: string

}

export class DialogItems extends React.Component<T_DialogType> {
    render() {
        const {id, name} = this.props
        return <div>
            <NavLink className={s.user} to={`/messages/${id}`}>{name}</NavLink>
        </div>
    }
}

// export const DialogItems = (props: T_DialogType) => {
//     return <div>
//         <NavLink className={s.user} to={`/messages/${props.id}`}>{props.name}</NavLink>
//     </div>
//
// }


type T_DialogsItems = {
    dialogItems: T_DialogsData,
    ChangeNewMessage:(message:string)=>void,
    AddNewValue:()=>void
}

export class Dialogs extends React.Component<T_DialogsItems> {
    render() {
        const {dialogItems,ChangeNewMessage,AddNewValue} = this.props
        const dialogInfo = dialogItems.messageData.filter(el => el.userID === "1")
        const onChengeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        ChangeNewMessage(e.currentTarget.value)
        }
        const onClickHandler=()=>{
            AddNewValue()
        }
        return (
            <div className={s.user}>
                <div className={s.user_a}>
                    {dialogItems.dialogItems.length
                        ? dialogItems.dialogItems.map(item => <DialogItems key={item.id} id={item.id}
                                                                           name={item.name}></DialogItems>)
                        : <div>Item false</div>}
                </div>
                <div className={s.li}>

                    <ul>

                        {dialogInfo.length
                            ? dialogInfo.map(el => <li>{el.messages}</li>)
                            : <li>Is Empty</li>}
                    </ul>
                    <input onChange={onChengeHandler} value={dialogItems.newValueForInput}/>
                    <button onClick={onClickHandler}>+</button>

                </div>
            </div>
        );
    }
}

// export const Dialogs = (props:T_DialogsItems) => {
//     const params = useParams<T_params>()
//     console.log(params.id)
//
//     const dialogInfo = props.Items.messageData.filter(el=>el.userID === params.id)
//     console.log(dialogInfo)
//
//     return (
//         <div className={s.user} >
//             <div className={s.user_a}>
//                 {props.Items.dialogItems.length
//                     ? props.Items.dialogItems.map(item=><DialogItems key={item.id} id={item.id} name={item.name}></DialogItems>)
//                     : <div>Item false</div>}
//             </div>
//             <div className={s.li}>
//
//                 <ul>
//
//                     {dialogInfo.length
//                         ? dialogInfo.map(el=><li>{el.messages}</li>)
//                         : <li>Is Empty</li>}
//                 </ul>
//
//             </div>
//         </div>
//     );
// };

