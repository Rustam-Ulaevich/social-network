import React from "react";
import {addMessageTextAC, sendMessageTextAC} from "../../Redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state: any) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        addMessageText: (body: string) => {
            dispatch(addMessageTextAC(body))
        } ,
        sendMessage: () => {
            dispatch(sendMessageTextAC())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
