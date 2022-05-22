import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {addTextPost, ProfilePageType} from "../../Redux/state";

type PropsType = {
    profilePage: ProfilePageType
    addPost: () => void
    addTextPost: (textPost: string) => void
}

export  const Profile = (props: PropsType) => {
    return <div>
        <ProfileInfo />
        <MyPosts postData={props.profilePage.postData}
                 textNewPost={props.profilePage.textNewPost}
                 addPost={props.addPost}
                 addTextPost={props.addTextPost}
        />
    </div>
}
