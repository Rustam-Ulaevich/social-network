import {ActionsType, DialogsPageType} from "./state";

const ADD_MESSAGE_TEXT = 'ADD_MESSAGE_TEXT'
const SEND_MESSAGE_TEXT = 'SEND_MESSAGE_TEXT'

let initialState = {
    dialogsData: [
        {id: 1, name: 'Rustam', image: 'https://st2.depositphotos.com/1064545/10255/i/950/depositphotos_102555954-stock-photo-3d-man-working-in-a.jpg'},
        {id: 2, name: 'Gulnara', image: 'https://weblinks.ru/wp-content/uploads/2021/02/2727271934.jpg'},
        {id: 3, name: 'Diana', image: 'https://avatars.mds.yandex.net/i?id=35d1dec408d26d6a5084e210eea2301a-5529172-images-thumbs&ref=rim&n=33&w=140&h=165'},
        {id: 4, name: 'Dinara', image: 'https://avatars.mds.yandex.net/i?id=bdfa0bcfa719da91ca0e3525a34916d8-5544703-images-thumbs&ref=rim&n=33&w=149&h=165'},
        {id: 5, name: 'Samira', image: 'https://avatars.mds.yandex.net/i?id=552bcab3e8cbe67b2bffd25e4e783587-5604449-images-thumbs&ref=rim&n=33&w=146&h=165'},
    ],
    messagesData: [
        {id: 1, message: 'Ты купил хлеб?'},
        {id: 2, message: 'Вылетело из головы'},
        {id: 3, message: 'Дуй в магазин!!!'}
    ],
    newMessageText: ''
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsType): DialogsPageType => {
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
