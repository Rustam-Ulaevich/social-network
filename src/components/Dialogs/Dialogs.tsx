import React from "react";
import s from './Dialogs.module.css'
import {DialogsItems} from "./DialogItem/DialogItem";
import {Messages} from "./Messages/Messages";
import {DialogsPageType} from "../../Redux/state";

type PropsType = {
    state: DialogsPageType
}

export function Dialogs(props: PropsType) {

    let newMessagesText = React.createRef<HTMLTextAreaElement>()

    function addMessages() {
        let text = newMessagesText.current?.value
        alert(text)
    }

    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {props.state.dialogsData.map( d => <DialogsItems image={d.image} id={d.id} name={d.name}/>)}
        </div>
        <div className={s.messages}>
            {props.state.messagesData.map( m => <Messages message={m.message} id={m.id}/>
            )}
            <div>
                <textarea ref={newMessagesText}></textarea>
                <button onClick={addMessages}>add message</button>
            </div>

        </div>


    </div>
}
