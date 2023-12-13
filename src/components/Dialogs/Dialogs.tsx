import React, {FC} from 'react';
import s from "./Dialog.module.css"
import {NavLink, useParams} from "react-router-dom";
import {data} from "../data";

type T_DialogType = {
    name: string
    id: string
}
type T_params = {
    id:string
}
export const DialogItems = (props: T_DialogType) => {
    return <div>
        <NavLink to={`/messages/${props.id}`}>{props.name}</NavLink>
    </div>
}
export const Dialogs = () => {
    const params = useParams<T_params>()
    const dialogInfo = data.filter(el=>el.userID === params.id)
    console.log(dialogInfo)

    return (
        <div className={s.user} >
            <div className={s.user_a}>
                <DialogItems name={"Max"} id={"1"}/>
                <DialogItems name={"Vlad"} id={"2"}/>
                <DialogItems name={"Sasha"} id={"3"}/>
                <DialogItems name={"Alex"} id={"4"}/>
                <DialogItems name={"Dany"} id={"5"}/>
            </div>
            <div className={s.li}>
                {dialogInfo.map(el=><ul key={el.id}>{el.messages}</ul>)}
            </div>
        </div>



    );
};

