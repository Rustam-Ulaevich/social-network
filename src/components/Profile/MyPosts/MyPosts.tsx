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
                <Post message='Hey, dude, when are you going to give me my money back?' likesCount={154} />
                <Post message='Fuck you! Do not I know you?' likesCount={6241}/>
            </div>
               </div>)
}
