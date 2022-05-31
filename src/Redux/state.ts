export type PostDataType = {
    id: number
    message: string
    likesCount: number
}
export type DialogsDataType = {
    id: number
    name: string
    image: string
}
export type MessagesDataType = {
    id: number
    message: string
}
export type ProfilePageType = {
    postData: Array<PostDataType>
    textNewPost: string
}
export type DialogsPageType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
}
export type SidebarType = {}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

export type StoreType = {
    _state: StateType
    getState: () => StateType
    addTextPost: (textPost: string) => void
    addPost: (textNewPost: string) => void
    _callSubscriber: () => void
    subscribe: ( observer: () => void ) => void
    dispatch: (action: ActionsType) => void
}

export type ActionsType = AddPostActionType | AddTextPostActionType

type AddPostActionType = {
    type: 'ADD-POST'
    textNewPost: string
}
type AddTextPostActionType = {
    type: 'ADD-TEXT-POST'
    textPost: string
}


let store: StoreType = {
    _state: {
        profilePage: {
            postData: [
                {
                    id: 1,
                    message: 'Hey, where is my money?',
                    likesCount: 154
                },
                {
                    id: 2,
                    message: 'Fuck you! I don not know?',
                    likesCount: 6241
                },
                {
                    id: 3,
                    message: 'Ok? албыбек!!!',
                    likesCount: 6241
                }
            ],
            textNewPost: 'Rustamchik',
        },
        dialogsPage: {
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
            ]
        },
        sidebar: {}
    },
    getState() {
        return  this._state
    },
    _callSubscriber() {
        // console.log('State changed');
    },
    dispatch(action) {
        if (action.type === 'ADD-POST'){
            const newPost: PostDataType = {
                id: 5,
                message: action.textNewPost,
                likesCount: 0
            };
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.textNewPost = '';
            this._callSubscriber();
        }
        else if (action.type === 'ADD-TEXT-POST'){
            this._state.profilePage.textNewPost = action.textPost;
            this._callSubscriber();
        }
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.textNewPost,
            likesCount: 0
        };
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.textNewPost = '';
        this._callSubscriber();
    },
    addTextPost(textPost: string) {
        this._state.profilePage.textNewPost = textPost;
        this._callSubscriber();
    },
    subscribe(observer) {
        this._callSubscriber = observer
    }
}

export default store
// window.store = store








