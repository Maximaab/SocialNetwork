import React from 'react';
import s from "./Post.module.css"
import {pdata} from "../../../data";
type T_Post = {
    message:string,
    likecount:string

}
export const Post = (props:T_Post) => {
    return (

            <div className={s.item}>
                <img
                    src="https://tipik.ru/wp-content/uploads/2023/03/%D0%92%D0%BE%D0%BB%D0%BA-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B9-%D0%B8-%D0%BC%D0%BE%D1%89%D0%BD%D1%8B%D0%B9_001.jpg"/>
                post
                <div>
                    <span>{props.message}</span>
                </div>

                <input value={props.likecount}/>
                <input value={props.likecount}/>
            </div>
    );
};