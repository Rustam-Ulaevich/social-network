import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionsType, PostDataType, ProfilePageType} from "../../../Redux/state";

type PropsType = {
    postData: Array<PostDataType>
    textNewPost: any
    // addPost: () => void
    // addTextPost: (textPost: any) => void
    dispatch: (action: ActionsType) => void
}

export const MyPosts = (props: PropsType) => {
    let postElement = props.postData.map
    ( p => <Post id={p.id} message={p.message} likesCount={p .likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        props.dispatch({type: "ADD-POST", textNewPost: props.textNewPost})
        // props.addTextPost('')
    }

    let onPostChange = () => {
        let text = newPostElement.current?.value
        // props.addTextPost(text)
        props.dispatch({type: 'ADD-TEXT-POST', textPost: props.textNewPost})

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
