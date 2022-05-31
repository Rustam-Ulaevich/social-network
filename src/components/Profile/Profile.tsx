import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import store, {ActionsType, ProfilePageType} from "../../Redux/state";

type PropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsType) => void
}

export  const Profile = (props: PropsType) => {
    return <div>
        <ProfileInfo />
        <MyPosts postData={props.profilePage.postData}
                 textNewPost={props.profilePage.textNewPost}
                 dispatch = {store.dispatch.bind(store)}
        />
    </div>
}
