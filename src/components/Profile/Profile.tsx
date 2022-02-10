import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../Redux/state";

type PropsType = {
    postData: ProfilePageType
    addPost: (postMessage: string) => void
}

export  const Profile = (props: PropsType) => {
    return <div>
        <ProfileInfo />
        <MyPosts state={props.postData} addPost={props.addPost}/>
    </div>
}
