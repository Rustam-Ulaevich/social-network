import React from "react";
import {NavLink} from "react-router-dom";
import s from './DialogsItem.module.css'
import {DialogsDataType} from "../../../Redux/store";

type PropsType = {
    id: number
    name: string
    image: string
}

export function DialogsItems(props: PropsType) {
    let path = '/dialogs/' + props.id
    return <div className={s.dialog + ' ' + s.active}>
        <img src={props.image}/>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

