import React from "react";
import {NavLink} from "react-router-dom";
import s from './../Dialogs.module.css'

export type DialogsItemsType = {
    id: number
    name: string
}

export function DialogsItems(props: DialogsItemsType) {
    let path = '/dialogs/' + props.id
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

