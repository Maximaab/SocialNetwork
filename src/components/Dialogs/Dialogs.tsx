import React from 'react';
import s from "./Dialog.module.css"
import {NavLink, useParams} from "react-router-dom";
import {dialog, T_DialogsData} from "../data";

type T_DialogType = {
    name: string
    id: string
}

export const DialogItems = (props: T_DialogType) => {
    return <div>
        <NavLink to={`/messages/${props.id}`}>{props.name}</NavLink>
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
    // const dialogInfo = data.filter(el=>el.userID === params.id)


    return (
        <div className={s.user} >
            <div className={s.user_a}>
                {props.Items.dialogItems.length
                    ?props.Items.dialogItems.map(item=><DialogItems id={item.name} name={item.id}></DialogItems>)
                    :<div>Item false</div>}
            </div>
            <div className={s.li}>
                {/*{dialogInfo.map(el=><ul key={el.id}>{el.messages}</ul>)}*/}
                {props.Items.messageData.map(mas=><div key={mas.id}>{mas.messages}</div>)}
            </div>
        </div>



    );
};

