import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionsType, PostDataType} from "../../../Redux/state";
import {addPostAC, addTextPostAC} from "../../../Redux/profile-reducer";

type PropsType = {
    postData: Array<PostDataType>
    textNewPost: any
    // addPost: () => void
    //addTextPost: (text: string) => void
    dispatch: (action: ActionsType) => void
}

export const MyPosts = (props: PropsType) => {

    let postElement = props.postData.map( p =>
        <Post id={p.id} message={p.message} likesCount={p .likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        props.dispatch(addPostAC())
    }

    let onPostChange = () => {
        // @ts-ignore
        let text = newPostElement.current.value
        props.dispatch(addTextPostAC(text))
    }


    return (<div className={s.post}>
        <h3>My posts</h3>
        <div>
            <textarea value={props.textNewPost} onChange={onPostChange}
                ref={newPostElement}
            />
            <button onClick={ addPost }>Add post</button>
        </div>

        <div className={s.post}>
            {postElement}
        </div>
    </div>)
}

