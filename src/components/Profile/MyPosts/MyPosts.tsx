import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ProfilePageType} from "../../../Redux/state";

type PropsType = {
    state: ProfilePageType
    addPost: (postMessage: string) => void
}

export const MyPosts = (props: PropsType) => {
    let postElement = props.state.postData.map
    ( p => <Post id={p.id} message={p.message} likesCount={p .likesCount}/>)


    let newPostElement = React.createRef<HTMLTextAreaElement>();

    function addPost(newPostElement: string) {
        debugger
        // let text = newPostElement.current?.value;
        // props.addPost(newPostElement.current.value)
    }


    return (<div className={s.post}>
        <h3>My posts</h3>
        <div>
            <textarea ref={newPostElement}></textarea>
            {/*<button onClick={ addPost }>Add post</button>*/}
        </div>

        <div className={s.post}>
            {postElement}
        </div>
    </div>)
}
