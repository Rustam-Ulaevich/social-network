import React, {ChangeEvent} from "react";
import {StoreType} from "../../Redux/state";
import {addMessageTextAC, sendMessageTextAC} from "../../Redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import StoreContext from "../../StoreContext";

type PropsType = {
}

export function DialogsContainer(props: PropsType) {


    return <StoreContext.Consumer>
        {(store: StoreType) => {
            let state = store.getState().dialogsPage

            const onSendMessageClick = () => {
                store.dispatch(sendMessageTextAC())
            }
            const onNewMessageChange = (body: string) => {
                store.dispatch(addMessageTextAC(body))
            }

            return <Dialogs addMessageText={onNewMessageChange}
                        sendMessage={onSendMessageClick}
                        dialogsPage={state}/>}
    }
    </StoreContext.Consumer>


}
