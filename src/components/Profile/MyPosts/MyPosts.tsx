import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (<div className={s.post}>
            My posts
            <div>
                New posts
            </div>
            <div className={s.post}>
                <Post/>
            </div>
        </div>)
}
