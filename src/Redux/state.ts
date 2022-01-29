export type PostDataType = {
    id: number
    message: string
    likesCount: number
}
export type DialogsDataType = {
    id: number
    name: string
}
export type MessagesDataType = {
    id: number
    message: string
}
export type StateType = {
    postData: Array<PostDataType>
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
}
export let state = {
    postData: [
        {id: 1, message: 'Hey, dude, when are you going to give me my money back?', likesCount: 154},
        {id: 2, message: 'Fuck you! Do not I know you?', likesCount: 6241},
        {id: 3, message: 'Ok? айбыбек!!!', likesCount: 6241}
    ],
    dialogsData: [
        {id: 1, name: 'Rustam'},
        {id: 2, name: 'Gulnara'},
        {id: 3, name: 'Diana'},
        {id: 4, name: 'Dinara'},
        {id: 5, name: 'Samira'},
    ],
    messagesData: [
        {id: 1, message: 'Ты купил хлеб?'},
        {id: 2, message: 'Вылетело из головы'},
        {id: 3, message: 'Дуй в магазин!!!'}
    ]
}
