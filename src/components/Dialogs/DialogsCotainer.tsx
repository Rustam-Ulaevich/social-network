import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogsItems} from "./DialogItem/DialogItem";
import {Messages} from "./Messages/Messages";
import {ActionsType, DialogsPageType} from "../../Redux/state";
import {addMessageTextAC, sendMessageTextAC} from "../../Redux/dialogs-reducer";
import * as events from "events";
import {Dialogs} from "./Dialogs";

type PropsType = {
    state: DialogsPageType
    dispatch: (action: ActionsType) => void
}

export function DialogsContainer(props: PropsType) {

    let newMessagesText = React.createRef<HTMLTextAreaElement>()

    function addMessages() {
        let text = newMessagesText.current?.value
    }
    let newMessageBody = props.state.newMessageText
    const onSendMessageClick = () => {
        props.dispatch(sendMessageTextAC())
    }
    const onNewMessageChange = (boby: string) => {
        props.dispatch(addMessageTextAC(boby))
    }

    return <Dialogs addMessageText={onNewMessageChange} sendMessage={newMessageBody}/>
}
