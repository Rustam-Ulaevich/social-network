import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ProfilePageType} from "../../../Redux/state";


type PropsType = {
    state: ProfilePageType
}

export const MyPosts = (props: PropsType) => {
   return (<div className={s.post}>
        <h3>My posts</h3>
        <div>
            <textarea/>
        </div>
        <div>
            <button>Add post</button>
        </div>
        <div className={s.post}>
            {props.state.postData.map
            ( p => <Post id={p.id} message={p.message} likesCount={p .likesCount}/>)}
        </div>
    </div>)
}
