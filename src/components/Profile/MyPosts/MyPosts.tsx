import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostDataType} from "../../../Redux/state";


type PropsType = {
    postData: Array<PostDataType>
}

export const MyPosts = (props: PropsType) => {

    let postElements = props.postData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (<div className={s.post}>
        <h3>My posts</h3>
        <div>
            <textarea/>
        </div>
        <div>
            <button>Add post</button>
        </div>
        <div className={s.post}>
            {postElements}
        </div>
    </div>)
}
