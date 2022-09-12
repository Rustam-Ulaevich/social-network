import React from "react";
import {addMessageTextAC, sendMessageTextAC} from "../../Redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {DialogsPageType} from "../../Redux/store";

type MapStatePropsType = {
    dialogsPage: DialogsPageType
}
type MapDispatchPropsType = {
    addMessageText: (body: string) => void
    sendMessage: () => void
}
export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: any): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: any): MapDispatchPropsType => {
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
