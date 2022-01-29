import React from "react";
import s from './../Dialogs.module.css'
import {MessagesDataType} from "../../../Redux/state";


export function Messages(props: MessagesDataType) {
    return <div className={s.message}>{props.message}</div>
}


