import {ActionsType, PostDataType, ProfilePageType} from "./state";

const ADD_POST = 'ADD-POST'
const ADD_TEXT_POST = 'ADD-TEXT-POST'

export const profileReducer = (state: ProfilePageType, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostDataType = {
                id: 5,
                message: state.textNewPost,
                likesCount: 0
            }
            state.postData.push(newPost)
            state.textNewPost = ''
            return state;
        case ADD_TEXT_POST:
            state.textNewPost = action.text;
            return state;
        default:
            return state;
    }
}

export const addPostAC = () => ({type: ADD_POST} as const)

export const addTextPostAC = (text: string) => ({type: ADD_TEXT_POST, text: text} as const)
