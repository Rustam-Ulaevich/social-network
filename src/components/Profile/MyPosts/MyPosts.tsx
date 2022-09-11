import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostDataType} from "../../../Redux/store";

type PropsType = {
    posts: Array<PostDataType>
    newPostText: string
    addPost: () => void
    updateNewPostText: (text: string) => void
}

export const MyPosts = (props: PropsType) => {

    let postElement = props.posts.map(p =>
        <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        // @ts-ignore
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div className={s.post}>
        <h3>My posts</h3>
        <div>
            <textarea value={props.newPostText}
                      onChange={onPostChange}
                      ref={newPostElement}
            />
            <button onClick={ onAddPost }>Add post</button>
        </div>
        <div className={s.post}>
            {postElement}
        </div>
    </div>)
}

