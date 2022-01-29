import React from "react";
import s from './Dialogs.module.css'
import {DialogsItems} from "./DialogItem/DialogItem";
import {Messages} from "./Messages/Messages";
import {DialogsDataType, MessagesDataType} from "../../Redux/state";


type DialogsType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
}

export function Dialogs(props: DialogsType) {

    let dialogs = props.dialogsData.map( d => <DialogsItems id={d.id} name={d.name}/>)

    let messages = props.messagesData.map( m => <Messages message={m.message} id={m.id}/>
    )

    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogs}
        </div>
        <div className={s.messages}>
            {messages}
        </div>
    </div>
}
