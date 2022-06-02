import {ActionsType, DialogsPageType} from "./state";

const ADD_MESSAGE_TEXT = 'ADD_MESSAGE_TEXT'
const SEND_MESSAGE_TEXT = 'SEND_MESSAGE_TEXT'

export const dialogsReducer = (state: DialogsPageType, action: ActionsType): DialogsPageType => {
    switch (action.type) {
        case ADD_MESSAGE_TEXT:
            state.newMessageText =action.body
            return state;
        case SEND_MESSAGE_TEXT:
            let body = state.newMessageText
            state.newMessageText = ''
            state.messagesData.push({id: 4, message: body})
            return state;
        default:
            return state;
    }
}

export const addMessageTextAC = (body: string) => ({type: ADD_MESSAGE_TEXT, body: body} as const)
export const sendMessageTextAC = () => ({type: SEND_MESSAGE_TEXT} as const)
