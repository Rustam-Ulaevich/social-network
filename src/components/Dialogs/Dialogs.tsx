import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogsItems} from "./DialogItem/DialogItem";
import {Messages} from "./Messages/Messages";
import {DialogsPropsType} from "./DialogsCotainer";


export function Dialogs(props: DialogsPropsType) {

    let state = props.dialogsPage

    let dialogsElements = state.dialogsData.map( d => <DialogsItems key={d.id} image={d.image} id={d.id} name={d.name}/>)
    let messageElements = state.messagesData.map( m => <Messages key={m.id} message={m.message} id={m.id}/>)
    let newMessageBody = state.newMessageText

    const onSendMessageClick = () => {
        props.sendMessage()
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.addMessageText(body)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   placeholder='Enter message'
                                   onChange={onNewMessageChange}>
                    </textarea></div>
                    <div><button onClick={onSendMessageClick}>Send message</button></div>
                </div>
            </div>
        </div>
    )
}
