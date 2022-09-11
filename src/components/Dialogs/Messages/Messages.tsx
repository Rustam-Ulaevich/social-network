import React from "react";
import s from './../Dialogs.module.css'
import {MessagesDataType} from "../../../Redux/store";


export function Messages(props: MessagesDataType) {

    let newMessagesText = React.createRef<HTMLTextAreaElement>()

    function addMessages() {
        let text = newMessagesText.current?.value
        alert(text)
    }


    return <div>
        <div className={s.message}>-{props.message}</div>
        {/*<textarea ></textarea>*/}
        {/*<button onClick={addMessages}>add message</button>*/}
    </div>
 }


