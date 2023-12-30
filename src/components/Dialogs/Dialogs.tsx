import React from 'react';
import s from "./Dialog.module.css"
import {NavLink, useParams} from "react-router-dom";
import {T_DialogsData} from "../data";

type T_DialogType = {
    id: string
    name: string

}

export const DialogItems = (props: T_DialogType) => {
    return <div>
        <NavLink className={s.user} to={`/messages/${props.id}`}>{props.name}</NavLink>
    </div>

}

type T_params = {
    id:string
}
type T_DialogsItems = {
    Items:T_DialogsData
}
export const Dialogs = (props:T_DialogsItems) => {
    const params = useParams<T_params>()
    console.log(params.id)

    const dialogInfo = props.Items.messageData.filter(el=>el.userID === params.id)
    console.log(dialogInfo)

    return (
        <div className={s.user} >
            <div className={s.user_a}>
                {props.Items.dialogItems.length
                    ? props.Items.dialogItems.map(item=><DialogItems key={item.id} id={item.id} name={item.name}></DialogItems>)
                    : <div>Item false</div>}
            </div>
            <div className={s.li}>

                <ul>

                    {dialogInfo.length
                        ? dialogInfo.map(el=><li>{el.messages}</li>)
                        : <li>Is Empty</li>}
                </ul>

            </div>
        </div>



    );
};

