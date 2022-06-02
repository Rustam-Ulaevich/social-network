import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogsItems} from "./DialogItem/DialogItem";
import {Messages} from "./Messages/Messages";
import {ActionsType, DialogsPageType} from "../../Redux/state";
import {addMessageTextAC, sendMessageTextAC} from "../../Redux/dialogs-reducer";
import * as events from "events";

type PropsType = {
    state: DialogsPageType
    dispatch: (action: ActionsType) => void
}

export function Dialogs(props: PropsType) {

    let newMessagesText = React.createRef<HTMLTextAreaElement>()

    function addMessages() {
        let text = newMessagesText.current?.value
    }
    let newMessageBody = props.state.newMessageText
    const onSendMessageClick = () => {
        props.dispatch(sendMessageTextAC())
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {

      let boby = e.target.value
        props.dispatch(addMessageTextAC(boby))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.state.dialogsData.map( d => <DialogsItems image={d.image} id={d.id} name={d.name}/>)}
            </div>
            <div className={s.messages}>
                <div>{props.state.messagesData.map( m => <Messages message={m.message} id={m.id}/>)}</div>
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
